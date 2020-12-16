var shape=function(width,length){
    this.length=length
    this.width=width
    this.area=function(){
        console.log("Length is",this.length,"& Width is",this.width)
    }

}
var Rectangle=function(width,length)
{
    shape.call(this,width,length)
    this.area_Rect=function(){
        console.log("So area of rectangle: is ",length*width)
    }
    this.perimeter=function()
    {
        console.log("And primeter of triangle is: ",2*(length*width))

   }   
}

var Triangle=function(width,length)
{
  shape.call(this,width,length)
  this.area_tri=function()
    {
    console.log("So Area of triangle is: ",(length*width)/2)
    }

    this.peri_tri=function(side)
    {this.side
        console.log("And perimeter of triangle is: ",side*width*side)

   }   
}

    



var rect=new Rectangle(30,40)
rect.area()
rect.area_Rect()
rect.perimeter()

var tri=new Triangle(20,10)
tri.area()
tri.area_tri()
tri.peri_tri(10)