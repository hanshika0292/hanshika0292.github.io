/**
 * Created by hanshika on 12/17/2016.
 */
(function(){
    'use strict';

    angular
        .module('app' , ['ngRoute'])
        .config(config)
        .run(run);

    config.$inject = ['$routeProvider','$locationProvider'];
    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/home',{
                controller: 'HomeController',
                templateUrl: 'template/home.view.html',
                controllerAs: 'vm'
            })
            .when('/not-available',{
                controller: 'HomeController',
                templateUrl: 'template/willbeback.view.html',
                controllerAs: 'vm'
            })
            .when('/portfolio',{
                controller: 'HomeController',
                templateUrl: 'template/portfolio.view.html',
                controllerAs: 'vm'
            })
            .when('/webapp',{
                controller: 'HomeController',
                templateUrl: 'template/webapp.view.html',
                controllerAs: 'vm'
            })
            .when('/android',{
                controller: 'HomeController',
                templateUrl: 'template/android.view.html',
                controllerAs: 'vm'
            })
            .otherwise({ redirectTo: '/home'});
    }
    run.$inject = ['$rootScope','$location','$http'];
    function run($rootScope, $location, $http) {
        $rootScope.$on('$locationChangeStart', function (event, next, current) {

        });
    }
})();