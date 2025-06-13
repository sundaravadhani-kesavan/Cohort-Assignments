let shoppingList = [
    "Milk",
    "Eggs",
    "Bread",
    ["Apples", "Bananas", "Oranges"],
    ["Potatoes", "Tomatoes", "Onions"]
];
console.log(shoppingList[0]);
shoppingList.push("carrot")
console.log(shoppingList);
shoppingList.pop()
console.log(shoppingList);
let vegList=shoppingList[4]
vegList.splice(1,2,"Cucumbers","Bell peppers")
console.log(shoppingList);

let student = {
    name: "Amit",
    age: 20,
    grade: "A",
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "India"
    }
};
console.log(student.name);
student.phone="123-456-7890";
console.log(student);
delete student.grade
console.log(student);
student.age=21
console.log(student);

//conditional assignment
let number=-2
if(number>0){
     console.log("The number is positive");    
}
else if(number=0){
     console.log("The number is zero");
}
else{
     console.log("The number is negative");
}

//Grade
let score =73
if(score>=90&&score<=100){
     console.log("Grade A");
}
else if(score>=80&&score<=89){
     console.log("Grade B");
}
else if(score>=70&&score<=79){
     console.log("Grade C");
}
else if(score>=60&&score<=69){
     console.log("Grade D");
}
else{
     console.log("Grade F");
}

let myname="s"
if(myname){
     console.log("Truthy");
}
else{
     console.log("Falsy");
     
}