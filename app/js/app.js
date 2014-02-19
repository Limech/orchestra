'use strict';

var herrmannApp = angular.module('herrmannApp', ['ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true).hashPrefix('!');
        $routeProvider
            .when('/',
            {
                templateUrl: 'templates/home.html'
            })

            .when('/app/home',
            {
                templateUrl: 'templates/home.html'
            })

            .when('/app/contact',
            {
                templateUrl: 'templates/contact.html'
            })

            .when('/app/about',
            {
                templateUrl: 'templates/about.html'
            })

            .when('/app/news',
            {
                templateUrl: 'templates/news.html'
            })

            .when('/app/ad-assets',
            {
                templateUrl: 'templates/ad-assets.html'
            })

            .otherwise({ redirectTo: '/app/home' });
    });
