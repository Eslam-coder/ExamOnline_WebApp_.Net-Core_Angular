using ExamOnline.Models;
using ExamOnline.Models.Repositories;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ExamOnlineSystem.Controllers
{
    [ApiController]
    [Route("api/[Controller]/[Action]")]
    public class QuestionExamController : Controller
    {
        private readonly IRepository<QuestionExam> questionExamRepository;

        public QuestionExamController(IRepository<QuestionExam> QuestionExamRepository)
        {
            questionExamRepository = QuestionExamRepository;
        }

        [HttpPost]
        //Post /api/QuestionExam/CreateQuestion
        public IActionResult CreateQuestion(QuestionExam NewQuestionExam)
        {
            questionExamRepository.Add(NewQuestionExam);
            return Ok(NewQuestionExam);
        }
    }
}
