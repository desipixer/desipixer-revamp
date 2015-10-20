app.controller('blogCtrl',function($http,$q,imageService,blogService){
	$scope.blogs = blogService.getBlogList();

	$scope.getBlog = function(){
		var blogID = $scope.selectedBlog;
		var maxResults = imageService.maxResults;
		var apiURL = imageService.getURL(blogID,maxResults,null);
		/* make request */
		$http.get(apiURL).success(function(data){
			blogService.feeds = data.feeds;
			for(entry of feeds){
				var entry = imageService.Entry(entry);
				
			}
		});
	}

});