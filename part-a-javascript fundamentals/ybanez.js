document.addEventListener("DOMContentLoaded", () => {
  // Variables
  let userName = "John";
  let userAge = 25;
  let userCity = "New York";

  const userInfoEl = document.getElementById("userInfo");
  userInfoEl.textContent = `Name: ${userName}, Age: ${userAge}, City: ${userCity}`;

  // Functions
  const greet = (name) => `Hello, ${name}!`;
  const greetingEl = document.getElementById("greeting");
  greetingEl.textContent = greet(userName);

  // Arrays
  let fruits = ["apple", "banana", "orange"];
  const fruitsListEl = document.getElementById("fruitsList");

  const updateFruitsList = () => {
    fruitsListEl.innerHTML = ""; 
    fruits.forEach((fruit) => {
      const li = document.createElement("li");
      li.textContent = fruit;
      fruitsListEl.appendChild(li);
    });
  };

  const addFruit = (fruit) => {
    fruits.push(fruit);
    updateFruitsList();
  };

  const removeLastFruit = () => {
    fruits.pop();
    updateFruitsList();
  };

  addFruit("grape"); 
  removeLastFruit(); 

  // Objects
  let person = {
    name: "Bob",
    age: 30,
    city: "Paris",
  };

  const personInfoEl = document.getElementById("personInfo");
  const updatePersonInfo = () => {
    personInfoEl.textContent = `Name: ${person.name}, Age: ${person.age}, City: ${person.city}`;
  };

  updatePersonInfo();
  person.age = 31; 
  updatePersonInfo();

  // Event Handling & DOM Manipulation
  const button = document.getElementById("myButton");
  const output = document.getElementById("output");

  const handleClick = () => {
    output.textContent = "Button was clicked!";
  };

  button.addEventListener("click", handleClick);
});
