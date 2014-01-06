"use strict";

findFurnitureApp.controller('ProductController', function ProductController($scope, productData) {
    $scope.products = [];

    var promise = productData.getProducts();

    promise.then(function(data) {
        $scope.products = data;
    });
});
