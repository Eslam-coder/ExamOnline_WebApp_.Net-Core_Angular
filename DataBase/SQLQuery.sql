select * 
from [dbo].[Questions]

select * 
from [dbo].[QuestionExams]

insert into [dbo].[QuestionExams]
values (1,1),(2,1),(3,1),(4,1)

insert into [dbo].[QuestionExams]
values (5,2),(6,2),(7,2),(8,2)

delete 
from [dbo].[Questions]
where [QuestionID]=35

select *
from [dbo].[Students] 

delete [dbo].[Students]

delete from [dbo].[Students]
where [StudentID]=29 

select * 
from [dbo].[StudentExam]

delete 
from [dbo].[StudentExam]
where StudentID=33 

insert into [dbo].[StudentExam]
values(12,1,1,19,0),
      (12,1,2,19,0),
	  (12,1,3,19,0),
	  (12,1,4,19,0)

select * 
from [dbo].[Exams]

delete
from [dbo].[Exams]
where ExamID=12

