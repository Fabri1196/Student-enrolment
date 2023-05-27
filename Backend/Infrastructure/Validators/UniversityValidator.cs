using Domain.Entities;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Validators
{
    public class UniversityValidator : AbstractValidator<University>
    {
        public UniversityValidator()
        {
            RuleFor(x => x.name)
                .NotNull()
                .Length(2, 50);

            RuleFor(x => x.city)
                .NotNull()
                .Length(3, 50)
                .Matches("^[A-Za-z\\s]+$");
        }
    }
}