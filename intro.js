let site_name = "W3Schools";
let site_status = "active";


let hero_text = document.querySelector("#hero");
hero_text.innerHTML = "Welcome to CoHomes!";
hero_text.style.color = "red";
hero_text.style.backgroundColor = "#ffffff";


let hero_image = document.querySelectorAll(".hero_img");
hero_image.src = "./images/Hero_img_2.png";

console.log(hero_image);

if (site_name === "CoHomes" && site_status === "active") {
   window.alert("Welcome to CoHomes!");
}
else if (site_name == "W3Schools" && site_status === "active")
 {
   window.alert("Welcome to W3Schools!");
}
else {
   window.alert("Welcome to our website!");
}

let score = 95;

if (score <= 100 && score >= 90) {
    console.log("Grade: A");
}


// printing numbers from 0 to 10 using loops
 
let number = 11;

// while loop
while (number <= 10) {
    console.log(number);
    number++;
}

// for loop
for (let number = 0; number <= 10; number++) {
    console.log(number);
}

// do while loop
do {
    console.log(number);
    number++;
} while (number <= 10)


image_container = document.querySelector(".img_container");
console.log(image_container);
let num = 0;
while (num < 3){
    image_container.innerHTML += `<img src="./images/Hero_img_${num + 1}.png" alt="">`;
    num++;
}

// ''  single qotiation mark uses + for concatenation
// ""  double qotiation mark uses + for concatenation
// ``  backtick uses template literals for concatenation ${}


// conatenation using backticks and template literals
firstName = "John";
lastName = "Doe";
fullName = `${firstName} Barry ${lastName}`;
// window.alert(fullName);

// conatenation using plus sign and quotation marks
let firstName = "John";
lastName = "Doe";
fullName = firstName + " Barry " + lastName;
// window.alert(fullName);  

function test(a){
    console.log(a);
    
}    

test("Lawrence");
