import Boy from '../item/boy.js';
import Background from '../item/background.js';

export default class GameCanvas{

    constructor(){
        this.dom = document.querySelector(".game-canvas"); 
        this.dom.focus();
        this.boy = new Boy(100,100);
        this.bg = new Background();

          /** @type {CanvasRenderingContext2D} */
        this.ctx = this.dom.getContext("2d");
        this.boy.speed++;

        this.dom.onkeydown = this.keyDownHandler.bind(this);
        this.dom.onkeyup = this.keyUpHandler.bind(this);

    }

    run(){
        this.update(); 
        this.draw(); 
        
        window.setTimeout(()=>{this.run();},17);
    }

    update(){
        this.boy.update();
    }    

    draw(){
        this.bg.draw(this.ctx);        
        this.boy.draw(this.ctx);
        
    }

    keyDownHandler(e){
        this.boy.move(e.key);        
    }

    keyUpHandler(e){
        this.boy.stop(e.key);            
    }

}