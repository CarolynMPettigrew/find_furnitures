"use strict";

findFurnitureApp.controller('RoomCtrl',
    function RoomCtrl($scope, $location, $anchorScroll, roomData) {

        $scope.panelName = 'Rooms';
        $scope.items = [];

        roomData.getRooms().then(function(data) {
            $scope.items = data;
        });

        $scope.isCollapsed = false;
        $scope.toggle = function() {
            $scope.isCollapsed = !$scope.isCollapsed;
        };

        $scope.applyFilter = function(item) {
            $location.path('products').search('room=' + item.name);
        };
    });
