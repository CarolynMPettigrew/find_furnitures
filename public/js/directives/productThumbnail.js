'use strict';

findFurnitureApp.directive('productThumbnail', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'partials/directives/productThumbnail.html'
    }
});
