export default class Background{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.img = document.querySelector("#bg");
    }

    scroll(d){
    
    }

    update(){
    
    }

    draw(ctx){
        ctx.drawImage(this.img, this.x, this.y);
    }
}