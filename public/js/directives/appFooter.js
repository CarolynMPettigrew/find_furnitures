'use strict';

findFurnitureApp.directive('appFooter', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'partials/directives/footer.html'
    }
});
