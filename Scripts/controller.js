app.controller('homeCtrl', function ($scope, $http,utilService,blogService,$location) {
    $scope.testModel = '7468784626602203128';
    $scope.feeds = {};

    $scope.isActive = function (viewLocation) {
        return !(viewLocation === $location.path());
    };

    $scope.getURL = function(){
        var inputObj = $scope.testModel;
        var sendObj = {
            blogID : inputObj,
        }

        $http.post('/getBlog',sendObj).success(function(data){
            $scope.feeds = data.posts;
            utilService.blogData = data;
            console.log("success");
        }).error(function(err){
            console.log(err);
        });
    } 

    $scope.siteChanged = function(){
        //debugger;
        var inputObj = $scope.selectedSite;
        var sendObj = {
            blogID : inputObj,
            maxResults : null,
            pageToken : null
        }
        $http.post('/getBlog',sendObj).success(function(data){
            $scope.feeds = data.posts;
            utilService.blogData = data;
            if(data.hasOwnProperty("pageToken")){
                $scope.nextPageToken = data.pageToken;
            }
            console.log("success");
        });
    }

    $scope.getNextPage = function(){
        var inputObj = $scope.selectedSite;
        var pageToken = $scope.nextPageToken;
        var sendObj = {
            blogID : inputObj,
            maxResults : null,
            pageToken : pageToken
        }
        $http.post('/getBlog',sendObj).success(function(data){
            $scope.feeds = data.posts;
            utilService.blogData = data;
            if(data.hasOwnProperty("pageToken")){
                $scope.nextPageToken = data.pageToken;
            }
            console.log("success");
        });
        
    }

    $scope.blogList = blogService.getBlogList();
 });



app.controller('postCtrl', function ($scope, $routeParams,utilService,blogService,$sce) {
    $scope.body = null;
    $scope.title = null;
    var getHTML = function (obj) {
        var imageArray = obj.thumbs;
        var imageSrc = "";
        imageArray.forEach(function(element,index){
            imageSrc = imageSrc + "<a href='" + obj.images[index] + "'  target='_blank'><img src='" + element + "' /></a>";
        });
        return imageSrc;
    }

    if($routeParams != null){
        var obj = utilService.searchObjectArray(utilService.blogData.posts,"id",$routeParams.postID);
        $scope.title = obj.title;
        $scope.body = '<div>' + getHTML(obj) + ' </div>';
    }

    $scope.renderHtml = function (htmlCode) {
        return $sce.trustAsHtml(htmlCode);
    };

    $scope.postBlogs = blogService.getPostBlogs();

    

 });