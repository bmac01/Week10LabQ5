array=[2,4,5,6,7,10];
var sum = 0;

function Start(){	

for (var i = 0; i <array.length;i++){
	sum += parseInt(array[i]);
}

 var avg = sum / array.length;
 
 document.write("The average of the numbers entered is"+" "+avg+"<br/>");
 document.write("The sum of the numbers entered is"+" "+sum)
}