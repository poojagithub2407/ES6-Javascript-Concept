const User1={
     firstName:"Pooja",
     lastName:"Dayal",
     surName:function(city,state){
          return ` User Full Name is ${this.firstName} ${this.lastName} and live ${city},${state}`;
     }
};

const User2={
     firstName:"Prasad",
     lastName:"Dayal"
}

// call():This method allow an object to use the method of another object and agrument provide individually
//call():Call is a function that helps you change the context of the invoking function.
console.log(User1.surName.call(User2,'Pune','Maharashtra'));


//apply():Apply is very similar to the call function. The only difference is that in apply you can pass an array as an argument list.
console.log(User1.surName.apply(User2, ['Nashik','Maharashtra']));

//bind():Bind is a function that helps you create another function that you can execute later with the new context of this that is provided.
console.log(User1.surName.bind(User2,'Pune','Maharashtra'));
