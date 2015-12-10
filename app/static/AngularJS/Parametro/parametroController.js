registrationModule.controller("parametroController", function ($scope, $filter, $rootScope, localStorageService, alertFactory, parametroRepository) {

    //Propiedades
    $scope.oneAtATime = true;
    

    //Grupo de funciones de inicio
    $scope.init = function () {
        
    	$scope.nombre = "Genaro/Mario";
    };

    //Mensajes en caso de error
    var errorCallBack = function (data, status, headers, config) {
        alertFactory.error('Ocurrio un problema: ' + data);
    };



});