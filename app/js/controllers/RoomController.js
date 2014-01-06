"use strict";

findFurnitureApp.controller('RoomController', function RoomController($scope) {
    $scope.rooms = [
        {action: '#', name: 'Anteroom'},
		{action: '#', name: 'Bathroom'},
		{action: '#', name: 'Bedroom'},
		{action: '#', name: 'Dining room'},
		{action: '#', name: 'Garden Furniture'},
		{action: '#', name: 'Kids & Teenagers'},
		{action: '#', name: 'Kitchen'},
		{action: '#', name: 'Livingroom'},
		{action: '#', name: 'Office'}
    ];
});
