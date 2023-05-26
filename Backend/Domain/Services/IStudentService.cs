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
        public void CreateStudent(Student student);
        public bool UpdateStudent(Student student);
        public bool DeleteStudent(int id);
        public Student GetStudent(int id);
        public IEnumerable<Student> GetAllStudents();
    }
}
