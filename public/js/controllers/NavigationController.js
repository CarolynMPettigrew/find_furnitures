"use strict";

findFurnitureApp.controller('NavigationController', function NavigationController($scope, $location) {
    $scope.home = function() {
        $location.url('/');
    };

    $scope.addProduct = function() {
        $location.url('/add-product');
    };

    $scope.shops = function() {
        $location.url('/shops');
    };

    $scope.login = function() {
        $location.url('/login');
    };
});
