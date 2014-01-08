'use strict';

findFurnitureApp.directive('jumbotron', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'partials/directives/jumbotron.html',
        controller: function($scope) {
            $scope.headerTitle = 'Furniture you are looking for';
            $scope.headerText = 'On our page you could find any furniture you need. ' +
                'Here we group many offers from the polish market.';
        }
    }
});
