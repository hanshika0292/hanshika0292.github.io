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

        mixpanel.track("Website Visited");

        $scope.countAndroidVisit = function(){
            mixpanel.track("Android Application Visited");
        };

        $scope.countWebAppVisit = function(){
            mixpanel.track("Web Application Visited");
        };

        $scope.countPortfolioVisit = function(){
            mixpanel.track("Portfolio Visited");
        };

        $scope.countSamplesVisit = function(){
            mixpanel.track("Samples Hosted Visited");
        };

        $scope.countResumeVisit = function(){
            mixpanel.track("Resume Visited");
        };

        $scope.countGithubVisit = function(){
            mixpanel.track("Github Visited");
        };

        $scope.countStackOverflowVisit = function(){
            mixpanel.track("StackOverflow Visited");
        };

        $scope.countCodepenVisit = function(){
            mixpanel.track("CodePen Visited");
        };

        $scope.countLinkedInVisit = function(){
            mixpanel.track("LinkedIn Visited");
        };

        $scope.countAndroidAppVisit = function(){
            mixpanel.track("Android TBS APP Visited");
        };

        $scope.countTBSWebVisit = function(){
            mixpanel.track("TBS WEBAPP Visited");
        };

        $scope.countFanhootWebVisit = function(){
            mixpanel.track("Fanhoots WEBAPP Visited");
        };
    }
})();
