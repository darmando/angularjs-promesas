
var app = angular.module('appPrincipal', []);
app.controller('controllerPrincipal',
  ['$scope','servicios','$q',
  function($scope,servicios,$q){
  	var vm = this;
    onInit();

    function onInit(){
        var defered = $q.defer();
        var promise = defered.promise;
        var promesas = [
          obtenerListaMaestros(),
          obtenerAlumnos()
        ];
        $q.all(promesas).then(function (promesasRes) {  
          var oArrayResponse = promesasRes;
          if ((oArrayResponse[0].length > 0) && (oArrayResponse[1].length > 0)) {
             vm.listaMaestros = oArrayResponse[0];
             vm.listaAlumnos = oArrayResponse[1];
          }

        });
    }

    function obtenerListaMaestros(){
       var defered = $q.defer();
       var promise = defered.promise;
       servicios.obtenerMaestros().then(function(response) {
         defered.resolve(response);
       }).catch(function(data){
          defered.resolve([]);
       })
      return promise;
    }

    function obtenerAlumnos(){
       var defered = $q.defer();
       var promise = defered.promise;
       servicios.obtenerAlumnos().then(function(response) {
         defered.resolve(response);
       }).catch(function(data){
          defered.resolve([]);
       })
      return promise;
    }
 
}]);
