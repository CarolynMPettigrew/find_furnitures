"use strict";

findFurnitureApp.controller('RoomController', function RoomController($scope, roomData) {
    $scope.rooms = [];

    var promise = roomData.getRooms();

    promise.then(function(data) {
        $scope.rooms = data;
    });
});
