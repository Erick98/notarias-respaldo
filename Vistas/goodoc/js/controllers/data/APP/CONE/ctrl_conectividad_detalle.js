function ctrl_conectividad_detalle($scope,$location,$rootScope,conect_conexiones,catalogos){if(!$rootScope.expedienteRacoo&&$rootScope.expedienteRacoo!=""){$scope.goTo("/conectividad/expedientes");}else{$scope.expediente=$rootScope.expedienteRacoo;delete $rootScope.expedienteRacoo;}
modal.show();conect_conexiones.buscarComparecientesPorExpediente({numExpediente:$scope.expediente},function(data){if(data.exito){$scope.expediente=data.vistaExpediente;conect_conexiones.buscarArchivos({"carpeta":$scope.expediente.rutaExt},function(data){if(data.exito){$scope.expediente.archivos=data.archivosList;}
else{ejecutaAlerta(2,"Ocurrió un error al obtener los archivos:"+data.estatus);}},function(error){alert("Algo malo paso al obtener los archivos:"+error.status);});}else{ejecutaAlerta(2,"Ocurrió un error al obtener el expediente:"+data.estatus);$scope.goTo("/conectividad/expedientes");}},function(error){alert("Algo malo paso al obtener el expediente:"+error.status);$scope.goTo("/conectividad/expedientes");}).$promise.finally(destroyModal);$scope.obtieneArchivo=function(archivo){window.open("http://"+ip+":8080/"+"conectividad-rest/consultaExpedientes/"+$scope.expediente.rutaExt+"/"+archivo);}}