<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Wechselgeldrechner</title>
    
    <link rel="stylesheet" type="text/css" href="jquery/jquery.mobile-1.4.4.min.css"/>
    <link rel="stylesheet" type="text/css" href="cashcounter.css">
    <script src="jquery/jquery.1.11.1.js"></script>
    <script src="jquery/jquery.mobile-1.4.4.min.js"></script>
    <script src="jquery.gridwriter.js"></script>
        
    <script>
	$( document ).ready(function() {
	  var grid = $("#grid").gridwriter();	

	  grid.bind("addGrid", function(event, data) {
		console.log(data);
	  });
	 
	  grid.bind("addBlock", function(event, data) {
		console.log(data);
	  });
	  
	  grid.data("ui-gridwriter").addGrid("test", 1, 2);
	  grid.data("ui-gridwriter").addBlock("test", "testblock2");
	  grid.data("ui-gridwriter").addBlock("test", "testblock3");
	  grid.data("ui-gridwriter").addBlockContent("testblock2","test1");
	  grid.data("ui-gridwriter").addBlockContent("testblock3","test2");
	
	  grid.data("ui-gridwriter").addGrid("test2", 0, 2);
	  grid.data("ui-gridwriter").addBlock("test2", "testblock4");
	  grid.data("ui-gridwriter").addBlock("test2", "testblock5");
	  grid.data("ui-gridwriter").addBlockContent("testblock4","test1");
	  grid.data("ui-gridwriter").addBlockContent("testblock5","test2");
	  
	  grid.data("ui-gridwriter").addGrid("test3", 2, 2);
	  grid.data("ui-gridwriter").addBlock("test3", "testblock6");
	  grid.data("ui-gridwriter").addBlock("test3", "testblock7");
	  grid.data("ui-gridwriter").addBlockContent("testblock6","test:0-2");
	  grid.data("ui-gridwriter").addBlockContent("testblock7","test:0-2");
	});
    </script>
    
  </head>
  
  <body>
   <!-- page -->
    <section data-role="page" id="common">
     
      <!-- header -->
      <header data-role="header" data-theme="b">
        <h1>Grid-Writer</h1>        
      </header><!-- /header -->
      
      <!-- content -->
      <div role="main" class="ui-content ">
        <div id="grid"></div>
      </div><!-- /content -->
      
    </section><!-- /page -->
  
  </body>
</html>