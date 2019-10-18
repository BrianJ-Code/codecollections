/*
class Person {
    constructor(age,name){
        this.name = name
        this.age = age
    }
    calculateBirthYear(){
        return 2019 - this.age;
    }
}
const steve = new Person(44, 'Steve');
console.log(steve.calculateBirthYear());

one class to create the object person, album, movie model
take arguments

View/Class for the UI which contains methods
Creaes the html for the UI Display

clear fields method

remove something/object

controll combines ui and model
event handler with function
get values


instatiate new class/object album with variable name

instantiate new UI const ui = new UI()

call relevant methods 

seperate event handler for removing/deleting
*/
class physics {
    constructor(distance){ 
        this.distance = distance.value; //see this 'value' here is important to get the value unless you want the actual element which isnt wrong either
    }
}
/*
class UI {
    let html = '<div class="Solver"><div class="Distance">%distance%</div><div class="Time">%time%</div><div class="Velocity0">%v0%</div><div class="VelocityF">%vf%</div><div class="Acceleration">%acceleration%</div> </div>';
    let newHtml = html.replace('%distance%', distance.value + "meters");
    newHtml = newHtml.replace('%time%', time.value + "seconds");
    newHtml = newHtml.replace('%v0%', v0.value + "m/s");
    newHtml = newHtml.replace('%vf%', vf.value + "m/s");
    newHtml = newHtml.replace('%acceleration%', acceleration.value + "m/s^2");
    display.insertAdjacentHTML('beforeend', newHtml);
    e.preventDefault();

}
*/

const form = document.querySelector('#kinematics');
const distance = document.querySelector('#Distance');
const time = document.querySelector('#Time')
const v0 = document.querySelector('#Velocity0');
const vf = document.querySelector('#VelocityF');
const acceleration = document.querySelector('Acceleration');

function eventListeners(){
    form.addEventListener('submit', formvalidation);
}
eventListeners();

function formvalidation(){
    if (distance.value !== "" && v0.value !== "" && vf.value !== ""){
        acceleration = (Math.sqrt(vf.value) - Math.sqrt(v0.value)) / (2 * distance.value)
        time = (vf.value - v0.value) / acceleration
    }else if(distance.value !== "" && v0.value !== "" && acceleration.value !== ""){

    }else if(distance.value !== "" && v0.value !== "" && time.value !== ""){
        
    }else if(distance.value !== "" && vf.value !== "" && acceleration.value !== ""){

    }else if(distance.value !== "" && vf.value !== "" && acceleration.value !== ""){
        
    }else if(distance.value !== "" && acceleration.value !== "" && time.value !== ""){

    }else if(v0.value !== "" && vf.value !== "" && acceleration.value !== ""){
        
    }else if(v0.value !== "" && vf.value !== "" && time.value !== ""){

    }else if(v0.value !== "" && acceleration.value !== "" && time.value !== ""){
        
    }else if(vf.value !== "" && acceleration.value !== "" && time.value !== ""){

    }else{
        alert("The necessary fields are not complete. Please fill in at least 3 fields to calculate.");
        return false;
    }
}


/*
const kinematics = document.querySelector('#kinematics'); 
const distance = document.querySelector('#Distance');
const time = document.querySelector('#Time');
const v0 = document.querySelector('#Velocity0');
const vf = document.querySelector('#VelocityF');
const acceleration = document.querySelector('Acceleration');
const display = document.querySelector('.display');

function eventListeners(){
    form.addEventListener('submit', displayAnswers);
    display.addEventListener('click', removeAnswers);
}


function displayAnswers(e) {
    let html = '<div class="Solver"><div class="Distance">%distance%</div><div class="Time">%time%</div><div class="Velocity0">%v0%</div><div class="VelocityF">%vf%</div><div class="Acceleration">%acceleration%</div> </div>';

    let newHtml = html.replace('%distance%', distance.value + "meters");
    newHtml = newHtml.replace('%time%', time.value + "seconds");
    newHtml = newHtml.replace('%v0%', v0.value + "m/s");
    newHtml = newHtml.replace('%vf%', vf.value + "m/s");
    newHtml = newHtml.replace('%acceleration%', acceleration.value + "m/s^2");
    display.insertAdjacentHTML('beforeend', newHtml);
    e.preventDefault();

}

function removeAnswer(e) {
    if(e.target.parentElement.classList.constains()){
        console.log(target.parentElement);
    }
}

*/