using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class University
    {
        public string name { get; set; }
        public string city { get; set; }

        public University(string name, string city)
        {
            this.name = name;
            this.city = city;
        }
    }
}