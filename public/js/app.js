'use strict';

var findFurnitureApp = angular.module('findFurnitureApp', ['ngRoute', 'ui.bootstrap'])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/products.html',
                controller: 'ProductCtrl'
            })
            .when('/products', {
                templateUrl: 'partials/products.html',
                controller: 'ProductCtrl'
            })
            .when('/shops', {
                templateUrl: 'partials/shops.html'
            })
            .when('/add-product', {
                templateUrl: 'partials/addProduct.html'
            })
            .when('/login', {
                templateUrl: 'partials/login.html'
            })
            .otherwise({
                redirectTo: "/"
            });

        $locationProvider.html5Mode(true);
    });