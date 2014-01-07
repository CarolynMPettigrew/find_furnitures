'use strict';

findFurnitureApp.directive('productPanel', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'partials/directives/productPanel.html'
    }
});

