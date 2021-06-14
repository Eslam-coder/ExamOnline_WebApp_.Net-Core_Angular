using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ExamOnline.Models
{
    public class StudentExam
    {
        public int StudentID { get; set; }
        public int ExamID { get; set; }
        public int QuestionID { get; set; }
        public string StudentQuestionAnswer { get; set; }
        public decimal StudentTotalGrade { get; set; }
        public virtual Exam Exam { get; set; }
        public virtual Student Student { get; set; }
    }
}
