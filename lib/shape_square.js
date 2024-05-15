require('./shapes.js')


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



module.exports = Square;
