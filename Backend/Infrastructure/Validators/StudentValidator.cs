using Domain.Entities;
using FluentValidation;

namespace Infrastructure.Validators
{
    public class StudentValidator : AbstractValidator<Student>
    {
        public StudentValidator()
        {
            RuleFor(x => x.Id)
                .NotNull();

            RuleFor(x => x.lastname)
                .NotNull()
                .Length(3, 30);

            RuleFor(x => x.firstname)
                .NotNull()
                .Length(3, 30);

            RuleFor(x => x.age)
                .NotNull()
                .InclusiveBetween(17, 150);

            RuleFor(x => x.email)
                .NotNull()
                .Length(3, 30)
                .EmailAddress();

            RuleForEach(x => x.address)
                .NotNull()
                .SetValidator(new AddressValidator());
        }
    }
}
