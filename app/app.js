var app=angular.module("app",['slickCarousel']);

app.controller('MovieController', function($http,$scope){
	
	
		$http.get('https://demo2697834.mockable.io/movies').then(function(response){
			$scope.allMovies=response.data.entries
		})

})
