var bandAColorValue = document.getElementById("bandAColor");
var bandBColorValue = document.getElementById("bandBColor");
var bandCColorValue = document.getElementById("bandCColor");
var bandDColorValue = document.getElementById("bandDColor");
bandAColorValue.addEventListener('change',getValue);
bandBColorValue.addEventListener('change',getValue);
bandCColorValue.addEventListener('change',getValue);
bandDColorValue.addEventListener('change',getValue);



function CalculateOhmValue(bandAColor,bandBColor,bandCColor,bandDColor){
  var totalBands = ((+bandAColor * 10)+ +bandBColor) *  +bandCColor;
  console.log(totalBands);
  return {output: totalBands, bandDColor};

}
function getValue(){
  var valueA = bandAColorValue.value,
      valueB = bandBColorValue.value,
      valueC = bandCColorValue.value,
      valueD = bandDColorValue.value;
      var total = CalculateOhmValue(valueA,valueB,valueC,valueD);
      console.log(total);
      document.getElementById('output').value = (total.output + " Ohm Tolerance +/-" + total.bandDColor);
}
