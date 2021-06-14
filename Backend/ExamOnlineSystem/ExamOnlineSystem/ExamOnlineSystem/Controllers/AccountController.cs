using ExamOnline.Models;
using ExamOnline.Models.Repositories;
using ExamOnlineSystem.ViewModels;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Task.Models;

namespace ExamOnline.Controllers
{
    [ApiController]
    [Route("[Controller]/[Action]")]
    public class AccountController : Controller
    {
        private readonly IRepository<Student> studentRepository;
        public AccountController(IRepository<Student> StudentRepository)
        {
            studentRepository = StudentRepository;
        }

        [HttpPost]
        [AllowAnonymous]
        //Post //Account/Register
        public async System.Threading.Tasks.Task<IActionResult> RegisterAsync(Student NewStudent)
        {
            if (ModelState.IsValid)
            {
                //Hashing password
                var HashedPassword = HashPassword.HashhPassword(NewStudent.Password);
                var StudentNew = new Student
                {
                    FName = NewStudent.FName,
                    LName = NewStudent.LName,
                    Email = NewStudent.Email,
                    Password = HashedPassword
                };
                studentRepository.Add(StudentNew);
                var claims = new List<Claim>
                {
                  new Claim(ClaimTypes.Email, StudentNew.Email)
                };

                var claimsIdentity = new ClaimsIdentity(
                claims, CookieAuthenticationDefaults.AuthenticationScheme);

                var authProperties = new AuthenticationProperties
                {
                    //RedirectUri = "/Home/Index",
                };

                await HttpContext.SignInAsync(
                    CookieAuthenticationDefaults.AuthenticationScheme,
                    new ClaimsPrincipal(claimsIdentity),
                    authProperties);
                return Ok(new { StudentEmail = StudentNew.Email, StudentID = StudentNew.StudentID});
            }
            return BadRequest("Fill All Required Data");
        }

        [HttpPost]
        [AllowAnonymous]
        //Post //Account/Login
        public async System.Threading.Tasks.Task<IActionResult> LoginAsync(LoginViewModel model)
        {
            //Hashing password
            var HashedPassword = HashPassword.HashhPassword(model.Password);
            var userToLogin = new Student
            {
                Email = model.Email,
                Password = HashedPassword
            };
            Student studentInDb = studentRepository.Login(userToLogin);
            if (studentInDb != null)
            {
                var claims = new List<Claim>
                {
                  new Claim(ClaimTypes.Email, model.Email),
                  new Claim("Password", model.Password)
                };

                var claimsIdentity = new ClaimsIdentity(
                claims, CookieAuthenticationDefaults.AuthenticationScheme);

                var authProperties = new AuthenticationProperties
                {
                    //RedirectUri = "/Home/Index",
                };

                await HttpContext.SignInAsync(
                    CookieAuthenticationDefaults.AuthenticationScheme,
                    new ClaimsPrincipal(claimsIdentity),
                    authProperties);
                return Ok(new { StudentEamil = studentInDb.Email, StudentId = studentInDb.StudentID });
            }
            return BadRequest("Email or Password Incorrect");
        }


        [HttpPost]
        //Post //Account/Logout
        public async System.Threading.Tasks.Task<IActionResult> LogoutAsync()
        {
            await HttpContext.SignOutAsync();
            return Ok("Logout Successfully");
        }

    }
}
