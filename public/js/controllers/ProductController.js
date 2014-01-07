"use strict";

findFurnitureApp.controller('ProductController',
    function ProductController($scope, productData, categoryData, roomData) {

        var init = function() {
            $scope.products = [];
            $scope.categories = [];
            $scope.rooms = [];
        };

        init();

        productData.getProducts().then(function(data) {
            $scope.products = data;
        });

        categoryData.getCategories().then(function(data) {
            $scope.categories = data;
        });

        roomData.getRooms().then(function(data) {
            $scope.rooms = data;
        });
});
