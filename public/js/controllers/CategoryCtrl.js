"use strict";

findFurnitureApp.controller('CategoryCtrl',
    function CategoryCtrl($scope, categoryData) {

        $scope.panelName = 'Categories';
        $scope.panelType = 'category';

        $scope.items = [];

        categoryData.getCategories().then(function(data) {
            $scope.items = data;
        });

        $scope.isCollapsed = true;
        $scope.toggle = function() {
            $scope.isCollapsed = !$scope.isCollapsed;
        };
});
