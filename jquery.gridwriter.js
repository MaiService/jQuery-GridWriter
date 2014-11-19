/*
* jQuery grid-writer
*
* Copyright 2010, 2014 Mai-Service (Julian Mai)
* Released under the MIT license.
*
*/
(function($) {
  /*
  ** @widget gridwriter
  **
  ** easy way to create grids with a dynamic width
  **
  ** Functions:
  ** - addGrid(GridId, CombineGrids[0-2], BlockCount[1-3])
  ** - delGrid(GridId)
  ** - setGridWidth(GridId)
  ** - addBlock(GridId, BlockId) 
  ** - delBlock(BlockId)
  ** - addBlockContent(BlockId, Content)
  ** - delBlockContent(BlockId)
  ** 
  ** Function -> addGrid -> CombineGrids:
  ** 0 - 33.3% width
  ** 1 - 66.6% width
  ** 3 - 99.9% width
  ** 
  ** Function -> addGrid -> BarCount:
  ** define how many Blocks are added to Grid 
  ** 
  ** each function fires an event on target element
  ** each function-event provides a data object {id: targetId}
  **
  ** !!!IMORTANT!!!
  ** --------------
  ** if window size is less then the value set in option MinDocumentWidth all grids become full sized
  ** this behavior can be turned of by setting option "CheckDocumentWidth" to false
  */	
  $.widget("ui.gridwriter", {
	
	options: {
	  // auto display correction
	  "CheckDocumentWidth": true,
	  "MinDocumentWidth":   800,
	  
	  // hook class
	  "HookClass":  "ui-gridwriter",
	  
	  // styling classes
	  "GridClass":  "ui-grid-a",	
	  "BlockClass": "ui-block-b",
	  "BarClass": 	"ui-bar ui-bar-a"
	},
	
	/*
	** @function _create
	*/
	_create: function() {
	  if(this.options.CheckDocumentWidth === true) {	
		$( window ).resize($.proxy(function() {
		   this._checkDocumentWidth();
		},this));
	  }
	},
	
	/*
	** @function addGrid
	*/
	addGrid: function(GridId, CombineGrids, BlockCount) {
	  if(isNaN(CombineGrids)) {
		alert("Function: addGrid() failed. Param: 'CombineGrids' is not type of INT");
		return;
	  } 	
	  	  
	  if(isNaN(BlockCount)) {
		alert("Function: addGrid() failed. Param: 'BlockCount' is not type of INT");
		return;
	  }
	  
	  if(CombineGrids > 2) {
		alert("Function: addGrid() failed. Param: 'CombineGrids' has to be a INT value between '0-2'");
		return;  
	  }
	  
	  if(BlockCount  > 3 || BlockCount == 0) {
		alert("Function: addGrid() failed. Param: 'BlockCount' has to be a INT value between '1-3'");
		return;  
	  }
	  	
	  $(this.element).append(
	    $("<div/>")
		.addClass(this.options.GridClass)
		.addClass(this.options.HookClass)
		.attr({
		  "id":			    GridId,
		  "block-count":    BlockCount,
		  "combined-grids": CombineGrids
		})
	  );
	  
	  this._checkDocumentWidth();
	  
	  $(this.element).trigger( "addGrid", {"id":GridId});
	},
	
	/*
	** @function delGrid
	*/
	delGrid: function(GridId) {
	  if($("#" + GridId).length == 0) {
	    alert("Function: delGGrid() failed. Grid with ID:'"+GridId+"' not found");
		return;
	  }
		
	  $("#" + GridId).remove();
	  $(this.element).trigger( "delGrid", {"id":GridId});
	},
	
	/*
	** @function setGridWidth
	*/
	setGridWidth: function(GridId) {
	  if($("#" + GridId).length == 0) {
	    alert("Function: setGridWidth() failed. Grid with ID:'"+GridId+"' not found");
		return;
	  }
		
      var CombinedGrids = $("#" + GridId).attr("combined-grids"),
		  BlocksCounter = $("#" + GridId).attr("block-count");
		  
	  var GridWidth  = {},
		  BlockWidth = (100 / parseInt(BlocksCounter));

	  switch(parseInt(CombinedGrids)) {
		case 0:
		  GridWidth = {"width":"33.1%","float":"left","padding":"0.1%"};
		break;
		case 1:
		  GridWidth = {"width":"66.3%","float":"left","padding":"0.1%"};
		break;
		case 2:
		  GridWidth = {"width":"99.7%","float":"left","padding":"0.1%"};
		break;  
		default:
		  GridWidth  = {"width":"99.7%","float":"left","padding":"0.1%"};
		break;
	  }
	  
	  $("#" + GridId).css(GridWidth);	 
	},
	
	/*
	** @function addBlock
	*/
	addBlock: function(GridId, BlockId) {
	  if($("#" + GridId).length == 0) {
	    alert("Function: addBlock() failed. Grid with ID:'"+GridId+"' not found");
		return;
	  }
		
	  $("#" + GridId).append(
	    $("<div/>")
		.addClass(this.options.BlockClass)
		.css("width",$("#" + GridId).attr("block-width")+"%")
		.attr("id", BlockId)
	  );
	  $(this.element).trigger( "addBlock", {"id":BlockId});
	},
	
	/*
	** @function delBlock
	*/
	delBlock: function(BlockId) {
	  if($("#" + BlockId).length == 0) {
	    alert("Function: delBlock() failed. Block with ID:'"+BlockId+"' not found");
		return;
	  }
		
	  $("#" + BlockId).remove();
	  $(this.element).trigger( "delBlock", {"id":BlockId});
	},
	
	/*
	** @function addBlockContent
	*/
	addBlockContent: function(BlockId, Content) {
	  if($("#" + BlockId).length == 0) {
	    alert("Function: addBlockContent() failed. Block with ID:'"+BlockId+"' not found");
		return;
	  }
		
	 $("#" + BlockId).append(
	    $("<div/>").addClass(this.options.BarClass).html(Content)
	  );
	  $(this.element).trigger( "addBlockContent", {"id":BlockId});
	},
	
	/*
	** @function delBlockContent
	*/
	delBlockContent: function(BlockId) {
	  if($("#" + BlockId).length == 0) {
	    alert("Function: delBlockContent() failed. Block with ID:'"+BlockId+"' not found");
		return;
	  }
		
	  $("#" + BlockId).html("");
	  $(this.element).trigger( "delBlockContent", {"id":BlockId});
	},
	
	/*
	** @function _checkDocumentWidth
	*/
	_checkDocumentWidth: function() {	
	  if(this.options.CheckDocumentWidth === true) {	
		if($(document).width() < this.options.MinDocumentWidth) {
		  $("." + this.options.HookClass).css({"width":"99.7%","float":"left","padding":"0.1%"});
		}	else {
		 $("." + this.options.HookClass).each($.proxy(function(Index, Element) {
		   this.setGridWidth($(Element).attr("id"));
		 },this));
		}
	  } else {
 		 $("." + this.options.HookClass).each($.proxy(function(Index, Element) {
		   this.setGridWidth($(Element).attr("id"));
		 },this));
	  }
	}
  });
})(jQuery);	