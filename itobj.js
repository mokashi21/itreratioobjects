// "Program to clone the object and change the property and then iterate the array of objects using
// inbuilt functions and to console the object property and frame a meaning full sentence."

var obj = {
    name : "vinod mokashi",
    age : "25",
    area: "pune",
    clothing : {
        style : "simple",
        hipster : false
    }
}

for (var propt in obj) {
   console.log(propt + ': ' + obj[propt]);
    
}