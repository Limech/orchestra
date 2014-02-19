'use strict';

var herrmannApp = angular.module('herrmannApp', ['ngRoute'])
    .config(function($routeProvider, $locationProvider)
    {    
        //$locationProvider.html5Mode(true);
        $routeProvider
            .when('/',
            {
                templateUrl : 'templates/home.html'
            })
            
            .when('/home',
            {
                templateUrl : 'templates/home.html'
            })
            
            .when('/contact',
            {
                templateUrl : 'templates/contact.html'
            })  
               
            .when('/about',
            {
                templateUrl : 'templates/about.html'
            })
                                    
            .when('/news',
            {
                templateUrl : 'templates/news.html'
            })
            
            .when('/ad-assets',
            {
                templateUrl : 'templates/ad-assets.html'
            })
 
            .otherwise({redirectTo: '/home'});
    });
