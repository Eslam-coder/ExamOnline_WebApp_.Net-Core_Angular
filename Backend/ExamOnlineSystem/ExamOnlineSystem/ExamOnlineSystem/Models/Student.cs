using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ExamOnline.Models
{
    public class Student
    {
        [Key]
        public int StudentID { get; set; }
        [Required]
        [StringLength(10)]
        public string FName { get; set; }
        [Required]
        [StringLength(10)]
        public string LName { get; set; }
        [Required]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }
        [Required ]
        [DataType(DataType.Password)]
        public string Password { get; set; }
        public virtual ICollection<StudentExam> StudentExams { get; set; }
    }
}
