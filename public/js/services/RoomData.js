"use strict";

findFurnitureApp.factory('roomData', function($http, $q) {
    return {
        getRooms: function() {
            var deferred = $q.defer();

            $http({method: 'GET', url: '/data/rooms'}).
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
