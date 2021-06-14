using ExamOnline.Models;
using ExamOnline.Models.Repositories;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ExamOnlineSystem.Models.Repositories
{
    public class StudentExamDbRepository : IRepository<StudentExam>
    {
        ExamOnlineContext context;
        public StudentExamDbRepository(ExamOnlineContext _context)
        {
            context = _context;
        }

        public void Add(StudentExam studentAnswer)
        {
            //Extension Method 
            var QuestionsListAccordingToExamID = context.QuestionExams
                                                        .Where(e => e.ExamID == studentAnswer.ExamID)
                                                        .Include(QuestionExams => QuestionExams.Question)
                                                        .Where(q=>q.Question.QuestionID==studentAnswer.QuestionID)
                                                        .Select(q => q.Question);

            Questions QuestionInDb = QuestionsListAccordingToExamID.FirstOrDefault(q => q.QuestionID == studentAnswer.QuestionID);
            if (QuestionInDb.ModelAnswer == studentAnswer.StudentQuestionAnswer)
            {
                studentAnswer.StudentTotalGrade = QuestionInDb.Mark;
            }
            else
            {
                studentAnswer.StudentTotalGrade = 0;
            }

            context.StudentExam.Add(studentAnswer);
            context.SaveChanges();
        }

        public void DeleteStudentAnswer(int StudentId, int QuestionId, int ExamId)
        {
            StudentExam StudentAnswerInDb =context.StudentExam.FirstOrDefault(
                                                   s => s.StudentID == StudentId &&
                                                   s.QuestionID == QuestionId &&
                                                   s.ExamID == ExamId);
            context.StudentExam.Remove(StudentAnswerInDb);
            context.SaveChanges();
        }

        public StudentExam FindStudentAnswer(int StudentId, int QuestionId, int ExamId)
        {
            StudentExam StudentAnswerInDb = context.StudentExam.FirstOrDefault(
                                                   s => s.StudentID == StudentId &&
                                                   s.QuestionID == QuestionId &&
                                                   s.ExamID == ExamId);
            return StudentAnswerInDb;
        }

        public IQueryable<StudentExam> FindStudentAnswerAccordingToExamID(int StudentID, int ExamID)
        {
            IQueryable<StudentExam> StudentAnswerInDb = context.StudentExam.Where(
                                                   s => s.StudentID == StudentID &&
                                                        s.ExamID == ExamID);
            return StudentAnswerInDb;
        }

        public IList<StudentExam> Get()
        {
            IList<StudentExam> StudentAnwersForQuestionsforExamsInDb = context.StudentExam.ToList();
            return StudentAnwersForQuestionsforExamsInDb;
        }

        public void UpdateStudentAnswer(StudentExam UpdateStudentAnswer)
        {
            StudentExam StudentAnswerInDb = context.StudentExam.FirstOrDefault(
                                                   s => s.StudentID == UpdateStudentAnswer.StudentID &&
                                                   s.QuestionID == UpdateStudentAnswer.QuestionID &&
                                                   s.ExamID == UpdateStudentAnswer.ExamID);
            StudentAnswerInDb.StudentQuestionAnswer = UpdateStudentAnswer.StudentQuestionAnswer;
            StudentAnswerInDb.StudentTotalGrade = UpdateStudentAnswer.StudentTotalGrade;
            context.SaveChanges();
        }

        //**Not Used
        public void Delete(int id)
        {

        }

        //**Not Used
        public StudentExam Login(StudentExam entity)
        {
            throw new NotImplementedException();
        }

        //**Not used
        public void Update(int id, StudentExam entity)
        {

        }

        //**Not Used
        public StudentExam Find(int id)
        {
            throw new NotImplementedException();
        }

        //**Not Used
        public IQueryable<StudentExam> GetAllQuestionAccordingToExamId(int id)
        {
            throw new NotImplementedException();
        }

        public void AddList(IList<StudentExam> studentAnswerList)
        {
            context.StudentExam.Add((StudentExam)studentAnswerList);
            context.SaveChanges();
        }

        //Revision IT
        public IQueryable<StudentExam> FindExamsStudentAttended(int StudentID)
        {
            var ExamList = context.StudentExam.Where(s => s.StudentID == StudentID)
                                              .Include(e => e.Exam)
                                              .Select(s =>
                                                         new
                                                         {
                                                             s.ExamID,
                                                             s.StudentTotalGrade,
                                                             s.Exam.ExamName
                                                         }
                                                      );
            //Query Syntax 
            var ExamsStudentAttendedList = from e in context.StudentExam
                                           .Where(s => s.StudentID == StudentID)
                                           .Include(e => e.Exam)
                                           select e;
                                           

            return (IQueryable<StudentExam>)ExamList;
        }
    }
}
