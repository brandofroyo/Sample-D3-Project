d3.csv("papers.csv", function(dataset) {
  var grid = d3.select("#grid")
  .append("svg")
  .attr("width","510px")
  .attr("height","510px");

  for (var row = 0; row < dataset.length; row++) {
    row.x = row*10;
    row.y = row*10;
    row.width = 50;
    row.height = 50;
  }
  
  var row = grid.selectAll(".row")
    .data(dataset)
    .enter().append("g")
    .attr("class", "row")
    .selectAll(".square")
    .data(function(d) {
      console.log(d)
      return d;
    })
    .enter().append("rect")
    .attr("class","square")
    .attr("x", function(d) {
      console.log(d)
      return d.x;
    })
    .attr("y", function(d) { return d.y; })
    .attr("width", function(d) { return d.width; })
    .attr("height", function(d) { return d.height; })
    .on('click', function(d) {
         d.click ++;
         if ((d.click)%4 == 0 ) { d3.select(this).style("fill","#fff"); }
       if ((d.click)%4 == 1 ) { d3.select(this).style("fill","#2C93E8"); }
       if ((d.click)%4 == 2 ) { d3.select(this).style("fill","#F56C4E"); }
       if ((d.click)%4 == 3 ) { d3.select(this).style("fill","#838690"); }
      });
});

function gridData() {
  var data = new Array();
  var xpos = 1; //starting xpos and ypos at 1 so the stroke will show when we make the grid below
  var ypos = 1;
  var width = 50;
  var height = 50;
  var click = 0;
  
  // iterate for rows 
  for (var row = 0; row < 10; row++) {
    data.push( new Array() );
    
    // iterate for cells/columns inside rows
    for (var column = 0; column < 5; column++) {
      data[row].push({
        x: xpos,
        y: ypos,
        width: width,
        height: height,
        click: click,
        row_index: row,
        column_index: column
      })
      // increment the x position. I.e. move it over by 50 (width variable)
      xpos += width;
    }
    // reset the x position after a row is complete
    xpos = 1;
    // increment the y position for the next row. Move it down 50 (height variable)
    ypos += height; 
  }
  return data;
}

dropdown.getElementById("Radial").onclick = function() {radialFunction()};

function radialFunction(){
	svg.selectAll("Network").remove();

	d3.select("body").append("svg").attr("width", 40).attr("height", 40).append("circle").attr("cx", 40).attr("cy", 40).attr("r", 40).style("fill", "orange");
}

var gridData = gridData();  
// I like to log the data to the console for quick debugging
// console.log(gridData[1]);

