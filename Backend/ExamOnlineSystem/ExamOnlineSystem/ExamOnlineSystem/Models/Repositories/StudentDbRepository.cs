using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ExamOnline.Models.Repositories
{
    public class StudentDbRepository : IRepository<Student>
    {
        ExamOnlineContext context;
        public StudentDbRepository(ExamOnlineContext _context)
        {
            context = _context;
        }
        public void Add(Student NewStudent)
        {
            context.Students.Add(NewStudent);
            context.SaveChanges();
        }

        public void Delete(int id)
        {
            Student studentInDb = context.Students.FirstOrDefault(s => s.StudentID == id);
            if (studentInDb != null)
            {
                context.Students.Remove(studentInDb);
                context.SaveChanges();
            }
        }

        public Student Find(int id)
        {
            Student StudentInDb = context.Students.FirstOrDefault(s => s.StudentID == id);
            return StudentInDb;
        }

        public IList<Student> Get()
        {
            IList<Student> StudentList = context.Students.ToList();
            return StudentList;
        }

        public void Update(int id, Student UpdateStudent)
        {
            Student StudentInDb = context.Students.FirstOrDefault(s => s.StudentID == id);
            StudentInDb.FName = UpdateStudent.FName;
            StudentInDb.LName = UpdateStudent.LName;
            context.SaveChanges();
        }

        public Student Login(Student student)
        {
            Student studentInDb = context.Students.FirstOrDefault(s => s.Email == student.Email && s.Password == student.Password);
            return studentInDb;
        }

        //**Not Used
        public void DeleteStudentAnswer(int StudentID, int QuestionID, int ExamID)
        {
            throw new NotImplementedException();
        }

        //**Not used 
        public Student FindStudentAnswer(int StudentID, int QuestionID, int ExamID)
        {
            throw new NotImplementedException();
        }

        //**Not used
        public void UpdateStudentAnswer(Student entity)
        {
            throw new NotImplementedException();
        }

        //**Not used
        public IQueryable<Student> GetAllQuestionAccordingToExamId(int id)
        {
            throw new NotImplementedException();
        }

        //**Not used 
        public void AddList(IList<Student> entity)
        {
            throw new NotImplementedException();
        }

        //**Not Used
        IQueryable<Student> FindStudentAnswerAccordingToExamID(int StudentID, int ExamID)
        {
            throw new NotImplementedException();
        }

        //**Not used
        IQueryable<Student> IRepository<Student>.FindStudentAnswerAccordingToExamID(int StudentID, int ExamID)
        {
            throw new NotImplementedException();
        }

        //**Not used
        public IQueryable<Student> FindExamsStudentAttended(int StudentID)
        {
            throw new NotImplementedException();
        }
    }
}
