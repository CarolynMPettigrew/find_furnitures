"use strict";

findFurnitureApp.controller('RoomController', function RoomController($scope, roomData) {
    roomData.getRooms(function(rooms) {
        $scope.rooms = rooms;
    });
});
