let array=[];
var sum = 0;

function Start(){	
let number=parseInt(prompt("How many numbers do you want to enter"));
for (var i = 0;i<number;i++){
	array[i]=parseInt(prompt("Please enter your numbers:"));
}

for (var i = 0; i <array.length;i++){
	sum += parseInt(array[i]);
}

 var avg = sum / array.length;
 
 document.write("The average of the numbers entered is"+" "+avg+"<br/>");
 document.write("The sum of the numbers entered is"+" "+sum)
}