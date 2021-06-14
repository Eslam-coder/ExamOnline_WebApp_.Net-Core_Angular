using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ExamOnline.Models.Repositories
{
    public interface IRepository<TEntity>
    {
        //Get
        IList<TEntity> Get();

        //Post
        void Add(TEntity entity);

        //Post
        void AddList(IList<TEntity> entity);

        //Put
        void Update(int id,TEntity entity);

        //Put
        void UpdateStudentAnswer(TEntity entity);

        //GetById
        TEntity Find(int id);

        //GetById
        TEntity FindStudentAnswer(int StudentID, int QuestionID, int ExamID);

        //GetById
        IQueryable<TEntity> FindStudentAnswerAccordingToExamID(int StudentID,int ExamID);

        //GetById
        IQueryable<TEntity> FindExamsStudentAttended(int StudentID);

        //Delete
        void Delete(int id);

        //Delete
        void DeleteStudentAnswer(int StudentID,int QuestionID,int ExamID);

        //Post
        TEntity Login(TEntity entity);

        //Get
        public IQueryable<TEntity> GetAllQuestionAccordingToExamId(int id);

    }
}
