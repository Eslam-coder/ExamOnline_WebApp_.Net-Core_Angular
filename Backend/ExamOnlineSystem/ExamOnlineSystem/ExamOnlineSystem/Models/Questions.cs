using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
namespace ExamOnline.Models
{
    public class Questions
    {
        [Key]
        public int QuestionID { get; set; }
        public string Text { get; set; }
        public string ModelAnswer { get; set; }
        public decimal Mark { get; set; }
        public virtual ICollection<QuestionExam> QuestionExams { get; set; }

    }
}
