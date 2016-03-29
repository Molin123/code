var aMailServices = angular.module('AMail',['ngRoute']);
aMailServices.controller('MainController', function($scope, $route, $routeParams, $location) {
     $scope.$route = $route;
     $scope.$location = $location;
     $scope.$routeParams = $routeParams;
 })
aMailServices.config(function($routeProvider){
	$routeProvider.
	when('/',{
		controller:ListController,
		templateUrl:'list.html'
	}).
	when('/view/:id',{
		controller:DetailController,
		templateUrl:'detail.html'
	}).
	otherwise({
		redirectTo:'/'
	});
});

messages = [{
	id:0, sender:'jean@123.com', subject:'Hi 123123',
	date:'Dec 7,2013 8:51:12', recipients:['greg@456.com'],
	message:'Hi 123 jfiosdjfosdifhsdlkofssdjo sdofjdsghsd'
},{
	id:1, sender:'Tean@582.com', subject:'Hi 123123',
	date:'Dec 3,2015 1:11:56', recipients:['gtgg@4fsd.com'],
	message:'Hi 852 jfiosdjf85695hsdlkofs418647jo sdofjdsghsd'
},{
	id:2, sender:'Unfn@fsd.com', subject:'Hsfsd 1fsd3',
	date:'Dec 2,2034 1:21:32', recipients:['sfsdg@4eb.com'],
	message:'Hi as 123213lkofs418647jo s123123123'
},];

function ListController($scope){
	$scope.messages = messages;
}
function DetailController($scope,$routeParams){
	$scope.message = messages[$routeParams.id];
}