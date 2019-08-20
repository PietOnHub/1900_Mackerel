class Circle extends GameObject
{
    constructor (context, x, y, vx, vy, radius, fraction){
      super(
        context,
        x,                      // x
        y,                      // y
        vx,                     // vx
        vy,                     // vy
        Math.PI*radius*radius*5,  // mass
        fraction                // fraction
      );

      this.radius = radius;
      this.strength = 0.2;
    }

    update(secondsPassed){

      if (this.radius < 0.1){
        this.radius = 0.1;
        if (this.fraction == 0){
          this.fraction == 1;
        }
        else {
          this.fraction == 0
        }
      }

      //Apply acceleration
      //this.vy += 9.81 * secondsPassed;
      //Move with set velocity
      this.x += this.vx * secondsPassed;
      this.y += this.vy * secondsPassed;
    }

    draw(){

      if (this.fraction == 0){
        this.color = 'rgba(100,255,255,'+ this.strength +')';
      }
      else if (this.fraction == 1){
        this.color = 'rgba(255,100,100,'+this.strength + ')';
      }

      var dx = this.x * Game.scale_m + Game.offset_x ;
      var dy = this.y * Game.scale_m + Game.offset_y ;
      var dradius = this.radius * Game.scale_m;

        //Draw a simple square
        this.context.fillStyle = this.color;
        this.context.beginPath();
        this.context.arc(dx, dy, dradius, 0, 2 * Game.pi);
        this.context.fill();
    }

}
