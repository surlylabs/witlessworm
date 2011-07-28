import java.awt.*;
import java.awt.event.*;
import java.awt.image.*;
import java.applet.Applet;
import java.io.*;

//Class jpggif
public class jpggif extends Canvas {

  Image si;
  
  int x;
  int y;

  public jpggif( Image i, int x, int y ) {
    
    si = i;
    this.setSize( x, y );
    this.x = x;
    this.y = y;

  }
      
  //Paint allows the image to be painted on the canvas
  public void paint( Graphics g ) {
    
    //g.drawImage(si,0,0,this); original code
    g.drawImage( si, 0, 0, x, y, this );   

  }
    
  //Update has to do with moving things over the image and having it repaint
  public void update( Graphics g ) {
    paint( g );
  }
  
  //Allows the image to listen for events
  // public void mouseClicked( MouseEvent ae ) {
  //   System.out.println("Button Graphic was clicked");
  // }
  
}
