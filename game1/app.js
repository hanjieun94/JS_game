import GameCanvas from "./panel/game-canvas.js";

window.addEventListener("load", function(){                          
    const gameCanvas = new GameCanvas();
    gameCanvas.run();
});