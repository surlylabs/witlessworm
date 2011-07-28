import java.applet.*;
import java.awt.*;
import java.awt.event.*;
import java.net.URL;

// Inner Class SlowCar extends the Abstact class Car
class SlowCar extends Car {

  private final float MAX_V = 2;
  private final float JUMP = 4.0F;
  
  public SlowCar( Image img, int max_x, int max_y ) {
    
    this.theImage = img;
    theX = (int) ( Math.random() * max_x );
    theY = (int) ( Math.random() * max_y );
    theDX = MAX_V - 2.0F * (float) Math.random() * MAX_V;
    theDY = MAX_V - 2.0F * (float) Math.random() * MAX_V;
    
  }


  public synchronized void update( int max_x, int max_y ) {
    
      if ( Math.random() < 0.05F ) {
	theDX = MAX_V - 2.0F * (float) Math.random() * MAX_V;
	theDY = MAX_V - 2.0F * (float) Math.random() * MAX_V;
      }
      
      super.update( max_x, max_y );

  }


} // End of SlowCar
