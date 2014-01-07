'use strict';

findFurnitureApp.directive('jumbotron', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'partials/directives/jumbotron.html'
    }
});
