import Boy from '../item/boy.js';
import Background from '../item/background.js';
import Enemy from '../item/enemy.js';

export default class GameCanvas{

    constructor(){
        this.dom = document.querySelector(".game-canvas"); 
        this.dom.focus();
        this.boy = new Boy(100,100);
        this.bg = new Background();
        this.enemies = [];

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
        this.bg.update();
        this.boy.update();

        for(let enemy of this.enemies)
            enemy.update();
        
        this.enemyAppearDelay--;
        {
            let min = -50;
            let max = Math.floor(this.dom.width+50);
            let x = Math.floor(Math.random()*(max-min)) + min;
            let y = -50;
            let enemy = new Enemy(x,y);
            enemy.onOutOfScreen = this.enemyOutOfScreenHandler.bind(this);
            this.enemies.push(new Enemy(x,y));

            // this.enemies.push(new Enemy(x,y,this.enemyOutOfScreenHandler));
            this.enemyAppearDelay=Math.floor(Math.random()*(60-30)) + 60;

        }
        


        

    }    

    draw(){
        this.bg.draw(this.ctx);        
        this.boy.draw(this.ctx);
        for(let enemy of this.enemies)
            enemy.draw(this.ctx);        
    }
    enemyOutOfScreenHandler(){
        
    }

    keyDownHandler(e){
        this.boy.move(e.key);        
    }

    keyUpHandler(e){
        this.boy.stop(e.key);            
    }

}