"use strict";

findFurnitureApp.controller('CarouselCtrl', function CarouselCtrl($scope) {

    $scope.myInterval = 5000;

    $scope.slides = [
        {image: 'img/image_1.jpg'},
        {image: 'img/image_2.jpg'},
        {image: 'img/image_3.jpg'},
        {image: 'img/image_4.jpg'}
    ];
});
