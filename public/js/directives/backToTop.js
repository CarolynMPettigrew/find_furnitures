'use strict';

findFurnitureApp.directive('backToTop', function() {
    return {
        restrict: 'E',
        replace: true,
        template: '<a href="#" target="_self">Back to top</a>'
    }
});
