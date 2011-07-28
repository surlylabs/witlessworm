import java.applet.*;
import java.awt.*;
import java.awt.event.*;
import java.net.URL;

public class Bumpers04 extends Applet implements Runnable {

  public static final int SLEEP_TIME = 33;
  public int CARS = 8;
  
  Graphics  theGraphics;
  Dimension theSize;
  Image     theImage;
  Thread    theThread;
  boolean   isRunning;
  Car [] theCar;

  //MediaTracker to make sure the images are completely loaded before displaying them
  MediaTracker tracker;
  
  Image theFastImage;
  Image theFastImage2;
  Image theSlowImage;
  Image theDrivenImage;
  AudioClip theMusic;
  AudioClip theBang;
  
  String fastImageName;
  String fastImage2Name;
  String slowImageName;
  String drivenImageName;
  String theMusicName;
  String theBangName;

  Color bgColor = Color.lightGray;
  
  boolean gameOver = false;
  boolean youWon   = false;

  public void start() {

    processHTMLParameters();

    //Create a MediaTracker
    tracker = new MediaTracker( this );

    try {

      setFont( new Font( "Serif", Font.BOLD+Font.ITALIC, 30 ) );

      gameOver = false;
      youWon   = false;

      theFastImage   = getImage( new URL( getDocumentBase(),  fastImageName  ) );
      //Add Image to be tracked
      tracker.addImage( theFastImage, 0 );

      theFastImage2  = getImage( new URL( getDocumentBase(),  fastImage2Name ) );
      tracker.addImage( theFastImage2, 0 );

      theSlowImage   = getImage( new URL( getDocumentBase(),  slowImageName  ) );
      tracker.addImage( theSlowImage, 0 );
      
      theDrivenImage = getImage( new URL( getDocumentBase(),  drivenImageName ) );
      tracker.addImage( theDrivenImage, 0 );
      
      if ( theMusicName != null ) {
	theMusic = getAudioClip( new URL( getDocumentBase(), theMusicName ) );
	theMusic.loop();
      }

      if ( theBangName != null ) {
	theBang  = getAudioClip( new URL( getDocumentBase(), theBangName ) );
      }
      
 
    } catch ( Exception e ) {
      
      System.out.println( e );

    }

    setBackground( bgColor );

    try {
      System.out.println( "Wait for all images to load.\n" );
      //Wait for all the images to load before we go any further
      tracker.waitForAll();
      System.out.println( "All images have loaded.\n" );
    } catch ( InterruptedException e ) {
      System.out.println( "Blew up in waitForAll()"   );
      e.printStackTrace();
    }

    theCar = new Car[CARS+1];
    
    DrivenCar dc = new DrivenCar( theDrivenImage );
    addMouseListener( new MouseHandler( dc ) );
    theCar[0] = dc;

    for (int i = 1; i <= CARS; i++ ) {

      switch ( i % 3 ) {

      case 0 : 
	theCar[i] = new SlowCar( theSlowImage,  500, 300   );
	break;
      case 1 : 
	theCar[i] = new FastCar( theFastImage,  500, 300   );
	break;
      default: 
	theCar[i] = new FastCar( theFastImage2, 500, 300   );
	break;
	
      }
      
    }

    theThread = new Thread( this );
    isRunning = true;
    theThread.start();

  }


  public void stop() {

    if ( theMusicName != null ) {
      theMusic.stop();
    }

    isRunning = false;

  }


  public void run() {

    while ( isRunning ) {

      try {
	Thread.sleep( SLEEP_TIME );
      } catch ( InterruptedException e ) { 
	System.out.println( "Sleep Exception" );
	e.printStackTrace();
      }

      Dimension d = getSize();

      for ( int i = 0; i < CARS; i++ ) {
	
	theCar[i].update( d.width, d.height );
	checkCollisions();

      }
      
      if ( theCar[0].isCrunched() ) {
	stop();
	youLose();
      }
      
      repaint();

    }

  }

  protected void checkCollisions() {

    Point     p1 = theCar[0].getPosition();
    Dimension d1 = theCar[0].getSize();
    Rectangle r1 = new Rectangle( p1, d1 );

    int crunchCount = 0;

    //r1.translate( p1.x / 8, p1.y / 8 );
    //r1.grow( -1 * d1.width / 4, -1 * d1.height / 4 );
    r1.grow( -1 * d1.width / 8, -1 * d1.height / 8 );
    
    for ( int i = 1; i < CARS; i++ ) {

      if ( theCar[i].isCrunched() ) {
	crunchCount++;
	continue;
      }

      Point     p2 = theCar[i].getPosition();
      Dimension d2 = theCar[i].getSize();
      Rectangle r2 = new Rectangle( p2, d2 );
      //r2.translate( p2.x / 8 , p2.y / 8 );
      //r2.grow( -1 * d2.width / 4, -1 * d2.height / 4 );
      r2.grow( -1 * d2.width / 8, -1 * d2.height / 8 );
      
      if ( r1.intersects( r2 ) ) {

	if ( theBangName != null ) {
	  theBang.play();
	}

	if ( p1.y < p2.y ) {
	  theCar[i].setCrunched();
	} else {
	  theCar[0].setCrunched();
	}

      }

    }

    if ( crunchCount == CARS-1 ) {
      stop();
      youWin();
    }
    
  }


  public final synchronized void update( Graphics g ) {

    if ( theSize == null
	 || theSize.width  != getSize().width
	 || theSize.height != getSize().height ) {

      theSize = getSize();
      theImage = createImage( theSize.width, theSize.height );
      theGraphics = theImage.getGraphics();
      
    }

    paint(theGraphics);
    g.drawImage( theImage, 0, 0, null );

  }

  public void paint( Graphics g ) {

    g.setColor( bgColor );
    g.fillRect( 0, 0, getSize().width, getSize().height );

    if ( gameOver ) {
      
      if ( youWon ) {
	g.setColor( Color.black );
	System.out.println( "You Win Paint" );
	g.drawString( "You win, Bruiser!", 200, 175);
      } else {
	g.setColor( Color.black );
	System.out.println( "You Lose Paint" );
	g.drawString( "More like, Loser!", 200, 175);
      }
      

    } else {

      for ( int i = 0; i < CARS; i++ ) {
	theCar[i].paint(g);
      }

    }

  }

  public void processHTMLParameters() {

    String parameter;

    //Set up for passed Background Color Components
    String redComp   = getParameter( "bgColorRedComponent"   );
    String greenComp = getParameter( "bgColorGreenComponent" );
    String blueComp  = getParameter( "bgColorBlueComponent"  );
    
    if ( ( redComp != null ) && ( blueComp != null ) && ( greenComp != null ) ) {
    
      bgColor = new Color( Integer.parseInt( redComp   ), 
			   Integer.parseInt( greenComp ), 
			   Integer.parseInt( blueComp  ) );
    }

    System.out.println( "\n" + "After Get Colors "    + "\n"
			+ " redComp   = " + redComp   + "\n"
			+ " greenComp = " + greenComp + "\n"
			+ " blueComp  = " + blueComp  + "\n" );

    fastImageName   = getParameter( "fastImage"  );
    fastImage2Name  = getParameter( "fast2Image" );
    slowImageName   = getParameter( "slowImage"  );
    drivenImageName = getParameter( "drivenImage" );

    theMusicName = getParameter( "musicName" );
    theBangName  = getParameter( "bangName"  );

    String numberOfCars = getParameter( "opponentCount"  );
    if ( numberOfCars != null ) {
      CARS = Integer.parseInt( numberOfCars );
    }


  }


  public void youWin() {

    gameOver = true;
    youWon   = true;
    System.out.println( "WINNER!\n" );

  }


  public void youLose() {
    
    gameOver = true;
    youWon   = false;
    System.out.println( "LOSER!\n" );

  }

} // End of Bumpers04


