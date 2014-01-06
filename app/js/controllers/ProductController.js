"use strict";

findFurnitureApp.controller('ProductController', function ProductController($scope, productData) {
    $scope.products = productData.products;
});
