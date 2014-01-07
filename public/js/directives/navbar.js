'use strict';

findFurnitureApp.directive('navbar', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'partials/directives/navbar.html'
    }
});
