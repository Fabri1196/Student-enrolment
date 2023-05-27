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
        public DateTime birthdate { get; set; }
        public string email { get; set; }
        public Address address { get; set; }
        public University university { get; set; }

        public Student(string lastname, string firstname, DateTime birthdate, string email, Address address, University university)
        {
            this.lastname = lastname;
            this.firstname = firstname;
            this.birthdate = birthdate;
            this.email = email;
            this.address = address;
            this.university = university;
        }

        public Student() { }
    }
}
