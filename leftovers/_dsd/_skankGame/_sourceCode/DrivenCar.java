import java.applet.*;
import java.awt.*;
import java.awt.event.*;
import java.net.URL;

class DrivenCar extends Car {
  
  private final float V = 8.0F;
  
  public DrivenCar( Image img ) {
    
    this.theImage = img;
    theX = 5;
    theY = 5;
    theDX = 0.0F;
    theDY = 0.0F;
    
  }
  
  public synchronized void mouseClicked( int x, int y ) {
    
    int a = x - theX;
    int b = y - theY;
    double theta = Math.atan2( a, b );
    theDX = V * (float) Math.sin(theta);
    theDY = V * (float) Math.cos(theta);
    
  }
  
  public void paint( Graphics g ) {
    
    if ( !isCrunched() ) {
      super.paint(g);
    }

  }

} // End of DrivenCar
