jQuery-GridWriter
=================

Plugin for creating jQuery-Mobile-Grids


Basic usage
===========
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
