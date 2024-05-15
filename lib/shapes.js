console.log(`new test`)

const inquirer = require('inquirer');
const colors = require('colors')
const { join } = require('path');
const { writeFile } = require('fs/promises');
const fs = require('fs');
// const Circle = require('./shape_circle')
// const Square = require('./shape_square')
// const Triangle = require('./shape_triangle')
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
const { choices } = require('yargs');
 
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)
let shape;
let tasks = [];
let svgContent ="";

class CLI {

  constructor() {
    // this.title = '';

    // Array of task objects e.g. [{ text: string, priority: bool }, ...]
    // this.tasks = [];
  }

  run() {
    return inquirer
      .prompt([
        {
            type: 'maxlength-input',
            name: 'title',
            message: 'Enter a text upto 3 characters',
            maxLength: 3

        },
      
        {
          type: 'list',
          message: 'What is your preferred text color?',
          name: 'textColor',
          choices: ["White", "Blue", "Yellow"]
        },
        {
          type: 'list',
          message: 'What is your preferred shape?',
          name: 'shape',
          choices: ["circle", "triangle", "square"]

        },
        {
          type: 'list',
          message: 'What is your preferred shape color?',
          name: 'shapeColor',
          choices: ["Red", "Green", "Teal"]

        },
      ])
      .then((response) => {
        console.log(colors.green('Success!'))
        tasks.push(response.title, response.textColor, response.shape, response.shapeColor);
        displayElem(tasks[2]) 
       //DOM Manipulation
   
         })
      .then(() => {
        //Write the file out to the ouput directory
        fs.writeFile('./output/logo.svg',  svgContent, (err) =>
        err ? console.log(err) : console.log('Generated logo.svg')
        );
    })

  }}

class Shape {
constructor() {
    this.color = "";
}
}

class Triangle extends Shape{
  
    // setColor(color) {
    //     this.color = tasks[3];
    //   }
   render() {
    return ( `
    <svg width="1000" height="1000" version="1.1" xmlns="http://www.w3.org/2000/svg">

    <polygon points="300,50 200,400 100,50" style="fill:${this.setColor(this.tasks[3])};stroke:green;stroke-width:3" />

    <text x="200" y="175" class="small" text-anchor="middle" fill="${this.tasks[1]}">${this.tasks[0]}</text>

    </svg>

    `)
    
   }
   setColor(tasks) {
    return this.color = tasks[3]
    }

}
class Circle{
    circle;
    tasks;
    constructor(circle){
        this.circle= circle ;
        // this.tasks = tasks[3];
    }
   

 
    render() {
      return(` 
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

        <circle cx="150" cy="100" r="80" fill="${this.setColor(tasks)}"/>

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${tasks[1]}">${tasks[0]}</text>

        </svg>
            `)
    }

    setColor(tasks) {
       return tasks[3]
     
       
    }
    

}


class Square{
    square;
    constructor(square){
        this.square= square ;
    }
    render() {
       return( 
       `
        <svg width="1000" height="1000" version="1.1" xmlns="http://www.w3.org/2000/svg">
 
        <rect x="150" y="100" width="200" height="200" stroke="black" fill="${this.setColor(tasks)}" stroke-width="5" />

        <text x="250" y="250" font-size="60" text-anchor="middle" fill="${tasks[1]}">${tasks[0]}</text>
      
      </svg>`)
    }
    setColor(tasks) {
        return tasks[3]
      
        
     }
     
}



const displayElem = (shape) =>{
   
    if (shape === 'triangle' ){
        const triangle = new Triangle();
        svgContent = triangle.render()
    
    }else if(shape === 'circle' ){
        const circle = new Circle();
        svgContent =circle.render()

    }else if(shape === 'square'){
        const square = new Square();
        svgContent = square.render()
    }
    return svgContent
}

class Person {
    name;
    constructor(name) {
      this.name = name;
    }
  
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}`);
    }
  }


  glines = new Person("Faisal")
  glines.introduceSelf()


// module.exports = CLI, Triangle, Square, Circle, Shape
module.exports = CLI, Shape

// module.exports = Triangle;
// module.exports = Square;
// module.exports = Circle;

// CLI.run()