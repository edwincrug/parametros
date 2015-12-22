registrationModule.controller("parametroController", function ($scope, $filter, $rootScope, localStorageService, alertFactory, parametroRepository,mancomunadoRepository, filtroRepository) {

    //Propiedades
    $scope.productoId = 1;
    $scope.usuarioId = 1;
    $scope.empresaId = 1;
    $scope.sucursalId = 3;
    $scope.departamentoId = 13;
    $scope.tipoOrdenId = 1;
    $scope.nodoId = 1;
    $scope.divisionId = 1;
    $scope.sucursalesId = 1;
    $scope.usuarioMancomunadoId = 5;

    
    //Grupo de funciones de inicio
    $scope.init = function () {
        getData();
    };

    //Recarga Pantalla Principal
    var getData = function(){

        parametroRepository.getEscalamiento($scope.productoId, $scope.usuarioId, $scope.empresaId, $scope.sucursalId, $scope.departamentoId, $scope.tipoOrdenId)
            .success(getEscalamientoSuccessCallback)
            .error(errorCallBack);
                                                      
        mancomunadoRepository.getMancomunados($scope.productoId, $scope.nodoId, $scope.empresaId, $scope.sucursalId, $scope.departamentoId, $scope.tipoOrdenId)
            .success(getMancoumunadoSuccessCallback)
            .error(errorCallBack);
    }
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
        $scope.listaAprobadores = data;depIdDepartamento, manc.tipoIdTipoOrden
        $('#viewAprobadores').modal('show');
        alertFactory.success('Aprobadores cargados.');
    };

     //Succes obtiene lista de objetos de usuarios Mancomunados
    var getMancoumunadoSuccessCallback = function (data, status, headers, config) {
        $rootScope.listaMancomunados = data;
        alertFactory.success('Datos de usuarios mancomunados cargados.');
    };

    //Botón para dar de alta Nuevo Mancomunado
    $scope.MostrarNuevoMancomunado = function(){
        filtroRepository.getEmpresas($scope.empresaId)
             .success(getEmpresasSuccessCallback)
             .error(errorCallBack);
        filtroRepository.getSucursales($scope.usuarioId, $scope.empresaId)
            .success(getSucursalesSuccessCallback)
            .error(errorCallBack);
        filtroRepository.getDepartamentos($scope.usuarioId, $scope.empresaId, $scope.sucursalesId)
            .success(getDepartamentosSuccessCallback)
            .error(errorCallBack);
        filtroRepository.getTipoOrden()
            .success(getTipoOrdenSuccessCallback)
            .error(errorCallBack);
        $('#viewNewMancomunado').modal('show');
    };

    //Asigna el objeto Tipo Proceso
    $scope.SetTipoProceso = function(tip) {
        $scope.currentTipoProceso = tip;

        filtroRepository.getEmpresas($scope.empresaId) //ID de tipo proceso   <<<<-------
             .success(getEmpresasSuccessCallback)
             .error(errorCallBack);
    };

    //Asigna el objeto Tipo Orden
    $scope.SetTipoOrden = function(orden) {
        $scope.currentTipoOrden = orden;
    };

    //Asigna el objeto Empresa
    $scope.SetEmpresa = function(tip) {
        $scope.currentEmpresa = tip;
    };

    //Asigna el objeto Sucursal
    $scope.SetSucursal= function(tip) {
        $scope.currentSucursal = tip;
    };

    //Asigna el objeto Departamento
    $scope.SetDepto= function(tip) {
        $scope.currentDepto = tip;
    };

//Botón para dar de alta Nuevo Mancomunado  ///Falta colocar los parametros que vienen del front.
    $scope.UpdateMancomunado = function(){
        filtroRepository.getEmpresas($scope.empresaId)
             .success(getEmpresasSuccessCallback)
             .error(errorCallBack);
        filtroRepository.getSucursales($scope.usuarioId, $scope.empresaId)
            .success(getSucursalesSuccessCallback)
            .error(errorCallBack);
        filtroRepository.getDepartamentos($scope.usuarioId, $scope.empresaId, $scope.sucursalesId)
            .success(getDepartamentosSuccessCallback)
            .error(errorCallBack);
        filtroRepository.getTipoOrden()
            .success(getTipoOrdenSuccessCallback)
            .error(errorCallBack);
        $('#viewUpdMancomunado').modal('show');
    };

    //Asigna el objeto Tipo Proceso
    $scope.UpdSetTipoProceso = function(tip) {
        $scope.currentTipoProceso = tip;

        filtroRepository.getEmpresas($scope.empresaId) //ID de tipo proceso   <<<<-------
             .success(getEmpresasSuccessCallback)
             .error(errorCallBack);
    };

    //Asigna el objeto Tipo Orden
    $scope.UpdSetTipoOrden = function(orden) {
        $scope.currentTipoOrden = orden;
    };

    //Asigna el objeto Empresa
    $scope.UpdSetEmpresa = function(tip) {
        $scope.currentEmpresa = tip;
    };

    //Asigna el objeto Sucursal
    $scope.UpdSetSucursal= function(tip) {
        $scope.currentSucursal = tip;
    };

    //Asigna el objeto Departamento
    $scope.UpdSetDepto= function(tip) {
        $scope.currentDepto = tip;
    };

    //Success obtiene lista de usuarios
    var getUsuariosSuccessCallback = function (data, status, headers, config) {
        $scope.listaUsuarios = data;
        $('#viewAprobadores').modal('show');
        alertFactory.success('Usuarios cargados.');
    };

    //Success obtiene lista de empresas
    var getEmpresasSuccessCallback = function(data, status, headers, config){
        $scope.listaEmpresas = data;
        alertFactory.success('Datos de Empresas cargados.');
    };

    //Success obtiene lista de departamentos
    var getDepartamentosSuccessCallback = function(data, status, headers, config){
        $scope.listaDeptos = data;
        alertFactory.success('Datos de Departamentos cargados.');
    };

    //Success obtiene lista de sucursales
    var getSucursalesSuccessCallback = function(data, status, headers, config){
        $scope.listaSucursales = data;
        alertFactory.success('Datos de Sucursales cargados.');
    };

    //Success obtiene lista de Tipo Orden
    var getTipoOrdenSuccessCallback = function(data, status, headers, config){
        $scope.listaTipoOrden = data;
        alertFactory.success('Datos de Tipo Orden cargados.');   
    };

    //Mostrar lista Usuarios
    $scope.listaUsuarios =  function(){
        filtroRepository.getUsuarios()
            .success(getUsuariosMancomunadosSuccessCallback)
            .error(errorCallBack);
    };

    //Success obtiene lista de Usuarios
    var getUsuariosMancomunadosSuccessCallback = function(data, status, headers, config){
        $scope.usuarios = data;
        alertFactory.success('Datos de los Usuarios cargados');
    };

    //Asigna el usuario seleccionado
    $scope.SetUsuario= function(user) {
        $scope.currentUsuario = user;
    };

    //Botón para Actualizar Usuario Mancomunado
    $scope.UpdMancomunado = function(){
        mancomunadoRepository.updateMancomunado($scope.productoId, $scope.nodoId, $scope.empresaId, $scope.sucursalId, $scope.departamentoId, $scope.tipoOrdenId, $scope.usuarioMancomunadoId)
            .success(getUpdMancomunadoSuccessCallback)
            .error(errorCallBack);
    };

    //Success Update Mancomunado
    var getUpdMancomunadoSuccessCallback = function(data, status, headers, config){
        getData();
        alertFactory.success('Datos de los Usuarios cargados');
    };

    //Botón Delete Usuario Mancomunado
    $scope.DelMancomunado = function(user){
        mancomunadoRepository.deleteMancomunado($scope.productoId, $scope.nodoId, $scope.empresaId, $scope.sucursalId, $scope.departamentoId, $scope.tipoOrdenId, $scope.usuarioMancomunadoId)
            .success(getDelMancomunadoSuccessCallback)
            .error(errorCallBack);
    };

    //Success Update Mancomunado
    var getDelMancomunadoSuccessCallback = function(data, status, headers, config){
        getData();
        alertFactory.success('Datos de los Usuarios cargados');
    };
}); 