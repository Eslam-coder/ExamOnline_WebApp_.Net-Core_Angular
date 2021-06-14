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
    public class StudentController : Controller
    {
        public readonly IRepository<Student> studentRepository;
        public StudentController(IRepository<Student> StudentRepository)
        {
            studentRepository = StudentRepository;
        }

        [HttpGet]
        //Get /api/Student/GetAllStudents
        public IActionResult GetAllStudents()
        {
            IList<Student> StudentsList = studentRepository.Get();
            return Ok(StudentsList);
        }

        [HttpGet]
        //GetById /api/Student/GetStudentById/1
        public IActionResult GetStudentById(int id)
        {
            Student StudentInDb = studentRepository.Find(id);
            return Ok(StudentInDb);
        }

        [HttpPost]
        //Post /api/Student/CreateStudent/1
        public IActionResult CreateStudent(Student NewStudent)
        {
            studentRepository.Add(NewStudent);
            return Ok(NewStudent);
        }

        [HttpPut]
        //Put /api/Student/EditStudent
        public IActionResult EditStudent(int id,Student UpdateStudent)
        {
            studentRepository.Update(id,UpdateStudent);
            return Ok(UpdateStudent);
        }

        [HttpDelete]
        //Delete /api/Student/DeleteStudent
        public IActionResult DeleteStudent(int id)
        {
            studentRepository.Delete(id);
            return Ok(id);
        }
    }
}
