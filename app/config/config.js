angular.module("app").config(function($routeProvider){
	// alert("i run before anyting in angular")
	$routeProvider
	.when("/", {
		templateUrl : "app/view/herolist.html",
		controller : "mycontroller"
	})
	.when("/batman", {
		template : "welcome to batman page"
	})
})
