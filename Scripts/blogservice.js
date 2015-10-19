app.service('blogService',function(imageService,$http){
	// this contains information about the blog and its details.

	var curBlog = {	};
	curBlog.feeds = null;

	return {
		curBlog : curBlog
	}

	var Blog = function(id){
		var obj = {
			id : id,
			feeds : feeds,
			entries : []
		};
		return obj;
	}
	Blog.prototype.addEntry = function(entry){
		this.entries.push(entry);
	}

})