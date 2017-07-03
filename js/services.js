app.factory('servicios', function($http) {
  return {
	obtenerAlumnos: function() {
	      var oPromise = $http.get('js/listaAlumnosJSON.json').then(function (response) {
	        return response.data.alumnos;
	      });
	      return oPromise;
	 },
	obtenerMaestros: function() {
	      var oPromise = $http.get('js/listaMaestrosJSON.json').then(function (response) {
	        return response.data.maestros;
	      });
	      return oPromise;
	 }
	
  }; // fin return	
}) 




