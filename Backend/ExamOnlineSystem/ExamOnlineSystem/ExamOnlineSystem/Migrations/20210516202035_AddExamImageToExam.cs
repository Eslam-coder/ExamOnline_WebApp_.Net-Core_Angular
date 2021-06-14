using Microsoft.EntityFrameworkCore.Migrations;

namespace ExamOnlineSystem.Migrations
{
    public partial class AddExamImageToExam : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ExamImage",
                table: "Exams",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ExamImage",
                table: "Exams");
        }
    }
}
