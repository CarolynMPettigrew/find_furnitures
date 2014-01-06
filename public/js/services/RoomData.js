"use strict";

findFurnitureApp.factory('roomData', function($http, $log) {
    return {
        getRooms: function(successcb) {
            $http({method: 'GET', url: '/api/rooms'}).
                success(function(data){ //, status, headers, config) {
                    successcb(data);
                }).
                error(function(data, status, headers, config) {
                    $log.warn(data, status, headers, config);
                });
        }
    };
});
