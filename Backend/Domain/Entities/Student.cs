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

    }
}