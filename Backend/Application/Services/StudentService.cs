using Domain.Entities;
using Domain.Services;
using FluentValidation;

namespace Application.Services
{
    public class StudentService : IStudentService
    {
        private IRepository<Student> _repository;

        public StudentService(IRepository<Student> repository)
        {
            _repository = repository;
        }
        public void CreateReport(Student student)
        {
            _repository.Insert(student);
        }

        public bool DeleteReport(int id) => _repository.Delete(id);

        public IEnumerable<Student> GetAllStudents() => _repository.GetAll();

        public Student GetReport(int Id) => _repository.GetById(Id);

        public bool UpdateReport(Student student)
        {
           return  _repository.Upsert(student);
        }
    }
}