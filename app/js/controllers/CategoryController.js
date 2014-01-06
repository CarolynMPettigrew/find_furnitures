"use strict";

findFurnitureApp.controller('CategoryController', function CategoryController($scope, categoryData) {
    $scope.categories = categoryData.categories;
});
