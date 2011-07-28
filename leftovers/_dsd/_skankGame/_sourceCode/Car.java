import java.applet.*;
import java.awt.*;
import java.awt.event.*;
import java.net.URL;

// Inner Abstract Class
abstract class Car {

  Image theImage; 
  int   theWidth  = 50;
  int   theHeight = 50;
  int   theX      = 5;
  int   theY      = 5;
  float theDX     = 0.0F;
  float theDY     = 0.0F;

  boolean isCrunched = false;
  
  public final synchronized Dimension getSize() {
    return new Dimension( theWidth, theHeight );
  }
  
  public final synchronized Point getPosition() {
    return new Point( theX, theY );
  }
  
  public synchronized void update( int max_x, int max_y ) {
    
    if ( isCrunched ) {
      return;
    }

    theX += theDX;
    theY += theDY;
    
    if ( theX < 0 ) {
      theX = 0;
      theDX = Math.abs( theDX );
    }
    
    if ( theX + theWidth > max_x ) {
      theX = max_x - theWidth;
      theDX = -1.0F * Math.abs( theDX );
    }
    
    if ( theY < 0 ) {
      theY = 0;
      theDY = Math.abs( theDY );
    }
    
    if ( theY + theHeight > max_y ) {
      theY = max_y - theHeight;
      theDY = -1.0F * Math.abs( theDY );
    }
    
  }
  
  public final void setCrunched() {
    isCrunched = true;
  }
  
  public final boolean isCrunched() {
    return isCrunched;
  }

  public void paint( Graphics g ) {
    g.drawImage( theImage, theX, theY, theWidth, theHeight, null );
  }
  
  
} // End of Car 


