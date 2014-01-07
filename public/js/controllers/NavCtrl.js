"use strict";

findFurnitureApp.controller('NavCtrl', function NavCtrl($scope, $location) {
    $scope.activeTab = 'home';

    $scope.isActive = function(name) {
        if (name === $scope.activeTab)
            return 'active';

        return '';
    };

    $scope.home = function() {
        $scope.activeTab = 'home';
        $location.url('/');
    };

    $scope.addProduct = function() {
        $scope.activeTab = 'addProduct';
        $location.url('/add-product');
    };

    $scope.shops = function() {
        $scope.activeTab = 'shops';
        $location.url('/shops');
    };

    $scope.login = function() {
        $scope.activeTab = 'login';
        $location.url('/login');
    };
});
