var parametroUrl = global_settings.urlCORS + '/api/escalamientoapi/';

registrationModule.factory('parametroRepository', function ($http) {
    return {
        getEscalamiento: function (producto, usuario, empresa, sucursal, departamento, tipo) {
            return $http.get(parametroUrl + '1|' + producto + '|' + usuario + '|' + empresa + '|' + sucursal + '|' + departamento + '|' + tipo);
        },
        getAprobadores: function (empresa, sucursal, departamento, tipo) {
            
            return $http.get(parametroUrl + '3|' + empresa + '|' + sucursal + '|' + departamento + '|' + tipo);
        },
        update: function (id) {
            return $http.post(parametroUrl + '2|' + id);
        },
        insertEscalamiento: function(proc, nodo, empresa, sucursal, departamento, tipo, nivel_Escalamiento, usuarioAutoriza1, usuarioAutoriza2, usuarioAutoriza3, minutos){
            return $http.post(parametroUrl + '1|' + proc + '|' + nodo + '|' + empresa + '|' + sucursal + '|' + departamento + '|' + tipo + '|' + nivel_Escalamiento + '|' + usuarioAutoriza1 + '|' + usuarioAutoriza2 + '|' + usuarioAutoriza3 + '|' + minutos);
        },
        updateEscalamiento: function(Array1){
            return $http.post(parametroUrl + '2|' + Array1);
        },
        deleteEscalamiento: function(proc, nodo, empresa, sucursal, departamento, tipo, mancomunado){
            return $http.post(parametroUrl + '3|' + proc + '|' + nodo + '|' + empresa + '|' + sucursal + '|' + departamento + '|' + tipo + '|' + mancomunado);
        }
       
        
    };
});

