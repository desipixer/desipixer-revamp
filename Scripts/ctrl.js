app.controller('blogCtrl',function($http,$q,imageService,blogService){
	$scope.blogs = blogService.getBlogs();

	$scope.getBlog = function(){
		var blogID = $scope.selectedBlog;
		var maxResults = imageService.maxResults;
		var apiURL = imageService.getURL(blogID,maxResults,null);
		$http.get(apiURL).success(function(data){
			blogService.feeds = data.feeds;
			for(entry of feeds){
				var entry = imageService.parseEntry(entry);
				
			}
		});
	}

})