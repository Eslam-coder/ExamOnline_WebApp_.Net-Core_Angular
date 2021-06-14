using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ExamOnline.Models
{
    public class QuestionExam
    {
        public int QuestionID { get; set; }
        public int ExamID { get; set; }
        public virtual Exam Exam { get; set; }
        public virtual Questions Question { get; set; }

    }
}
