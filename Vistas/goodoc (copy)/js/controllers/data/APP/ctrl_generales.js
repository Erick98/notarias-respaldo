// COMMENT COMMIT DATA


function ctrl_generales($scope,$rootScope,$timeout,conexion_app,catalogos){$timeout(function(){$("#fecha_creacion").text(moment().format("DD-MM-YYYY"))},500)
$scope.operaciones=catalogos.get_operaciones($scope);var idtramite=$rootScope.idtramite;$scope.expediente={};conexion_app.obtener_tramite_x_id({"usuario":$scope.usr_global,"tramite":{"idtramite":idtramite}},function(data){$scope.tramite=data.tramite;$scope.abogado=data.tramite.abogado;},function(error){alert("ocurrio un error al obtener el tramite: "+error.status);});$scope.expediente_guardar=function(){modal.show();$scope.expediente.abogado=$scope.abogado;$scope.expediente.tramite=$scope.tramite;conexion_app.expediente_crear({"usuario":$scope.usr_global,"expediente":$scope.expediente},function(data){if(data.exito){ejecutaAlerta(1,"Se registró correctamente el expediente");$timeout(function(){$scope.asignaTramite(data.expediente);},1000);}else{}},function(error){alert("ocurrio un error al guardar el expediente: "+error.status);}).$promise.finally(destroyModal);}}