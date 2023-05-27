using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class Address
    {
        public string street { get; set; }
        public string postalCode { get; set; }
        public string city { get; set; }
        public string country { get; set; }

        public Address(string street, string postalCode, string city, string country)
        {
            this.street = street;
            this.postalCode = postalCode;
            this.city = city;
            this.country = country;
        }
    }
}