console.log(`new test`)

const inquirer = require('inquirer');
const colors = require('colors')
const { join } = require('path');
const { writeFile } = require('fs/promises');
const fs = require('fs');


const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
const { choices } = require('yargs');
 
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)

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


class triangle{
    triangle;
    constructor(triangle){
        this.triangle= triangle ;
    }
   render() {
    return ( `
    <svg width="1000" height="1000" version="1.1" xmlns="http://www.w3.org/2000/svg">

    <polygon points="300,50 200,400 100,50" style="fill:${tasks[3]};stroke:green;stroke-width:3" />

    <text x="200" y="175" class="small" text-anchor="middle" fill="${tasks[1]}">${tasks[0]}</text>

    </svg>

    `)
   }
}
class circle{
    circle;
    constructor(circle){
        this.circle= circle ;
    }
    render() {
      return(` 
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

        <circle cx="150" cy="100" r="80" fill="${tasks[3]}"/>

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${tasks[1]}">${tasks[0]}</text>

        </svg>
            `)
    }

}


class square{
    square;
    constructor(square){
        this.square= square ;
    }
    render() {
       return( 
       `
        <svg width="1000" height="1000" version="1.1" xmlns="http://www.w3.org/2000/svg">
 
        <rect x="150" y="100" width="200" height="200" stroke="black" fill="${tasks[3]}" stroke-width="5" />

        <text x="250" y="250" font-size="60" text-anchor="middle" fill="${tasks[1]}">${tasks[0]}</text>
      
      </svg>`)
    }
}



const displayElem = (shape) =>{
   
    
    if (shape === 'triangle' ){
        const Triangle = new triangle();
        svgContent = Triangle.render()
    
    }else if(shape === 'circle' ){
        const Circle = new circle();
        svgContent =Circle.render()

    }else if(shape === 'square'){
        const Square = new square();
        svgContent = Square.render()
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

  
module.exports = CLI;
// module.exports = triangle;
// module.exports = square;
// module.exports = circle;

// CLI.run()