using ExamOnline.Models;
using ExamOnline.Models.Repositories;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;

namespace ExamOnline.Controllers
{
    [ApiController]
    [Route("api/[Controller]/[Action]")]
    public class ExamController : Controller
    {
        private readonly IRepository<Exam> examRepository;

        public ExamController(IRepository<Exam> ExamRepository)
        {
            examRepository = ExamRepository;
        }

        [HttpGet]
        //Get /api/Exam/GetAllExams
        public IActionResult GetAllExams()
        {
            IList<Exam> ExamList = examRepository.Get();
            return Ok(ExamList);
        }

        [HttpGet]
        //GetById /api/Exam/GetExamById/1
        public IActionResult GetExamById(int id)
        {
            Exam ExamInDb = examRepository.Find(id);
            if (ExamInDb == null)
            {
                return NotFound("Exam Not Found");
            }
            return Ok(ExamInDb);
        }

        [HttpPost]
        //Post /api/Exam/CreateExam
        public IActionResult CreateExam(Exam NewExam)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            examRepository.Add(NewExam);
            return Ok(NewExam);
        }

        [HttpPut]
        //Put /api/Exam/EditExam
        public IActionResult EditExam(int id,Exam NewExam)
        {
            examRepository.Update(id, NewExam);
            return Ok(NewExam);
        }

        [HttpDelete]
        //Delete /api/Exam/DeleteExam
        public IActionResult DeleteExam(int id)
        {
            examRepository.Delete(id);
            return Ok(id);
        }

    }
}
