using Domain.Services;
using LiteDB;
using API.Services;
using Infrastructure.Database;
using Domain.Entities;
using System.Security.Cryptography;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace Application
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            var db = new LiteDatabase(@"TestDatabase2.db");
            IRepository<Student> repositoryStudent = new StudentDatabase(db);

            if (repositoryStudent.GetAll().Any() == false)
            {
                studentDatabase(repositoryStudent);
            }

            builder.Services.AddScoped<IStudentService, StudentService>(f => new StudentService(repositoryStudent));

            builder.Services.AddControllers();

            builder.Services.AddCors(options =>
            {
                options.AddPolicy("Origins", policy =>
                {
                    policy
                    .WithOrigins("http://localhost:4200")
                    .AllowAnyHeader()
                    .AllowAnyMethod();
                });
            });

            var app = builder.Build();

            app.UseCors("Origins");

            app.UseAuthorization();

            app.MapControllers();

            app.Run();
        }
        private static void studentDatabase(IRepository<Student> repositoryStudent)
        {
            repositoryStudent.Insert(
                new Student(
                    "Johnson",
                    "Michael",
                    new DateTime(2000, 04, 08),
                    "cesarjohnson@gmail.com",
                    new Address("71 MT. Mayon St. Vington", "X20450",
                    "Munich",
                    "Germany"),
                    new University("Harvard", "Massachusetts")
                ));
        }
    }
}
