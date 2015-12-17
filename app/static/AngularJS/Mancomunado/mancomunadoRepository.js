var parametroUrl = global_settings.urlCORS + '/api/mancomunadoapi/';

registrationModule.factory('mancomunadoRepository', function ($http) {
    return {
        getMancomunados: function(proc, nodo, empresa, sucursal, departamento, tipo){
            return $http.get(parametroUrl + '1|' + proc + '|' + nodo +'|' + empresa + '|' + sucursal + '|' + departamento + '|' + tipo);
        }  
    };
});