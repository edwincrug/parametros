registrationModule.controller("parametroController", function ($scope, $filter, $rootScope, localStorageService, alertFactory, parametroRepository) {

    //Propiedades
    $scope.productoId = 1;
    $scope.usuarioId = 1;
    $scope.empresaId = 1;
    $scope.sucursalId = 3;
    $scope.departamentoId = 13;
    $scope.tipoOrdenId = 1;
    
    //Grupo de funciones de inicio
    $scope.init = function () {
        
    	$scope.nombre = "Genaro/Mario";

        parametroRepository.getEscalamiento($scope.productoId, $scope.usuarioId, $scope.empresaId, $scope.sucursalId, $scope.departamentoId, $scope.tipoOrdenId)
            .success(getEscalamientoSuccessCallback)
            .error(errorCallBack);
    };

    //Mensajes en caso de error
    var errorCallBack = function (data, status, headers, config) {
        alertFactory.error('Ocurrio un problema: ' + data);
    };

    //Succes obtiene lista de objetos de tipo escalamiento
    var getEscalamientoSuccessCallback = function (data, status, headers, config) {
        $scope.listaEscalamiento = data;
        alertFactory.success('Datos de escalamiento cargados.');
    };

    //Botón para mostrar aprobadores
    $scope.MostrarAprobadores = function(esc){
        parametroRepository.getAprobadores(esc.empIdempresa, esc.sucIdsucursal, esc.depIddepartamento, esc.tipoidtipoorden)
            .success(getAprobadoresSuccessCallback)
            .error(errorCallBack);
    };

    //Success obtiene lista de aprobadores por nivel
    var getAprobadoresSuccessCallback = function (data, status, headers, config) {
        $scope.listaAprobadores = data;
        $('#viewAprobadores').modal('show');
        alertFactory.success('Aprobadores cargados.');
    };



});