using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
namespace ExamOnline.Models
{
    public class Exam
    {
        [Key]
        public int ExamID { get; set; }
        public string ExamName { get; set; }
        public string ExamImage { get; set; }
        public decimal TotalMark { get; set; }
        public virtual ICollection<QuestionExam> QuestionExams { get; set; }
        public virtual ICollection<StudentExam> StudentExams { get; set; }
    }
}
