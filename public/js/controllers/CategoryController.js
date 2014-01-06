"use strict";

findFurnitureApp.controller('CategoryController', function CategoryController($scope, categoryData) {
    categoryData.getCategories(function(categories) {
        $scope.categories = categories;
    });
});
