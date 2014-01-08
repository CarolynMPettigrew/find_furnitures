'use strict';

findFurnitureApp.directive('productFilter', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'partials/directives/productFilter.html'
    }
});

