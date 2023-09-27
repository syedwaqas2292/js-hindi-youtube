// Singleton
// Singleton Literals se declare krnay p ni bnta 
// Singleton Constructors se bnyga to hamesha singleton bnayga
// Object.create singleton constructor 


//object literals

const mySymb = Symbol("Key1")  // using Symbol in object example

const Jsuser = {
    name: "waqas",
    "full name":"syed waqas",
    [mySymb]:"mykey1", // using Symbol in object example symbol ko refrence krna ho to [] brakets use hotay hain
    age: 25,
    location: "Karachi",
    email: "xyz@gamil.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["full name"]);
// console.log(Jsuser[mySymb]); // Call Symbol in object example


// Jsuser.email = "waqas@gmail.com";
// Object.freeze(Jsuser) // Dont Change Freeze Values.
// Jsuser.email = "waqas@chatgpt.com";
// console.log(Jsuser);

Jsuser.greetings = function () {
    console.log("Hellow Js User");
}
Jsuser.greetingstwo = function () {
    console.log(`Hellow Js User, ${this.name}`); //using string interpolation and this using object ki values ko reference krnay kay liye use krtay hain.
}

console.log(Jsuser.greetings()); // Function Anoymous function ka refrence aya hai Execute ni huwa hai 
console.log(Jsuser.greetingstwo());
