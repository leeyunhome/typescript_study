var Student = /** @class */ (function () {
    function Student(firstName, middleIntitial, lastName) {
        this.firstName = firstName;
        this.middleIntitial = middleIntitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleIntitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Jane", "M.", "User");
document.body.textContent = greeter(user);
