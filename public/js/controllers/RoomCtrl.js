"use strict";

findFurnitureApp.controller('RoomCtrl',
    function RoomCtrl($scope, roomData) {

        $scope.panelName = 'Rooms';
        $scope.panelType = 'room';

        $scope.items = [];

        roomData.getRooms().then(function(data) {
            $scope.items = data;
        });

        $scope.isCollapsed = false;
        $scope.toggle = function() {
            $scope.isCollapsed = !$scope.isCollapsed;
        };
    });
