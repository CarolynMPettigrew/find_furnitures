"use strict";

findFurnitureApp.controller('PanelController', function PanelController($scope) {
    $scope.isCategoriesCollapsed = true;
    $scope.toggleCategories = function() {
        $scope.isCategoriesCollapsed = !$scope.isCategoriesCollapsed;
    };

    $scope.isRoomsCollapsed = false;
    $scope.toggleRooms = function() {
        $scope.isRoomsCollapsed = !$scope.isRoomsCollapsed;
    };
});
