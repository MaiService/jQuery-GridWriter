jQuery-GridWriter
=================
**jQuery-GridWriter** 

    Plugin for creating jQuery-Mobile-Grids.
    Easy way to create grids with a dynamic width.

## Available Functions
#### addGrid(GridId, CombineGrids[0-2], BlockCount[1-3])
#### delGrid(GridId)
#### setGridWidth(GridId)
#### addBlock(GridId, BlockId) 
#### delBlock(BlockId)
#### addBlockContent(BlockId, Content)
#### delBlockContent(BlockId)

* Each function fires an event on target element
* Each function-event provides a data object {id: targetId}

* If window size is less then the value set in option MinDocumentWidth all grids become full sized
* this behavior can be turned of by setting option "CheckDocumentWidth" to false

#### Function -> addGrid() -> CombineGrids:
 - 0 - 33.3% width
 - 1 - 66.6% width
 - 2 - 99.9% width
 
#### Function -> addGrid() -> BarCount:
 - define how many Blocks are added to Grid 
 
Basic usage
===========

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
