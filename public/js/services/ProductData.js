"use strict";

findFurnitureApp.factory('productData', function($http, $log) {
    return {
        getProducts: function(successcb) {
            $http({method: 'GET', url: '/api/products'}).
                success(function(data) { //, status, headers, config) {
                    successcb(data);
                }).
                error(function(data, status, headers, config) {
                    $log.warn(data, status, headers, config);
                });
        }
    };
});