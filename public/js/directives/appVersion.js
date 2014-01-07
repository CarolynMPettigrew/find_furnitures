'use strict';

findFurnitureApp.directive('appVersion', function() {
    return {
        restrict: 'E',
        template: '{{appName}} app: v<span>{{version}}</span>'
    }
});
