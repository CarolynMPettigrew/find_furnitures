"use strict";

findFurnitureApp.factory('productData', function($http, $q) {
    return {
        getProducts: function() {
            var deferred = $q.defer();

            $http({method: 'GET', url: '/data/products'}).
                success(function(data) {
                    deferred.resolve(data);
                }).
                error(function(data, status) {
                    deferred.reject(status);
                });

            return deferred.promise;
        }
    };
});