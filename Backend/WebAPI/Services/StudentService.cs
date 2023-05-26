using Domain.Entities;
using Domain.Services;
using FluentValidation;

namespace API.Services
{
    public class StudentService : IStudentService
    {
        private IRepository<Student> _repository;

        public StudentService(IRepository<Student> repository)
        {
            _repository = repository;
        }
        public void CreateStudent(Student student)
        {
            _repository.Insert(student);
        }

        public bool DeleteStudent(int id) => _repository.Delete(id);

        public IEnumerable<Student> GetAllStudents() => _repository.GetAll();

        public Student GetStudent(int Id) => _repository.GetById(Id);

        public bool UpdateStudent(Student student)
        {
           return  _repository.Upsert(student);
        }
    }
}