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
                .NotNull();
            
            RuleFor(x => x.postalCode)
                .NotNull();
            
            RuleFor(x => x.city)
                .NotNull();
            
            RuleFor(x => x.country)
                .NotNull();
        }
    }
}