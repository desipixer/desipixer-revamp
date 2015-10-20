app.service('utilService',function(){

    var blogData = null;
    
    var searchObjectArray = function(arr,key,value){
        var obj = [];
        for(element of arr){
            if(element.hasOwnProperty(key)){
                if(value == element[key]){
                    obj.push(element);
                }
            }
        }
        
        if(obj.length == 1){
            return obj[0];
        }
        if(obj.length == 0){
            return null;
        }
        else
        {
            return obj;
        }
    }

    return {
        searchObjectArray : searchObjectArray,
        blogData : blogData
    }
})