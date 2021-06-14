using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ExamOnline.Models.Repositories
{
    public class QuestionDbRepository : IRepository<Questions>
    {
        ExamOnlineContext context;
        public QuestionDbRepository(ExamOnlineContext _context)
        {
            context = _context;
        }
        public void Add(Questions NewQuestion)
        {
            context.Questions.Add(NewQuestion);
            context.SaveChanges();
        }

        public void Delete(int id)
        {
            Questions questionsInDb = context.Questions.FirstOrDefault(q => q.QuestionID == id);
            if (questionsInDb != null)
            {
                context.Questions.Remove(questionsInDb);
                context.SaveChanges();
            }

        }

        //**Not Used
        public void DeleteStudentAnswer(int StudentID, int QuestionID, int ExamID)
        {
            throw new NotImplementedException();
        }

        public Questions Find(int id)
        {
            Questions questionsInDb = context.Questions.FirstOrDefault(q => q.QuestionID == id);
            return questionsInDb;
        }

        public IQueryable<Questions> GetAllQuestionAccordingToExamId(int id)
        {
            //Extension Method 
            var QuestionsListAccordingToExamID = context.QuestionExams
                                                        .Where(e => e.ExamID == id)
                                                        .Include(QuestionExams => QuestionExams.Question)
                                                        .Select(q => q.Question);
                                                        //.Select(q =>
                                                        //            new
                                                        //            {
                                                        //             q.Question.QuestionID,
                                                        //             q.Question.Text,
                                                        //             q.Question.Mark,
                                                        //             q.Question.ModelAnswer
                                                        //            });
            //Query Syntax 
            var questionsList = from q in context.QuestionExams
                                .Include(q => q.Question)
                                where q.ExamID == id
                                select q;

            return QuestionsListAccordingToExamID;
        }

        //**Not used 
        public Questions FindStudentAnswer(int StudentID, int QuestionID, int ExamID)
        {
            throw new NotImplementedException();
        }

        public IList<Questions> Get()
        {
            IList<Questions> QuestionsList = context.Questions.ToList();
            return QuestionsList;

        }

        public Questions Login(Questions entity)
        {
            throw new NotImplementedException();
        }

        public void Update(int id, Questions UpdateQuestions)
        {
            Questions questionsInDb = context.Questions.FirstOrDefault(q => q.QuestionID == id);
            questionsInDb.Text = UpdateQuestions.Text;
            questionsInDb.ModelAnswer = UpdateQuestions.ModelAnswer;
            questionsInDb.Mark = UpdateQuestions.Mark;
            context.SaveChanges();
        }

        //**Not used
         public void UpdateStudentAnswer(Questions entity)
        {
            throw new NotImplementedException();
        }

        //**Not used 
        public void AddList(IList<Questions> entity)
        {
            throw new NotImplementedException();
        }

        //**Not used
        public IQueryable<Questions> FindStudentAnswerAccordingToExamID(int StudentID, int ExamID)
        {
            throw new NotImplementedException();
        }

        //**Not used
        public IQueryable<Questions> FindExamsStudentAttended(int StudentID)
        {
            throw new NotImplementedException();
        }
    }
}
