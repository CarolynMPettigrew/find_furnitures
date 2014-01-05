"use strict";

findFurnitureApp.controller('ProductController', function ProductController($scope) {
    $scope.products = [
        {id: 1, img: 'sample_data/chair_1.jpg', description: 'Black chair', price: 200.00},
        {id: 2, img: 'sample_data/chair_2.jpg', description: 'Chair MU5', price: 200.00},
        {id: 3, img: 'sample_data/chair_3.jpg', description: 'Oblique Chair', price: 300.00},
        {id: 4, img: 'sample_data/chair_4.jpg', description: 'Oblique Chair', price: 200.00}
    ];
});


