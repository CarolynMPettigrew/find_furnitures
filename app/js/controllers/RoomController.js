"use strict";

findFurnitureApp.controller('RoomController', function RoomController($scope, roomData) {
    $scope.rooms = roomData.rooms;
});
