var express        = require('express');
var app            = express();
var https = require('https');
var bodyParser = require('body-parser');
var utilService = require('util-service');
var imgService = require('img-service');
var blogService = require('blog-service');
var request = require('request');

/* static webpage */
app.use(express.static(__dirname)); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


/* from angularjs front end page */
app.post('/getBlog',function(req,res){
	var params = req.body;
	var maxResults = null;
	var pageToken = null;
	
	var Blog = blogService.Blog;
	var Post = blogService.Post;

	var blog = new Blog();
	if(params.hasOwnProperty('blogID')){
		blog.id = params.blogID;
	}
	
	if(params.hasOwnProperty("maxResults")){
		maxResults = params.maxResults;
	}

	if(params.hasOwnProperty("pageToken")){
		pageToken = params.pageToken;
	}

	var apiURL = imgService.getURL(blog.id,maxResults,pageToken);
	
	request(apiURL,function(err,response,body){
		if(!err){

	  		console.log("feed downloaded of blog : "+ blog.id);

	  		var jsonBody = JSON.parse(body);

	  		if(blog.hasOwnProperty("nextPageToken")){
	  			blog.pageToken = jsonBody.nextPageToken;
	  		}
	  		blog.feeds = jsonBody.items;
	  		for(item of blog.feeds){
	  			var post = new Post();
	  			post.id = item.id;
	  			post.blogid = item.blog.id;
	  			//post.content = item.content;
	  			post.title = item.title;
	  			post.url = item.url;
	  			post.images = imgService.filterBlogImages(item.content);
	  			post.thumbs = JSON.parse(JSON.stringify(post.images).replace(/s1600/g,"s320"));

	  			blog.posts.push(post);
	  		}
	  		res.send(blog);
	 	}
	 });

});













app.listen(3000);
console.log("App listening on port 3000");


