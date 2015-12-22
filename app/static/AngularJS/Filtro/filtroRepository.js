var parametroUrl = global_settings.urlCORS + '/api/filtroapi/';

registrationModule.factory('filtroRepository', function ($http) {
    return {
        getEmpresas: function(idEmpleado){
            return $http.get(parametroUrl + '1|' + idEmpleado);
         },
        getSucursales: function(idEmpleado, idEmpresa){
            return $http.get(parametroUrl + '2|' + idEmpleado + '|' + idEmpresa);
        },
        getDepartamentos: function(idEmpleado, idEmpresa, idSucursal){
            return $http.get(parametroUrl + '3|' + idEmpleado + '|' + idEmpresa + '|' + idSucursal);
        },
        getTipoOrden: function(){
            return $http.get(parametroUrl + '4|');
        },
        getUsuarios: function(){
            return $http.get(parametroUrl + '5|');
        }
    };
});