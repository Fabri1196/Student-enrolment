export class Student {
	id: number = 0;
	lastname: string = "Last Name";
	firstname: string = "First Name";
	birthdate: Date = new Date();
	email: string = "email";
	address: Address[] = [];
}

export class Address {
	street: string = "Street";
	postalCode: string = "Postal Code";
	city: string = "City";
	country: string = "Country"

}