                    // a. Define and Populate the student Object: 
// const student = {
//     name:"Amit Singh",
//     age:22,
//     email:'amit24@gmail.com'
// }
// // console.log(student)
// // console.log(student.name)
// // console.log(student['name'])


//                     // b. Update the student Object:
// // student.age = 10
// // student['age'] = 100
// // console.log(student.age)
// // console.log(student['age'])


//                     // c. Add Method and Nested Object to student:
// student.greet = function(){
//     console.log(`Hello  ${this.name} !`)
// }

// // student.greet()  // calling the method inside an object

// student['address'] = {
//     country : 'INDIA',
//     city : 'Agra',
//     pin_code : 282001
// }

// // console.log(student.address.country)   // accessing the property of nested object

// student.address.pin_code = 18000;       // updating the property value in nested object
// console.log(student.address)        // logging the nested object







                    // d. Create and Populate the friend Object:
const friend = {
    name : "Vishal",
    email : 'vishal@gmail.com',
    age : 23,

    address : {
        country : 'India',
        city : 'Dehli',
        pin_code : 28000
    },

    greet : function(){
        console.log(`Hello ${friend.name}.!`)
    }
}

// friend.greet()
// console.log(friend)





                    // e. Create and Populate the topper Object:
const topper = {
    name : 'Sandeep',
    email : 'sandeep@gmail.com',
    age : 22,

    address : {
        country : 'IN',
        city : 'Delhi',
        pin_code : 110091
    },

    greet : function(){
        return `Hello ${topper.name} !!.`
    }
}

let g = topper.greet()
// console.log(g);

// console.log(topper)





                // f. Define and Use the Student Class:
class student{
    constructor(name, email, age, city, country, pin_code){
        this.name = name;
        this.email = email;
        this.age = age;

        this.address = {
            country : country,
            city : city,
            pin_code : pin_code,
        }

        this.greet = function(){
            console.log(`Hello ${name} !`)
        }

        this.getFullAddress = function(){
            return `${this.address.country}, ${this.address.city} - ${this.address.pin_code}`
        }
    }
}

                // g. Create and Log Student Objects:
const amit = new student('Amit', 'amit@gmail.com', 22, "Agra", 'INDIA', 282002)
console.log(amit)
const sandeep = new student('Sandeep', 'sandy@gmail.com', 22, "Sandiyago", "Chilli", 20000)
console.log(sandeep)
const nikhil = new student("Nikhil", 'nikhil@gmail.com', 20, 'vegas', 'U.S', 300000)
console.log(nikhil)


                // h. Call the greet Method and getFullAddress Method on Student Objects:
amit.greet()
sandeep.greet()
nikhil.greet()

console.log(amit.getFullAddress())
console.log(sandeep.getFullAddress())
console.log(nikhil.getFullAddress())