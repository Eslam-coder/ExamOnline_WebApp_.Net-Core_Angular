using ExamOnline.Models;
using ExamOnline.Models.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ExamOnlineSystem.Controllers
{
    [ApiController]
    [Route("api/[Controller]/[Action]")]
    public class StudentAnswersQuestionsController : Controller
    {
        private readonly IRepository<StudentExam> studentExamRepository;
        ExamOnlineContext context;
        public StudentAnswersQuestionsController(IRepository<StudentExam> StudentExamRepository, ExamOnlineContext _context)
        {
            studentExamRepository = StudentExamRepository;
            context = _context;
        }
       
        [HttpPost]
        //Post /api/StudentAnswersQuestions/PostStudentAnswerForQuestion
        public IActionResult PostStudentAnswerForQuestion(StudentExam studentAnswer)
        {
            studentExamRepository.Add(studentAnswer);
            return Ok(studentAnswer);
        }

        [HttpPost]
        //Post /api/StudentAnswersQuestions/PostStudentAnswerListForQuestionList
        public IActionResult PostStudentAnswerListForQuestionList(IList<StudentExam> studentAnswerList)
        {
            for(int i=0;i< studentAnswerList.Count; i++)
            {
                studentExamRepository.Add(studentAnswerList[i]);
            }
            //studentExamRepository.Add((studentAnswerList);
            //return Ok($"StudentID={studentAnswer.StudentID} Answered for QuestionID={studentAnswer.QuestionID} for ExamID={studentAnswer.ExamID} Successfully");
            return Ok($"Student Answered No of Questions = {studentAnswerList.Count} Successfully");
        }

        [HttpPut]
        //Put /api/StudentAnswersQuestions/EditStudentAnswerForQuestion
        public IActionResult EditStudentAnswerForQuestion(StudentExam studentAnswer)
        {
            studentExamRepository.UpdateStudentAnswer(studentAnswer);
            return Ok($"StudentID={studentAnswer.StudentID} updated his Answer for QuestionID={studentAnswer.QuestionID} for ExamID={studentAnswer.ExamID} Successfully");
        }

        [HttpDelete]
        //Delete /api/StudentAnswersQuestions/DeleteStudentAnswerForQuestion
        public IActionResult DeleteStudentAnswerForQuestion(int StudentId, int QuestionId, int ExamId)
        {
            studentExamRepository.DeleteStudentAnswer(StudentId, QuestionId, ExamId);
            return Ok($"StudentID={StudentId} deleted his Answer for QuestionID={QuestionId} for ExamID={ExamId} Successfully");
        }

        [HttpGet]
        //Get /api/StudentAnswersQuestions/GetStudentAnswers
        public IActionResult GetStudentAnswers()
        {
            IList<StudentExam> StudentAnswersList = studentExamRepository.Get();
            return Ok(StudentAnswersList);
        }

        [HttpGet]
        //Get /api/StudentAnswersQuestions/GetStudentAnswersByID
        public IActionResult GetStudentAnswersByID(int StudentId, int QuestionId, int ExamId)
        {
            StudentExam StudentAnswersInDb = studentExamRepository.
                                             FindStudentAnswer(StudentId, QuestionId, ExamId);
            return Ok(StudentAnswersInDb);
        }

        [HttpGet]
        //Get /api/StudentAnswersQuestions/GetStudentAnswersByExamID
        public IActionResult GetStudentAnswersByExamID(int StudentId,int ExamId)
        {
            IQueryable<StudentExam> StudentAnswersInDb = studentExamRepository.FindStudentAnswerAccordingToExamID
                                             (StudentId,ExamId);
            return Ok(StudentAnswersInDb);
        }

        [HttpGet]
        //Get /api/StudentAnswersQuestions/GetExamsStudentAttended
        public IActionResult GetExamsStudentAttended(int StudentId)
        {
            IQueryable<StudentExam> ExamsStudentAttendedInDb = studentExamRepository.FindExamsStudentAttended(StudentId);
                                             
            return Ok(ExamsStudentAttendedInDb);
        }

        [HttpGet]
        //Get /api/StudentAnswersQuestions/GetExamsStudentAttended
        public IActionResult GetExamsStudentAttended2(int StudentID)
        {
            var ExamList = context.StudentExam.Where(s => s.StudentID == StudentID)
                                              .Include(e => e.Exam)
                                              .Select(s =>
                                                         new
                                                         {
                                                             s.ExamID,
                                                             s.StudentTotalGrade,
                                                             s.Exam.ExamName,
                                                             s.QuestionID
                                                         }
                                                      );
            //Query Syntax 
            var ExamsStudentAttendedList = from e in context.StudentExam
                                           .Where(s => s.StudentID == StudentID)
                                           .Include(e => e.Exam)
                                           select e;


            return Ok(ExamList);
        }
    }
}
