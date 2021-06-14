using ExamOnline.Models;
using ExamOnline.Models.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ExamOnlineSystem.Models.Repositories
{
    public class QuestionExamDbRepository : IRepository<QuestionExam>
    {
        ExamOnlineContext context;
        public QuestionExamDbRepository(ExamOnlineContext _context)
        {
            context = _context;
        }
        public void Add(QuestionExam NewquestionExam)
        {
            context.QuestionExams.Add(NewquestionExam);
            context.SaveChanges();
        }

        //**Not used
        public void AddList(IList<QuestionExam> entity)
        {
            throw new NotImplementedException();
        }

        //**Not used
        public void Delete(int id)
        {
            throw new NotImplementedException();
        }

        //**Not used
        public void DeleteStudentAnswer(int StudentID, int QuestionID, int ExamID)
        {
            throw new NotImplementedException();
        }

        //**Not used
        public QuestionExam Find(int id)
        {
            throw new NotImplementedException();
        }

        //**Not used
        public IQueryable<QuestionExam> FindExamsStudentAttended(int StudentID)
        {
            throw new NotImplementedException();
        }

        //**Not used
        public QuestionExam FindStudentAnswer(int StudentID, int QuestionID, int ExamID)
        {
            throw new NotImplementedException();
        }

        //**Not used
        public IQueryable<QuestionExam> FindStudentAnswerAccordingToExamID(int StudentID, int ExamID)
        {
            throw new NotImplementedException();
        }

        //**Not used
        public IList<QuestionExam> Get()
        {
            throw new NotImplementedException();
        }

        //**Not used
        public IQueryable<QuestionExam> GetAllQuestionAccordingToExamId(int id)
        {
            throw new NotImplementedException();
        }

        //**Not used
        public QuestionExam Login(QuestionExam entity)
        {
            throw new NotImplementedException();
        }

        //**Not used
        public void Update(int id, QuestionExam entity)
        {
            throw new NotImplementedException();
        }

        //**Not used
        public void UpdateStudentAnswer(QuestionExam entity)
        {
            throw new NotImplementedException();
        }
    }
}
