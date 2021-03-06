# _jQuery-GridWriter_

_Description: Plugin for creating jQuery-Mobile-Grids. Easy way to create grids with a dynamic width._

## Project Setup

1. Include jQuery-Mobile files
2. Include jQuery-GridWriter.js file

## Functions

> ### Grid
> - addGrid(GridId, CombineGrids[0-2], BlockCount[1-3])
> - delGrid(GridId)
> - setGridWidth(GridId)

> ### Block
> - addBlock(GridId, BlockId) 
> - delBlock(BlockId) 

> ### Block-Content
> - addBlockContent(BlockId, Content)
> - delBlockContent(BlockId)

## Events
> - Each function fires an event on target element
> - Each function-event provides a data object: *_{id: targetId}_*

## Window-Size
> - If window size  < options value: "MinDocumentWidth" all grids become full sized
> - Window-Size check can be turned of by setting option value: "CheckDocumentWidth" to *_false_*

## Usage

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
