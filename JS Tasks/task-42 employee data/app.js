                // a. Define the Employee Class:
class Employee{
    constructor(name, email, age, department, position, salary){
        this.name = name;
        this.email = email;
        this.age = age;
        this.department = department;
        this.position = position;
        this.salary = salary;
    }
                
                // b. Add Methods to the Employee Class:

    introduce(){
        console.log(`Hello, I am ${this.name}, "${this.position}"`)
    }

    displaySalary(){
        console.log(`Salary : ${this.salary}`)
    }
}


                // c. Create and Log employee Objects:
const newEmployee = new Employee('Sam', 'sam@gmail.com', 26, 'IT', 'Softeware Engineear', '$5000')
console.log(newEmployee)

const manager = new Employee('Sandy', 'sandy@gmail.com', 35, 'IT', 'Project Manager', '$20000')
console.log(manager)



                // d. Call Methods on employee Objects:
newEmployee.introduce()
newEmployee.displaySalary()

manager.introduce()
manager.displaySalary()