app.service('imageService',function($http,$q,blogutil,utilService){
	var config = {
		startIndex : 1,
		maxResults : 500,
		defaultBlog : "",
		defaultToken : null
	}


	/* inherited from utilService */
	var logger = utilService.logger;
	var AuthUtil = utilService.AuthUtil;


	var authKey = AuthUtil.getAuthKey();
	

	/* http request for blogs feeds */
	var getURL = function(blogID,maxResults,pageToken){

		if(id == undefined || id == ""){
			logger.log("blogID not defined");
			return;
		}

		var apiURL = "https://www.googleapis.com/blogger/v3/blogs/"+ id +"/posts";
		
		var params = {};
		params.key = authKey;
		params.fetchImages = true;

		
		if(maxResults !== undefined){
			
			if(maxResults > 500 || maxResults < 1){
				params.maxResults = config.maxResults;
			}
			params.maxResults = maxResults;

		}

		if(nextPageToken !== undefined){
			params.pageToken = pageToken;
		}

		var paramStr = utilService.paramstoQuery(params);
		apiURL += paramStr;

		return apiURL;
	}

	/* filters out blogger images from htmlcontent */
	var filterBlogImages = function(htmlContent){
		//copy paste from other website.
		var imgArr = [];
		var imgTags = htmlContent.match(/<img\s[^>]*?src\s*=\s*['\"]([^'\"]*?)['\"][^>]*?>/g);
		if(imgTags != undefined && imgTags.length > 0 ){
			for(var i=0 ; i < imgTags.length ; i++){
				var imgURL = imgTags[i].match(/(https?:\/\/.*\.(?:png|jpg))/);
				if(imgURL != undefined && imgURL.length > 0){
					var picURL = imgURL[0];
					if(picURL.indexOf('bp.blogspot.com')){
					    var splitter = picURL.split("/")[7];
					    picURL = picURL.replace(splitter,"s1600");
					    imgArr.push(picURL);
					}
				}
			}
		}
		return imgArr;
	}

	/* returns filtered result of an entry */
	var parseEntry = function(entry){
	    var obj = {};
	    obj.id = entry.id;
	    obj.title = entry.title;
	    obj.images = filterBlogImages(entry.content);
	    obj.thumbs = JSON.parse(JSON.stringify(obj.images).replace(/s1600/g,"s320")); //can be memory intensive
	    obj.published = (new Date(entry.published.$t)).getTime();
	    obj.updated = (new Date(entry.updated.$t)).getTime();
	    if(entry.hasOwnProperty("link")){
	        obj.url = (entry.link[entry.link.length - 1].href);
	    }
	    if(entry.hasOwnProperty("label"))
	        obj.label = label;
	    return obj;
	}


	return {
		getURL : getURL,
		parseEntry : parseENtry
	}
});


app.service('utilService',function(){
	var paramstoQuery = function(paramsObj){
		var str="?";
		for(key of Object.keys(paramsObj)){
			str += key+"="+ paramsObj[key] +"&";
		}
		return str.substring(0,str.length - 1);
	}

	var logger = (function(){
		var logsCatalog = [];
		return {
			log : function(name){
				logsCatalog.push({ content : name , time : (new Date()).getTime() });
				console.log(name);
			},
			writeLog : function(){
				//require('fs').writeJSON("logs.json",logsCatalog);
			},
			clearLog : function(){
				logsCatalog = [];
			}
		}
	})();

	var AuthUtil = (function(){
		var key = 'AIzaSyBZvR46qyUilZ6Fl5vn9oPnLZtYHnqSknE';
		var getAuthKey = function(){
			return key;
		}
		return {
			getAuthKey : getAuthKey
		}

	})();

	return {
		paramstoQuery : paramstoQuery,
		logger : logger,
		AuthUtil : AuthUtil
	}
});