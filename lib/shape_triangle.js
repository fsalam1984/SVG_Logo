require('./shapes.js')





class Triangle {
  
    // setColor(color) {
    //     this.color = tasks[3];
    //   }
   render() {
    return ( `

    <polygon points="300,50 200,400 100,50" fill=${this.setColor(color)} stroke="green"" />



    `)
    
   }
   setColor() {
    return this.color 
    }

}

module.exports = Triangle;
