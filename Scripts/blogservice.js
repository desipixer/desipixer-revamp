app.service('blogService',function(imageService,$http){
	// this contains information about the blog and its details.

	this.feeds = [];	

	var blogList = [ { blogId: "7833828309523986982",
	                blogURL: 'http://www.desipixer.in/',
	                category: 1
	            }, {
	                blogId: "1607837477387514460",
	                blogURL: 'http://teluguclue.blogspot.in/',
	                category: 1
	            }, {
	                blogId: "7613699008692966649",
	                blogURL: 'http://rockingfunimages.blogspot.com/',
	                category: 2
	            },{
	                blogId: "7225871578344472338",
	                blogURL: 'http://www.urtamilcinema.com/',
	                category: 2
	            },  {
	                blogId: "4846859112009281783",
	                blogURL: 'http://www.celebsnext.com/',
	                category: 2
	            }, {
	                blogId: "3293309843232706023",
	                blogURL: 'http://www.searchtamilmovies.com/',
	                category: 1
	            }, {
	                blogId: 3570505240870034981,
	                blogURL: 'http://illeana-hotphotos.blogspot.com/',
	                category: 1
	            }, {
	                blogId: 4257078420076874919,
	                blogURL: 'http://ssmusictheblog.blogspot.com/',
	                category: 1
	            }, {
	                blogId: 3788148058786940579,
	                blogURL: 'http://photofunmasti.blogspot.com/',
	                category: 1
	            }, {
	                blogId: "3568736907693451574",
	                blogURL: 'http://filmytrend.blogspot.com/',
	                category: 1
	            }, {
	                blogId: "2951969169923408846",
	                blogURL: 'http://fultohot.blogspot.com/',
	                category: 1
	            }, {
	                blogId: 7294698807437562935,
	                blogURL: 'http://tollywoodtolly.blogspot.com/',
	                category: 1
	            },  {
	                blogId: "78242048938000965",
	                blogURL: 'http://www.tollyscreen.com/',
	                category: 1
	            }, {
	                blogId: 7521091312921738775,
	                blogURL: 'http://cinehike.blogspot.com/',
	                category: 1
	            }, {
	                blogId: 4340330498874514770,
	                blogURL: 'http://www.removideos.com/',
	                category: 1
	            }, {
	                blogId: 1259465806147598254,
	                blogURL: 'http://way2newsblog.blogspot.com/',
	                category: 1
	            }, {
	                blogId: "719302156971941098",
	                blogURL: 'http://hq-bollywood.blogspot.com/',
	                category: 1
	            },{
	                blogId: 4919960343339905419,
	                blogURL: 'http://www.indianbeast.com/',
	                category: 1
	            },  {
	                blogId: 8351995278725523676,
	                blogURL: 'http://cinema.nilavaithedi.biz/',
	                category: 1
	            }, {
	                blogId: 8630800337511284753,
	                blogURL: 'http://cinemaicon.blogspot.com/',
	                category: 1
	            }, {
	                blogId: "4985646326158465936",
	                blogURL: 'http://www.tollywoodblog.in/',
	                category: 2
	            }, {
	                blogId: 7682538289737929837,
	                blogURL: 'http://www.voovov.com/',
	                category: 1
	            }, {
	                blogId: 8369777321912001295,
	                blogURL: 'http://onlypopularvideos.blogspot.com/',
	                category: 1
	            }, {
	                blogId: 7251757096163318078,
	                blogURL: 'http://bollywood5k.blogspot.com/',
	                category: 1
	            }, {
	                blogId: 7468784626602203128,
	                blogURL: 'http://telugu.zustcinema.com/',
	                category: 2
	            },{
	                blogId: 5648086490419664967,
	                blogURL: 'http://actresscelebritygallery.blogspot.com/',
	                category: 1
	            },{
	                blogId: 3147458353617272183,
	                blogURL: 'http://brittanywilbur.blogspot.com/',
	                category: 1
	            },{
	                blogId: 9011145545740768794,
	                blogURL: 'http://telugumoviesongsfreedownloads.blogspot.com/',
	                category: 1
	            },{
	                blogId: 5489822191765425450,
	                blogURL: 'http://actress-photo-shoot.blogspot.com/',
	                category: 1
	            },{
	                blogId: 8261689056909797037,
	                blogURL: 'http://lgmoviee.blogspot.com/',
	                category: 1
	            },{
	                blogId: 3905178814471876545,
	                blogURL: 'http://sareebelownavelshow.blogspot.com/',
	                category: 1
	            },{
	                blogId: 5656041982218593755,
	                blogURL: 'http://filmgain.blogspot.com/',
	                category: 1
	            },{
	                blogId: 5067574769190905623,
	                blogURL: 'http://actresshdgallery.blogspot.com/',
	                category: 1
	            },{
	                blogId: 4713835892748753574,
	                blogURL: 'http://www.tcinema.in/',
	                category: 1
	            },{
	                blogId: 8089698501885637773,
	                blogURL: 'http://www.123photos.in/',
	                category: 1
	            },{
	                blogId: 5187513159820363840,
	                blogURL: 'http://www.spicycinegallery.com/',
	                category: 1
	            },
	            { 
	                blogId: "9011345903648301710",
	                blogURL: 'http://desipixers.blogspot.com/',
	                category: 1
	            },
	            { 
	                blogId: "8288428012409826912",
	                blogURL: 'http://samanthapix.blogspot.com/',
	                category: 1
	            },
	            {
	                blogId: "4729247519531040631",
	                blogURL: 'http://rakulpixer.blogspot.com/',
	                category: 1
	            },
	            {
	                blogId: "6614264041233815321",
	                blogURL: 'http://kajalpixer.blogspot.com/',
	                category: 1
	            },
	            {
	                blogId: "2016762340977866228",
	                blogURL: 'http://shriyapixer.blogspot.com/',
	                category: 1
	            },
	            {
	                blogId: "9026317655696914243",
	                blogURL: 'http://samanthapixer.blogspot.com/',
	                category: 1
	            },
	            {
	                blogId: "7770041580109253182",
	                blogURL: 'http://tamannapixer.blogspot.com/',
	                category: 1
	            }
	            ];


	 var postBlogs = [
	 { 
	     blogId: "7833828309523986982",
	     blogURL: 'http://www.desipixer.in/',
	     category: 1
	 },
	 { 
	     blogId: "9011345903648301710",
	     blogURL: 'http://desipixers.blogspot.com/',
	     category: 1
	 },
	 { 
	     blogId: "8288428012409826912",
	     blogURL: 'http://samanthapix.blogspot.com/',
	     category: 1
	 },
	 {
	     blogId: "4729247519531040631",
	     blogURL: 'http://rakulpixer.blogspot.com/',
	     category: 1
	 },
	 {
	     blogId: "6614264041233815321",
	     blogURL: 'http://kajalpixer.blogspot.com/',
	     category: 1
	 },
	 {
	     blogId: "2016762340977866228",
	     blogURL: 'http://shriyapixer.blogspot.com/',
	     category: 1
	 },
	 {
	     blogId: "9026317655696914243",
	     blogURL: 'http://samanthapixer.blogspot.com/',
	     category: 1
	 },
	 {
	     blogId: "7770041580109253182",
	     blogURL: 'http://tamannapixer.blogspot.com/',
	     category: 1
	 }
	 ];

	 var getBlogList = function(){
	 	return blogList;
	 }

	 var getPostBlogs = function(){
	 	return postBlogs;
	 }

	return {
		getBlogList : getBlogList,
		feeds : this.feeds,
		getPostBlogs : getPostBlogs
	}
})