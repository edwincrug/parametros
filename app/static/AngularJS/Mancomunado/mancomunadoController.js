registrationModule.controller("mancomunadoController", function ($scope, $filter, $rootScope, localStorageService, alertFactory, parametroRepository) {

    //Propiedades
    $scope.productoId = 1;
    $scope.usuarioId = 1;
    $scope.empresaId = 1;
    $scope.sucursalId = 3;
    $scope.departamentoId = 13;
    $scope.tipoOrdenId = 1;
    $scope.nodoId = 1;
    
    //Grupo de funciones de inicio
    $scope.init = function () {
        mancomunadoRepository.getMancomunados($scope.productoId, $scope.nodoId, $scope.empresaId, $scope.sucursalId, $scope.departamentoId, $scope.tipoOrdenId)
        .success(getMancoumunadoSuccessCallback)
            .error(errorCallBack);

    //Mensajes en caso de error
    var errorCallBack = function (data, status, headers, config) {
        alertFactory.error('Ocurrio un problema: ' + data);
    };

     //Succes obtiene lista de objetos de tipo escalamiento
    var getMancoumunadoSuccessCallback = function (data, status, headers, config) {
        $scope.listaMancomunados = data;
        alertFactory.success('Datos de usuarios mancomunados cargados.');
    };
});