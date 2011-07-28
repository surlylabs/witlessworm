import java.applet.*;
import java.awt.*;
import java.awt.event.*;
import java.net.URL;

// Inner Class FastCar extends abstract class Car
class FastCar extends Car {
  
  private final float MAX_V = 20;
  
  public FastCar( Image img, int max_x, int max_y ) {
    
    this.theImage = img;
    theX = (int) ( Math.random() * max_x );
    theY = (int) ( Math.random() * max_y );
    
    theDX = MAX_V - 2.0F * (float) Math.random() * MAX_V;
    theDY = MAX_V - 2.0F * (float) Math.random() * MAX_V;
  }
  
} // End of FastCar


