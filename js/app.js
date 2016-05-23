var app = angular.module('GalleryApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){

    $routeProvider
    .when('/',{
        controller: 'HomeController',
        templateUrl: 'views/home.html'
    })
    .when('/photos/:id', {
        controller: 'PhotoController',
        templateUrl: 'views/photo.html'
    })
    .otherwise({
        redirectTo: '/'
    });

   // use the HTML5 History API
   $locationProvider.html5Mode(true);
});