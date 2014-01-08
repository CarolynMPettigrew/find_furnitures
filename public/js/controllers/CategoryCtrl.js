"use strict";

findFurnitureApp.controller('CategoryCtrl',
    function CategoryCtrl($scope, $location, $anchorScroll, categoryData) {

        $scope.panelName = 'Categories';
        $scope.items = [];

        categoryData.getCategories().then(function(data) {
            $scope.items = data;
        });

        $scope.isCollapsed = true;
        $scope.toggle = function() {
            $scope.isCollapsed = !$scope.isCollapsed;
        };

        $scope.applyFilter = function(item) {
            $location.path('products').search('category=' + item.name);
        };
});
