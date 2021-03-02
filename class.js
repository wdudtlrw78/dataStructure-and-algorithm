'use strict';

// Object-oriendted programming
// class: template
// object: instance of a class
// JavaScript classes
// prototype-based inheritance

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak() {
        console.log(`${this.name}: hello`);
    
    }
}

const momo = new Person('momo', 27);
console.log(momo.name);
console.log(momo.age);
momo.speak();

// 1. Getter and setters
// 방어적인 자세로 만들 수 있도록하는 것이 getter setter
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    
    get age() { // age get을 정의하는 순간 this.age 정의한 것이 메모리에 올라가는 것이 아니라 바로 getter을 호출한다.
        // 그리고 set을 정의하는 순간 = age 값을 할당할 때 바로 메모리 값을 할당하는 것이 아니라 setter을 호출하게 된다.
        // 그 말은 setter 안에서 전달된 value을 this.age을 할당할 때 메모리 값을 업데이트하는 것이 아니라 setter을 호출하게 된다.
        // 그럼 또 value을 호출하고 setter을 호출하고... Maximum call stack이 일어나서 방지하기 위해 변수 앞에 다른 값으로 만들어줘야 한다. this._age
        return this._age;
    }

    set age(value) { // 값을 설정하기 때문에 value 받아오기
        this._age = value < 0 ? 0 : value;
    }
}
const user1 = new User('momo', 'Job', -1);
console.log(user1.age);


// 3. Fields (public, private) ->Babel

class Experiment {
    publicField = 2;
    #privateField = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and  methods
// Object간의 상관없이 값을 쓸 수 있다.
// 만약 Static을 사용하지 않았다면 article1.publisher로 지정했을테고(undifined이 적용된다 (static)), Static은 Object마다 지정되는 것이아니라
// class 자체에 Ariticle에 지정된다. Article.pulisher ( TypeScript에 많이 사용된다.)
// 장점은 오브젝트, 데이터의 상관없이 공통적으로 class에서 쓸 수 있는거라면 Static사용하는 것이 메모리를 줄어줄 수 있다.
class Article {
    static publisher = "momo";
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // X
console.log(Article.publisher);
Article.printPublisher();


// 5 상속과 다향성 Inheritance
// a way for one class to extend another class.

class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}

class Triangle extends Shape { // over riding
    draw() {
            super.draw();
        console.log('🔺');
    }
    getArea() {
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();

console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 2 , 'red');
triangle.draw();
console.log(triangle.getArea());