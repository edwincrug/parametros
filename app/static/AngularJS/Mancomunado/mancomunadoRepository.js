var mancomunadoUrl = global_settings.urlCORS + '/api/mancomunadoapi/';

registrationModule.factory('mancomunadoRepository', function ($http) {
    return {
        getMancomunados: function(proc, nodo, empresa, sucursal, departamento, tipo){
            return $http.get(mancomunadoUrl + '1|' + proc + '|' + nodo +'|' + empresa + '|' + sucursal + '|' + departamento + '|' + tipo);
         },
        insertMancomunados: function(proc, nodo, empresa, sucursal, departamento, tipo, mancomunado){
            return $http.post(mancomunadoUrl + '1|' + proc + '|' + nodo + '|' + empresa + '|' + sucursal + '|' + departamento + '|' + tipo + '|' + mancomunado);
        },
        updateMancomunado: function(proc, nodo, empresa, sucursal, departamento, tipo, mancomunado){
            return $http.post(mancomunadoUrl + '2|' + proc + '|' + nodo + '|' + empresa + '|' + sucursal + '|' + departamento + '|' + tipo + '|' + mancomunado);
        },
        deleteMancomunado: function(proc, nodo, empresa, sucursal, departamento, tipo, mancomunado){
            return $http.post(mancomunadoUrl + '3|' + proc + '|' + nodo + '|' + empresa + '|' + sucursal + '|' + departamento + '|' + tipo + '|' + mancomunado);
        }
    };
});