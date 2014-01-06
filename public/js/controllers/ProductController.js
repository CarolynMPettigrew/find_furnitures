"use strict";

findFurnitureApp.controller('ProductController', function ProductController($scope, productData) {
    productData.getProducts(function(products) {
        $scope.products = products;
    });
});
