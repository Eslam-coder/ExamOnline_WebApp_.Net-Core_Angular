using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
namespace ExamOnline.Models.Repositories
{
    public class ExamDbReposiotry : IRepository<Exam>
    {
        ExamOnlineContext context;
        public ExamDbReposiotry(ExamOnlineContext _context)
        {
            context = _context;
        }
        public void Add(Exam NewExam)
        {
            context.Exams.Add(NewExam);
            context.SaveChanges();
        }

        //**Not used 
        public void AddList(IList<Exam> entity)
        {
            throw new NotImplementedException();
        }

        public void Delete(int id)
        {
            Exam ExamInDb = context.Exams.FirstOrDefault(e => e.ExamID == id);
            if (ExamInDb != null)
            {
                context.Exams.Remove(ExamInDb);
                context.SaveChanges();
            }
        }

        //**Not used 
        public void DeleteStudentAnswer(int StudentID, int QuestionID, int ExamID)
        {
            throw new NotImplementedException();
        }

        public Exam Find(int id)
        {
            Exam ExamInDb =  context.Exams.FirstOrDefault(e => e.ExamID == id);
            return ExamInDb;
        }

        //**Not used
        public IQueryable<Exam> FindExamsStudentAttended(int StudentID)
        {
            throw new NotImplementedException();
        }

        //**Not used 
        public Exam FindStudentAnswer(int StudentID, int QuestionID, int ExamID)
        {
            throw new NotImplementedException();
        }

        //**Not used 
        public IQueryable<Exam> FindStudentAnswerAccordingToExamID(int StudentID, int ExamID)
        {
            throw new NotImplementedException();
        }

        public IList<Exam> Get()
        {
            //EagerExecution
            IList<Exam> ExamsList = context.Exams.ToList();
            return ExamsList;
        }

        //**Not used 
        public IQueryable<Exam> GetAllQuestionAccordingToExamId(int id)
        {
            throw new NotImplementedException();
        }

        public Exam Login(Exam entity)
        {
            throw new NotImplementedException();
        }

        public void Update(int id, Exam UpdateExam)
        {
            Exam ExamInDb = context.Exams.FirstOrDefault(e => e.ExamID == id);
            if (ExamInDb != null)
            {
                ExamInDb.ExamName = UpdateExam.ExamName;
                ExamInDb.TotalMark = UpdateExam.TotalMark;
                context.SaveChanges();
            }
        }

        //**Not used
        public void UpdateStudentAnswer(Exam entity)
        {
            throw new NotImplementedException();
        }
    }
}
