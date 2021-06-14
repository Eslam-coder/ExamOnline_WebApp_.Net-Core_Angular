using Microsoft.EntityFrameworkCore.Migrations;

namespace ExamOnlineSystem.Migrations
{
    public partial class AddQuestionIDasPkToTableStudentExam : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_StudentExam",
                table: "StudentExam");

            migrationBuilder.AddPrimaryKey(
                name: "PK_StudentExam",
                table: "StudentExam",
                columns: new[] { "StudentID", "ExamID", "QuestionID" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_StudentExam",
                table: "StudentExam");

            migrationBuilder.AddPrimaryKey(
                name: "PK_StudentExam",
                table: "StudentExam",
                columns: new[] { "StudentID", "ExamID" });
        }
    }
}
