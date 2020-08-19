  class Dustbin{
      constructor(){
          var options={
                isStatic:true,
          }
          this.body1Sprite = createSprite(500,610,20,100);
          this.body2Sprite = createSprite(300,610,20,100);
          this.body3Sprite = createSprite(400,650,200,20);
          this.body1 = Bodies.rectangle(500, 610, 20, 100 , {isStatic:true} );
          this.body2 = Bodies.rectangle(300, 610, 20, 100 , {isStatic:true} );
          this.body3 = Bodies.rectangle(400, 650, 200, 20 , {isStatic:true} );
          World.add(world, this.body1);
          World.add(world, this.body2);
          World.add(world, this.body3);	
      }
  
      



display(){
    this.body1Sprite.x= this.body1.position.x 
    this.body1Sprite.y= this.body1.position.y 
    this.body2Sprite.x= this.body2.position.x 
    this.body2Sprite.y= this.body2.position.y 
    this.body3Sprite.x= this.body3.position.x 
    this.body3Sprite.y= this.body3.position.y 

}
}