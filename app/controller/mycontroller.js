angular.module("app").controller("mycontroller", function($scope){
	$scope.data = [
	{ title : 'Batman',		fname : 'Bruce', lname : 'Wayne', 	city : 'Gotham', 		power : 7,  price : 876.45678, releasedate : '2016-03-30',  photo: 'images/batman.jpg'},
	{ title : 'Superman',	fname : 'Clark', lname : 'Kent', 	city : 'Metropolis', 	power : 8,  price : 940.64578, releasedate : '2016-03-27',  photo: 'images/superman.jpg'},
	{ title : 'Spiderman',	fname : 'Peter', lname : 'Parker', 	city : 'New york', 		power : 7,  price : 750.46758, releasedate : '2016-03-23',  photo: 'images/spiderman.jpg'},
	{ title : 'Ironman',	fname : 'Tony',  lname : 'Stark', 	city : 'New york', 		power : 7,  price : 450.54678, releasedate : '2016-03-24',  photo: 'images/ironman.jpg'},
	{ title : 'Phantom',	fname : 'Kit',   lname : 'Walker', 	city : 'Bhangala', 		power : 6,  price : 320.74568, releasedate : '2016-03-19',  photo: 'images/phantom.jpg'}
	 ];
	$scope.sorton = 'title'; 
	$scope.rev = true;
	 
	 $scope.sortFun = function(val){
	 	 $scope.sorton = val; 
	 	 $scope.rev = !$scope.rev;
	 };
});