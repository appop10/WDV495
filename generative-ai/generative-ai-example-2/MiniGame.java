import java.awt.*;
import java.awt.event.*;

import javax.swing.JOptionPane;

public class MiniGame extends Frame implements KeyListener {
    private int trexY;
    private int obstacleX;
    private boolean gameOver;
    
    public MiniGame() {
        setSize(500, 300);
        setTitle("Mini Game");
        setVisible(true);
        addKeyListener(this);
        
        trexY = 200; // initial position of the t-rex
        obstacleX = getWidth(); // initial position of the obstacle
        gameOver = false;
        
        // Start the game loop
        while (!gameOver) {
            moveObstacle();
            repaint();

            try {
                Thread.sleep(10); // adjust the delay as needed
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
    
    public void paint(Graphics g) {
        // Draw the t-rex
        g.setColor(Color.BLUE);
        g.fillRect(100, trexY, 50, 50);
        
        // Draw the obstacle
        g.setColor(Color.BLACK);
        g.fillRect(obstacleX, 200, 30, 50);

        //Draw the ground
        g.setColor(Color.GREEN);
        g.fillRect(0, 250, 500, 50);
    }
    
    public void moveObstacle() {
        obstacleX -= 3; // adjust the speed as needed
        
        // Check for collision
        if (obstacleX <= 100 + 50 && obstacleX + 30 >= 100 && trexY + 50 >= 200) {
            gameOver = true;
            // Display game over message and restart option
            int choice = JOptionPane.showConfirmDialog(this, "Game Over! Do you want to restart?", "Game Over", JOptionPane.YES_NO_OPTION);
            if (choice == JOptionPane.YES_OPTION) {
                restartGame();
            } else {
                System.exit(0);
            }
        } else {
            // win the game
            if (obstacleX <= 100 + 50 && obstacleX + 30 >= 100 && trexY + 50 < 200) {
                gameOver = true;
                JOptionPane.showMessageDialog(this, "You win!");
                System.exit(0);
            }
        }
        
        // Reset obstacle position when it goes off the screen
        if (obstacleX + 30 <= 0) {
            obstacleX = getWidth();
        }
    }
    
    public void restartGame() {
        trexY = 200;
        obstacleX = getWidth();
        gameOver = false;
    }
    
    public void keyPressed(KeyEvent e) {
        if (e.getKeyCode() == KeyEvent.VK_SPACE) {
            jump();
        }
    }
    
    // make a function that simulates the t-rex jumping up
    public void jump() {
        // make the t-rex jump only if it's on the ground
        if (trexY == 200) {
            for (int i = 0; i < 15; i++) {
                trexY -= 5;
            }
        }
    }

    public void keyReleased(KeyEvent e) {}
    
    public void keyTyped(KeyEvent e) {}
    
    public static void main(String[] args) {
        new MiniGame();
    }
}