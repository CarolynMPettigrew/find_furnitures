findFurnitureApp.factory('categoryData', function($http, $q) {
    return {
        getCategories: function() {
            var deferred = $q.defer();

            $http({method: 'GET', url: '/data/categories'}).
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
