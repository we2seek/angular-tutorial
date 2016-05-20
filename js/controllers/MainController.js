'use strict'

app.controller('MainController', ['$scope', 'photos', function($scope, photos){
    $scope.page_title = 'Images Gallery';

    photos.success(function(data){
        console.log(data);
        $scope.photosList = data;
    });
}]);