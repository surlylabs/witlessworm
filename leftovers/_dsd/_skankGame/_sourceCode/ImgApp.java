import java.awt.*;
import java.awt.event.*;
import java.awt.image.*;
import java.applet.Applet;
import java.util.*;
import java.io.*;
import java.net.*;
import java.text.*;

public class ImgApp extends Applet implements ActionListener, MouseListener {

  //Image counters
  int imageCounter, imageCount;

  //Applet title
  String appletTitle;
  
  //Applet Color
  Color bgColor = Color.white;
  
  //Vector for Image descriptions
  Vector imageDescriptionVector;

  //Vector for Image names
  Vector imageNameVector;

  //Vector for Images
  Vector jpgImageVector, jpgImageThumbNailVector;

  //MediaTracker to make sure the images are completely loaded before displaying them
  MediaTracker tracker;

  //Font info
  String fontType = "SansSerif";
  int    fontSize = 14;
  
  //Label objects
  Label imageLabel, appletTitleLabel;

  //jpggif object
  jpggif logo;

  //Size for the middle (logo) image
  int logoX = 375;
  int logoY = 250;

  //Buttons
  Button prev,next;
  static final String prevLabel = "<< Prev";
  static final String nextLabel = "Next >>";

  //Layouts
  GridBagLayout      gbLayout;
  GridBagConstraints gbConstraints;

  //Panels
  Panel panelNorth, panelWest, panelCenter, panelEast, panelSouth;
  static final int imageThumbNailRows    = 6;
  static final int imageThumbNailColumns = 2;


  public void init() {

    //Process the HTML parameters and set some initial values
    processHTMLParameters();

    //Initialize the Image counter
    imageCounter = 0;

    //Create Image vector
    jpgImageVector = new Vector( imageCount );

    //Create Image ThumbNail vector
    jpgImageThumbNailVector = new Vector( imageCount );

    //Background Color for Applet
    setBackground( bgColor );

    //Reset the font style, and size for the rest of the Applet
    setFont( new Font( fontType, Font.BOLD+Font.ITALIC, fontSize ) );

    //Create the Applet title
    appletTitleLabel = new Label( appletTitle, Label.CENTER );
    appletTitleLabel.setFont( new Font( fontType, Font.BOLD+Font.ITALIC, fontSize+8) );

    //Load the first Image label
    imageLabel = new Label( ( String ) imageDescriptionVector.elementAt( imageCounter ), Label.CENTER );

    //Create a MediaTracker
    tracker = new MediaTracker( this );


    try {

      //Set up some local variables for processing
      String currentImageName = "";
      Image  currentImage;
      
      for ( int i = 0; i < imageCount; i++ ) {

        currentImageName = ( String ) imageNameVector.elementAt( i );
        currentImage     = getImage( getDocumentBase(), currentImageName );

	//Add Image to be tracked
	tracker.addImage( currentImage, 0 );

	//Insert small size Image ThumbNails to the jpgImageThumbNailVector
	jpgImageThumbNailVector.addElement( new jpggif (
							getImage( getDocumentBase(), currentImageName ),
							(int) ( logoX * .2 ), 
							(int) ( logoY * .2 ) 
							) 
					    );
     
	//Insert regular size Images to the jpgImageVector
	jpgImageVector.addElement( new jpggif (
					       getImage( getDocumentBase(), currentImageName ),
					       logoX, 
					       logoY 
					       ) 
				   );
      }
     
    } catch (Exception e) {
      System.out.println( "Blew up getting the Images into the vectors" );
      e.printStackTrace();
    }


    //Set the first regular size Image to be displayed
    logo = ( jpggif ) jpgImageVector.elementAt( imageCounter );

    //Create Panels
    panelNorth = new Panel();

    panelEast  = new Panel();
    panelEast.setLayout( new GridLayout( imageThumbNailRows, imageThumbNailColumns, 2, 2 ) );
    panelWest  = new Panel();
    panelWest.setLayout( new GridLayout( imageThumbNailRows, imageThumbNailColumns, 2, 2 ) );

    panelCenter = new Panel();

    if ( imageCount > ( imageThumbNailColumns * imageThumbNailRows ) ) {
      panelCenter.setLayout( new FlowLayout( FlowLayout.CENTER ) );
    } else {
      panelCenter.setLayout( new FlowLayout( FlowLayout.LEFT ) );
    }

    //Setting the layout for the South Panel
    panelSouth = new Panel();
    gbLayout = new GridBagLayout();
    gbConstraints = new GridBagConstraints();
    panelSouth.setLayout( gbLayout );

    //Setting Layout for the Applet
    setLayout( new BorderLayout( 3, 3 ) );

    //Create Buttons
    prev = new Button( prevLabel );
    next = new Button( nextLabel );

    try {
      System.out.println( "Wait for all images to load.\n" );
      //Wait for all the images to load before we go any further
      tracker.waitForAll();
      System.out.println( "All images have loaded.\n" );
    } catch ( InterruptedException e ) {
      System.out.println( "Blew up in waitForAll()" );
      e.printStackTrace();
    }

    //Assign thumbnail pictures to panelWest and panelEast
    for ( int i = 0 ; i < imageCount; i++ ) {
      //PanelWest can only take on 10 Images
      if ( i < ( imageThumbNailColumns * imageThumbNailRows ) ) {
	panelWest.add( ( jpggif ) jpgImageThumbNailVector.elementAt( i ) );
      } else {
	panelEast.add( ( jpggif ) jpgImageThumbNailVector.elementAt( i ) );       
      }
      //Assign mouse listener to the Image ThumbNails
      ( ( jpggif ) jpgImageThumbNailVector.elementAt( i ) ).addMouseListener( this );
    }

    //Add components to the panels
    panelNorth.add( appletTitleLabel );

    //Set up the position for the imageLabel
    gbConstraints.gridx = 0;
    gbConstraints.gridy = 0;
    gbConstraints.gridwidth  = 2;
    gbConstraints.gridheight = 1;
    gbConstraints.weightx = 1000;
    gbConstraints.fill   = GridBagConstraints.BOTH;
    gbConstraints.anchor = GridBagConstraints.NORTH;
    gbLayout.setConstraints( imageLabel, gbConstraints );

    panelSouth.add( imageLabel );

    //Set up the position for the prev button
    gbConstraints.gridx = 0;
    gbConstraints.gridy = 1;
    gbConstraints.gridwidth  = 1;
    gbConstraints.gridheight = 1;
    gbConstraints.fill   = GridBagConstraints.NONE;
    gbConstraints.anchor = GridBagConstraints.EAST;
    gbConstraints.insets = new Insets( 2, 2, 2, 2 );
    gbLayout.setConstraints( prev, gbConstraints );

    panelSouth.add( prev );
    
    //Set up the position for the next button
    gbConstraints.gridx = 1;
    gbConstraints.gridy = 1;
    gbConstraints.gridwidth  = 1;
    gbConstraints.gridheight = 1;
    gbConstraints.fill   = GridBagConstraints.NONE;
    gbConstraints.anchor = GridBagConstraints.WEST;
    gbConstraints.insets = new Insets( 2, 2, 2, 2 );
    gbLayout.setConstraints( next, gbConstraints );
   
    panelSouth.add(  next );

    panelCenter.add( logo );

    add( panelNorth,  BorderLayout.NORTH  );
    add( panelWest,   BorderLayout.WEST   );
    add( panelCenter, BorderLayout.CENTER );
    add( panelEast,   BorderLayout.EAST   );
    add( panelSouth,  BorderLayout.SOUTH  );
    
    next.addActionListener( this );
    prev.addActionListener( this );

  }

  public void processHTMLParameters() {

    String parameter;

    //Get the font type from the Applet parms
    fontType = getParameter( "fontType" );
    fontSize = Integer.parseInt( getParameter( "fontSize" ) );

    //Set up for passed Background Color Components
    String redComp   = getParameter( "bgColorRedComponent"   );
    String greenComp = getParameter( "bgColorGreenComponent" );
    String blueComp  = getParameter( "bgColorBlueComponent"  );
    
    if ( ( redComp != null ) && ( blueComp != null ) && ( greenComp != null ) ) {
    
      bgColor = new Color( Integer.parseInt( redComp   ), 
			   Integer.parseInt( greenComp ), 
			   Integer.parseInt( blueComp  ) );
    }


    System.out.println( "\n" + "After get Colors "    + "\n" 
			+ " redComp   = " + redComp   + "\n"
			+ " greenComp = " + greenComp + "\n"
			+ " blueComp  = " + blueComp  + "\n" );

    //Get the Image count
    parameter  = getParameter( "imageCount" );
    imageCount = Integer.parseInt( parameter );

    System.out.println( "After get count = " + imageCount + "\n" );

    //Get the Applet title
    appletTitle = getParameter( "title" );

    //Create Vectors
    imageDescriptionVector = new Vector( imageCount );
    imageNameVector        = new Vector( imageCount );
    
    //Get regular image names
    for ( int i = 1; i <= imageCount; i++ ) {
      System.out.println( "Image location = " + i );
      System.out.println( getParameter( "image" + i ) + "\n" );
      imageNameVector.addElement( getParameter( "image" + i ) );
    }

    //Get Image descriptions
    for ( int i = 1; i <= imageCount; i++ ) {
      imageDescriptionVector.addElement( getParameter( "description" + i ) );
    }			       
  }

  public void actionPerformed( ActionEvent e ) {

    if ( e.getActionCommand().equals( prevLabel ) ) {
      imageCounter--;
      if ( imageCounter < 0 ) {
	imageCounter = ( imageCount - 1 );
      } 
      logo = ( jpggif ) jpgImageVector.elementAt( imageCounter );
      performMouseClickedEvent(imageCounter);
    }
    if ( e.getActionCommand().equals( nextLabel ) ) {
      imageCounter++;
      if ( imageCounter > ( imageCount - 1 ) ) {
	imageCounter = 0;
      }
      logo = ( jpggif ) jpgImageVector.elementAt( imageCounter );
      performMouseClickedEvent( imageCounter );
    }

    performSwap();
    
  }
  
  public void mouseClicked( MouseEvent e ) {
     
    int x = e.getX();
    int y = e.getY();

    //String yo =  "clicked @ [" + x + ", " + y + "]";

    //Figure out what images ThumbNail has been clicked
    for ( int i = 0; i < imageCount; i++ ) {
      if ( e.getSource().equals( jpgImageThumbNailVector.elementAt( i ) ) ) {
	
	// Don't update if the click on the same ThumbNail as the one being displayed
	if ( i != imageCounter ) {
	  performMouseClickedEvent( i );
	  performSwap();
	}

      }
    }
    
  }

  public void performMouseClickedEvent( int imageAt ) {

    logo = (jpggif) jpgImageVector.elementAt( imageAt );
    imageLabel.setText( ( String ) imageDescriptionVector.elementAt( imageAt ) );
    imageCounter = imageAt;

  }  

  public void performSwap() {

    panelCenter.remove( 0 );
    panelCenter.add( logo, 0 );
    validate();
    showStatus( imageLabel.getText() );

  }

  public void mousePressed( MouseEvent e ) {
    mouseClicked( e );
  }
  
  public void mouseReleased( MouseEvent e ) {}
  public void mouseEntered(  MouseEvent e ) {}
  public void mouseExited(   MouseEvent e ) {}

}
