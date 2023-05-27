using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class Student : Entity
    {
        public string lastname { get; set; }
        public string firstname { get; set; }
        public int age { get; set; }
        public string email { get; set; }
        public List<Address> address { get; set; }

        public Student(string lastname, string firstname, int age, string email, List<Address> address)
        {
            this.lastname = lastname;
            this.firstname = firstname;
            this.age = age;
            this.email = email;
            this.address = address;
        }

        public Student() { }
    }
}
