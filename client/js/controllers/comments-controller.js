// Comments controller using angular
//(function () {
	// body...
/*
name, [dependencies]
$scope and $resource are dependencies which angular will inject into the function as parameters
*/
	var app = angular.module("commentsApp", ['ngResource']);

	app.controller('commentsController', ['$scope', '$resource', function($scope, $resource){
		
		// Base URL for the REST api calls for our model - resource is the model
		var Comment = $resource('/api/comments');

		/*$scope.comments = [
			{ name: "Rayal Nadan" },
			{ name: "Arush Nadan" }

		] */
		// query to get 
		Comment.query(function (results){
			$scope.comments = results;
		});

		$scope.comments = [];

		$scope.addComment = function (){
			/*
			$scope.comments.push({name : $scope.commentName });
			$scope.commentName = ''; */

			// New instance of Comment - dynamic code
			var comment = new Comment();
			comment.name = $scope.commentName;
			comment.$save( function(result){
				$scope.comments.push(result);
				$scope.commentName = '';
			});
		};


	}]);

//}); 

/*
function commentsController($scope) {
	$scope.commentsCount = 1;
} */