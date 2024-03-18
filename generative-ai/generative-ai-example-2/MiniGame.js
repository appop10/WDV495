class MiniGame {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.canvas.width = 500;
        this.canvas.height = 300;
        document.querySelector('section#game-panel').appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');
        this.trexY = 200;
        this.obstacleX = this.canvas.width;
        this.gameOver = false;
        this.createTitleScreen();
    }

    createTitleScreen() {
        let titleScreen = document.createElement('div');
        titleScreen.classList.add('title-screen');
        titleScreen.innerHTML = `
            <h2>Welcome to the Mini Game</h2>
            <button class="start-button">Start</button>
        `;
        titleScreen.querySelector('.start-button').addEventListener('click', () => {
            this.playerStartsGame();
         }
        );
        document.querySelector('#game-panel').appendChild(titleScreen);
    }

    start() {
        document.addEventListener('keydown', this.keyPressed.bind(this));
        this.gameLoop();
    }

    gameLoop() {
        if (!this.gameOver) {
            this.moveObstacle();
            this.draw();
            setTimeout(() => {
                this.gameLoop();
            }, 10); 
        }
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        // Draw the t-rex
        this.ctx.fillStyle = 'blue';
        this.ctx.fillRect(100, this.trexY, 50, 50);

        // Draw the obstacle
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(this.obstacleX, 200, 30, 50);

        // Draw the ground
        this.ctx.fillStyle = 'green';
        this.ctx.fillRect(0, 250, 500, 50);
    }

    playerStartsGame() {
        this.start();
    }
        
    createEndScreen() {
        let endScreen = document.createElement('div');
        endScreen.classList.add('end-screen');
        endScreen.innerHTML = `
            <h2>Game Over</h2>
            <button class="restart-button">Restart</button>
        `;
        endScreen.querySelector('.restart-button').addEventListener('click', () => {
            this.restartGame();
        });
        document.querySelector('#game-panel').appendChild(endScreen);
    }
    
    createWinScreen() {
        let winScreen = document.createElement('div');
        winScreen.classList.add('win-screen');
        winScreen.innerHTML = `
            <h2>You Win!</h2>
            <button class="restart-button">Restart</button>
        `;
        winScreen.querySelector('.restart-button').addEventListener('click', () => {
            this.restartGame();
        });
        document.querySelector('#game-panel').appendChild(winScreen);
    }

    deleteEndScreen() {
        let endScreen = document.querySelector('.end-screen');
        if (endScreen) {
            endScreen.remove();
        }
    }

    deleteWinScreen() {
        let winScreen = document.querySelector('.win-screen');
        if (winScreen) {
            winScreen.remove();
        }
    }

    moveObstacle() {
        this.obstacleX -= 3; 

        if (
            this.obstacleX <= 100 + 50 &&
            this.obstacleX + 30 >= 100 &&
            this.trexY + 50 >= 200
        ) {
            this.gameOver = true;
            this.createEndScreen();
        } else {
            if (
                this.obstacleX <= 100 + 50 &&
                this.obstacleX + 30 >= 100 &&
                this.trexY + 50 < 200
            ) {
                this.gameOver = true;
                this.createWinScreen();
            }
        }

        if (this.obstacleX + 30 <= 0) {
            this.obstacleX = this.canvas.width;
        }
    }

    restartGame() {
        this.trexY = 200;
        this.obstacleX = this.canvas.width;
        this.gameOver = false;
        this.deleteEndScreen();
        this.deleteWinScreen();
    }

    keyPressed(event) {
        if (event.code === 'Space') {
            this.jump();
        }
    }

    jump() {
        if (this.trexY === 200) {
            for (let i = 0; i < 15; i++) {
                this.trexY -= 5;
            }
        }
    }
}

new MiniGame();
