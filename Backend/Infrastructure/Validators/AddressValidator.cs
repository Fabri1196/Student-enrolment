using Domain.Entities;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Validators
{
    public class AddressValidator : AbstractValidator<Address>
    {
        public AddressValidator()
        {
            RuleFor(x => x.street)
                .NotNull()
                .Length(5, 50);

            RuleFor(x => x.postalCode)
                .NotNull()
                .Length(5, 50);

            RuleFor(x => x.city)
                .NotNull()
                .Length(3, 50)
                .Matches("^[A-Za-z\\s]+$");

            RuleFor(x => x.country)
                .NotNull()
                .Length(3, 50)
                .Matches("^[A-Za-z\\s]+$");
        }
    }
}