var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/cat', {
            templateUrl: '/views/templates/cat.html',
            controller: 'CatController',
            controllerAs: 'cc'
        })
        .when('/dog', {
            templateUrl: '/views/templates/dog.html',
            controller: 'DogController',
            controllerAs: 'dc'
        })
        .when('/pig', {
            templateUrl: '/views/templates/pig.html',
            controller: 'PigController',
            controllerAs: 'pc'
        })
        .when('/reptile', {
            templateUrl: '/views/templates/reptile.html',
            controller: 'ReptileController',
            controllerAs: 'rc'
        })
        .otherwise({
            redirectTo: 'cat'
        });
}]);
