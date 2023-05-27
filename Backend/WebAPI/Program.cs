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

            // Add services to the container.
            builder.Services.AddControllers();

            // Swagger disabled
            //builder.Services.AddEndpointsApiExplorer();
            //builder.Services.AddSwaggerGen();

            // Configure CORS to interact with Frontend.
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

            // if (app.Environment.IsDevelopment())
            // {
            //     app.UseSwagger();
            //     app.UseSwaggerUI();
            // }

            app.UseCors("Origins");

            // app.UseHttpsRedirection();

            app.UseAuthorization();

            app.MapControllers();

            app.Run();
        }
        private static void studentDatabase(IRepository<Student> repositoryStudent)
        {
            repositoryStudent.Insert(
                new Student(
                    "Cesar",
                    "Johnson",
                    19,
                    "cesarjohnson@gmail.com",
                    new List<Address>(){new Address("71 MT. Mayon St. Vington","X20450", 
                    "Munich",
                    "Germany")}
                ));
        }
    }
}
