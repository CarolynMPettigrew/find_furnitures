'use strict';

var findFurnitureApp = angular.module('findFurnitureApp', ['ngRoute'])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/products', {
                templateUrl: 'partials/products.html',
                controller: 'ProductController'
            })
            .when('/shops', {
                templateUrl: 'partials/shops.html'
            })
            .when('/addProduct', {
                templateUrl: 'partials/addProduct.html'
            })
            .when('/login', {
                templateUrl: 'partials/login.html'
            })
            .otherwise({
                redirectTo: "/products"
            });

        // configure html5 to get links working on jsfiddle
        $locationProvider.html5Mode(true);
    });
