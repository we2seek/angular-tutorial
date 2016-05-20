'use strict'

app.factory('forecast', ['$http', function($http){
    return $http.get('js/services/forecast.json')
    .success(function(data){
        return data;
    })
    .error(function(err){
        return err;
    });
}]);