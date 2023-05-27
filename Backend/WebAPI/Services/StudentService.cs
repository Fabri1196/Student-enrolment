using Domain.Entities;
using Domain.Services;
using FluentValidation;
using Infrastructure.Validators;

namespace API.Services
{
    public class StudentService : IStudentService
    {
        private IRepository<Student> _repository;

        private StudentValidator _validator;

        public StudentService(IRepository<Student> repository)
        {
            _repository = repository;
            _validator = new StudentValidator();
        }
        public void CreateStudent(Student student)
        {
            _validator.ValidateAndThrow(student);
            _repository.Insert(student);
        }

        public bool DeleteStudent(int id) => _repository.Delete(id);

        public IEnumerable<Student> GetAllStudents() => _repository.GetAll();

        public Student GetStudent(int Id) => _repository.GetById(Id);

        public bool UpdateStudent(Student student)
        {
            _validator.ValidateAndThrow(student);
            return _repository.Upsert(student);
        }
    }
}