using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ExamOnline.Models
{
    public class ExamOnlineContext:DbContext 
    {
        public ExamOnlineContext(DbContextOptions<ExamOnlineContext> options):base(options)
        {

        }
        public DbSet<Exam> Exams { get; set; }
        public DbSet<Student> Students { get; set; }
        public DbSet<Questions> Questions { get; set; }
        public DbSet<QuestionExam> QuestionExams { get; set; }
        public DbSet<StudentExam> StudentExam { get; set; }
        
        //FluentApi
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
                        
            builder.Entity<QuestionExam>().HasKey(Q => new { Q.ExamID, Q.QuestionID});
            builder.Entity<StudentExam>().HasKey(S => new { S.StudentID, S.ExamID,S.QuestionID });
        }

    }
}
