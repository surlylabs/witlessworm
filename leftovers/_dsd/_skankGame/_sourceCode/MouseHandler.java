import java.applet.*;
import java.awt.*;
import java.awt.event.*;
import java.net.URL;

class MouseHandler extends MouseAdapter {
    
  DrivenCar theDrivenCar;
  
  public MouseHandler( DrivenCar dc ) {
    
    theDrivenCar = dc;

  }

  public void mousePressed( MouseEvent e ) {
    theDrivenCar.mouseClicked( e.getX(), e.getY() );
  }
  
} // End of MouseHandler
