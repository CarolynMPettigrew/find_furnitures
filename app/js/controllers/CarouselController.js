"use strict";

findFurnitureApp.controller('CarouselController', function CarouselController($scope) {
    $scope.images = [
        {id: '0', src: 'img/image_1.jpg', status: 'active'},
        {id: '1', src: 'img/image_2.jpg', status: ''},
        {id: '2', src: 'img/image_3.jpg', status: ''},
        {id: '3', src: 'img/image_4.jpg', status: ''}
    ];
});
