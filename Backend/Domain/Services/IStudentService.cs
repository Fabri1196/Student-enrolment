using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Services
{
    public interface IStudentService
    {
        public void CreateReport(Student student);
        public bool UpdateReport(Student student);
        public bool DeleteReport(int id);
        public Student GetReport(int id);
        public IEnumerable<Student> GetAllStudents();
    }
}