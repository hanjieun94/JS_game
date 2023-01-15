export default class Boy{
   
    #speed;
    constructor(x,y){

        this.x = x || 100;
        this.y = y || 100;

        this.iw = 106;
        this.ih = 148.25;
        this.idxX = 1;
        this.idxY = 2;       
        
        this.vx = 0;
        this.vy = 0;

        this.#speed = 3;

        this.walkDelay = 0;

        this.moveLeft = false;
        this.moveRight = false;
        this.moveUp = false;
        this.moveDown = false;        

        this.img = document.querySelector("#boy");
    }

    draw(ctx){

        this.ix = this.iw*this.idxX;
        this.iy = this.ih*this.idxY;
        ctx.drawImage(this.img,
            this.ix,this.iy,this.iw,this.ih,
            this.x,this.y, this.iw, this.ih);           
    } 

    update(){

        if(this.moveUp)            
            this.y -= this.#speed;
        if(this.moveDown)
            this.y += this.#speed;    
        if(this.moveLeft)
            this.x -= this.#speed;
        if(this.moveRight)
            this.x += this.#speed;

   
        if(!(this.moveLeft || this.moveRight || this.moveUp || this.moveDown || false))
            if(this.vx==0 && this.vy==0){
                this.idxX = 1;
                return;                        
            }            
        
        if (this.walkDelay > 10) {

            if (this.idxX === 1) {
                this.idxX = 0;
            }
            else
                this.idxX = this.idxX === 0 ? 2 : 0;
            this.walkDelay = 0;
        }
        this.walkDelay++;
        
        this.x += this.vx;
        this.y += this.vy;
        
    }
    

    move(dir){                  
        switch(dir){
            case "ArrowUp":
                this.moveUp = true;
                this.idxY = 0;            
                break;
            case "ArrowDown":
                this.moveDown = true;
                this.idxY = 2;
                break;
            case "ArrowRight":
                this.moveRight = true;
                this.idxY = 1;
                break;
            case "ArrowLeft":
                this.moveLeft = true;
                this.idxY = 3;
                break;
        }              
    }

    stop(dir){
        switch(dir){
            case "ArrowUp":
                this.moveUp = false;
                this.idxY = 2;          
                break;
            case "ArrowDown":
                this.moveDown = false;
                this.idxY = 2;
                break;
            case "ArrowRight":
                this.moveRight = false;
                this.idxY = 2;
                break;
            case "ArrowLeft":
                this.moveLeft = false;
                this.idxY = 2;
                break;
        }     

    }
    
    
    
}