"use strict";

findFurnitureApp.controller('CategoryController', function CategoryController($scope, categoryData) {
    $scope.categories = [];

    var promise = categoryData.getCategories();
    promise.then(function(data) {
        $scope.categories = data;
    });
});
