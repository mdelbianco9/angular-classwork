
/* The controller is storing and controlling data. It sets up a bit of information to be placed or 
used in with other code. These do all the work, they will be your functions, stored arrays and 
anyother useful JS code, think of it as your new main.js file. */
app.controller('thisCtrl', function($scope){
	$scope.controlls = "This is an expression!";
})

// This controller is connected to a div for the inputs and results
app.controller('multiply', function($scope){
	// these variables are connected to the ng-model in html.index
	$scope.num1 = 5;
	$scope.num2 = 5;
})

app.controller('myArray', function($scope){
	$scope.theArray = [
	{name: "Marcus", age: 25, sport: "surfing"},
	{name: "Zack", age: 24, sport: "curling"}
	];
})