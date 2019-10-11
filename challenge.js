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

/*
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
    constructor(distance, time, v0, vf, acceleration){
        this.distance = distance;
        this.time = time;
        this.v0 = v0;
        this.vf = vf;
        this.acceleration = acceleration
    }
}

class UI {
    constructor(){

    }
}

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

eventListeners();





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

const variables = [distance, time, v0, vf, acceleration];
function tester () {
    if (isNaN())
}
