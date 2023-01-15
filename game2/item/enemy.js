export default class Enemy{
    #centerx;
    #centery;
    constructor(x,y){
        this.img = document.querySelector("#enemy");

        this.x = x || 0;
        this.y = y || 0;        

        this.speed = 5;     
        
        this.onOutOfScreen = null;
        
    }

    get centerx(){
        return this.x + this.img.width/2;
    }

    get centery(){
        return this.y + this.img.height/2;
    }

    get enemyr(){
        return this.img.width/2;
    }


    draw(ctx){

        ctx.drawImage(this.img,this.x,this.y);

        // ctx.drawImage(this.img,this.x - this.img.width/2,this.y - this.img.height*1.2);
        
    }

    update(){
        this.y += this.speed;

        if(this.y>500){
            if(this.onOutofScreen!=null)
                this.onOutofScreen(this);
        }


    }

}