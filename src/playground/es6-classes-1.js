class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        // return 'Oh, hi Mark';
        return `Hi, I'm ${this.name}`;
    }

    getDescription() {
        return `${this.name} is ${this.age} years old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() { //override getDescription method of Person
        let description = super.getDescription();

        if (this.hasMajor) {
            description += `Their major is ${this.major}.`;
        }
        return description;
    }

}

class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting(){
        let greeting = super.getGreeting();

        if (this.homeLocation) {
            greeting += ` I'm visiting from ${this.homeLocation}.`;            
        }

        return greeting;

    }
}


const me = new Traveler('Maca Villa', 23, 'Córdoba');
console.log(me.getGreeting());

const other = new Student();
console.log(other.getDescription());