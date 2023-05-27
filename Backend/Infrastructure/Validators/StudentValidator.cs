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
                .Length(3, 50)
                .Matches("^[A-Za-z\\s]+$");

            RuleFor(x => x.firstname)
                .NotNull()
                .Length(3, 50)
                .Matches("^[A-Za-z\\s]+$");

            RuleFor(x => x.birthdate)
                .NotNull()
                .Must(BeOlder);

            RuleFor(x => x.email)
                .NotNull()
                .MaximumLength(50)
                .EmailAddress();

            RuleFor(x => x.address)
                .NotNull()
                .SetValidator(new AddressValidator());

            RuleFor(x => x.university)
                .NotNull()
                .SetValidator(new UniversityValidator());
        }

        private bool BeOlder(DateTime birthdate)
        {
            var age = DateTime.Today.Year - birthdate.Year;
            return age >= 18;
        }
    }
}
