/**
 * Created by hanshika on 12/18/2016.
 */
/**
 * Created by hanshika on 12/17/2016.
 */
(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeController',HomeController);

    HomeController.$inject=['$rootScope','$scope','$location','$route'];
    function HomeController($rootScope, $scope, $location, $route) {
        var vm = this;
        vm.user = null;
    }
})();
