"use strict";

findFurnitureApp.factory('categoryData', function($http, $log) {
    return {
        getCategories: function(successcb) {
            $http({method: 'GET', url: '/api/categories'}).
                success(function(data) { //, status, headers, config) {
                    successcb(data);
                }).
                error(function(data, status, headers, config) {
                    $log.warn(data, status, headers, config);
                });
        }
    };
});
