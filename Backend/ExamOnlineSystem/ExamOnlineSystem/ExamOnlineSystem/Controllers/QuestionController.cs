using ExamOnline.Models;
using ExamOnline.Models.Repositories;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ExamOnline.Controllers
{
    [ApiController]
    [Route("api/[Controller]/[Action]")]
    public class QuestionController : Controller
    {
        private readonly IRepository<Questions> questionRepository;

        public QuestionController(IRepository<Questions> QuestionRepository)
        {
            questionRepository = QuestionRepository;
        }

        [HttpGet]
        //Get /api/Question/GetAllQuestions
        public IActionResult GetAllQuestions()
        {
            IList<Questions> QuestionList = questionRepository.Get();
            return Ok(QuestionList);
        }

        [HttpGet]
        //GetById /api/Question/GetAllQuestionAccordingToExamId/1
        public IActionResult GetAllQuestionAccordingToExamId(int id)
        {

            IQueryable<Questions> QuestionsListInDb = questionRepository.GetAllQuestionAccordingToExamId(id);
            if (QuestionsListInDb == null)
            {
                return NotFound("Exam Not Found");
            }
            return Ok(QuestionsListInDb);
        }

        [HttpGet]
        //GetById /api/Question/GetQuestionById/1
        public IActionResult GetQuestionById(int id)
        {
            Questions QuestionInDb = questionRepository.Find(id);
            if (QuestionInDb == null)
            {
                return NotFound("Exam Not Found");
            }
            return Ok(QuestionInDb);
        }

        [HttpPost]
        //Post /api/Question/CreateQuestion
        public IActionResult CreateQuestion(Questions NewQuestion)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            questionRepository.Add(NewQuestion);
            return Ok(NewQuestion);
        }

        [HttpPut]
        //Put /api/Question/EditQuestion
        public IActionResult EditQuestion(int id, Questions NewQuestion)
        {
            questionRepository.Update(id, NewQuestion);
            return Ok(NewQuestion);
        }

        [HttpDelete]
        //Delete /api/Question/DeleteQuestion
        public IActionResult DeleteQuestion(int id)
        {
            questionRepository.Delete(id);
            return Ok(id);
        }
    }
}
