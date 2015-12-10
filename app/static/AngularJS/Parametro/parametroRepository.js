var parametroUrl = global_settings.urlCORS + '/api/escalamientoapi/';

registrationModule.factory('parametroRepository', function ($http) {
    return {
        get: function (id) {
            return $http.get(parametroUrl + '1|' + id);
        },
        update: function (id) {
            return $http.post(parametroUrl + '2|' + id);
        }
    };
});