function ctrl_plantillas_agregar($scope,$rootScope,catalogos,$filter,$timeout,conexion){catalogos.get_suboperaciones($scope,function(){$timeout(function(){$(".chosen-select").chosen()},100)});catalogos.get_locacion($scope);$scope.guardar_plantilla=function(publicar){$scope.plantilla.txplantilla=CKEDITOR.instances['plan_ck'].getData();$scope.plantilla.ispublicado=publicar;$scope.plantilla.listaPlantillaDocumentoNotarialSubOperacion=[];_.each($scope.suboperaciones_data,function(item){var tmpDato={};tmpDato.suboperacion=item;$scope.plantilla.listaPlantillaDocumentoNotarialSubOperacion.push(tmpDato);})
conexion.plantilla_guardar({"usuario":$scope.usr_global,"plantilla":$scope.plantilla},function(data){if(data.exito){ejecutaAlerta(1,"Se guardo correctamente la plantilla");force_redirect('index_adm.html#/plantillas_explorador');}else{ejecutaAlerta(2,"Ocurrio un error:: "+data.estatus);}},function(error){alert("Algo malo paso al guardar la plantilla: "+error.status);});}}