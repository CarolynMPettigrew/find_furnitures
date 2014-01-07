"use strict";

findFurnitureApp.controller('ProductCtrl', function ProductCtrl($scope, productData) {

        $scope.products = [];

        productData.getProducts().then(function(data) {
            $scope.products = data;
        });
});
