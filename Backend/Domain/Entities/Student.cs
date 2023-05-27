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
        public List<Address> address { get; set; }

        public Student(string lastname, string firstname, DateTime birthdate, string email, List<Address> address)
        {
            this.lastname = lastname;
            this.firstname = firstname;
            this.birthdate = birthdate;
            this.email = email;
            this.address = address;
        }

        public Student() { }
    }
}
