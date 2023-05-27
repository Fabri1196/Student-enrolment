using Domain;
using Domain.Entities;
using Domain.Services;
using LiteDB;

namespace Infrastructure.Database
{
    public class StudentDatabase : IRepository<Student>
    {
        private LiteDatabase _database;
        private ILiteCollection<Student> _collection;

        public StudentDatabase(LiteDatabase database)
        {
            _database = database;
            _collection = _database.GetCollection<Student>("Students");
        }
        public int Insert(Student entity) => _collection.Insert(entity);

        public bool Delete(int id) => _collection.Delete(id);

        public bool DeleteAll() => _collection.DeleteAll() > 0;

        public IEnumerable<Student> GetAll() => _collection.FindAll();

        public Student GetById(int id) => _collection.FindById(id);

        public bool Update(Student entity) => _collection.Update(entity);

        public bool Upsert(Student entity) => _collection.Upsert(entity);

        public void Dispose() { }
    }

}
