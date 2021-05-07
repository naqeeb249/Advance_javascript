
var person1 = {
    fName : 'Mike',
    lName : 'Wood',
    printName : function (address,city){
        console.log(this.fName + " " + this.lName + " " + city + " " + address);
        } 
    
}


person1.printName('Bangalore');

var  person2 = {
    fName : 'Akshay',
    lName : 'Kumar'
}

//Call
person1.printName.call(person2,'MG Road','chennai');

//Apply
person1.printName.apply(person2,['Jaynagar','Hyderabad']);

//Bind

let bound = person1.printName.bind(person2);

bound('Mumbai','3rd street');


//Function currying

//using bind

let multiply = function(x,y) {
    console.log(x * y);
}

let multiplyBy2 = multiply.bind(this,2);

multiplyBy2(5);

// using closures

let multiply1 = function(x){
    return function(y){
        console.log(x * y);
    }
}

let multiplyBy3 = multiply1(3);
multiplyBy3(5);