function ctrl_fol_autorizar_prestamo($scope,conexion_app,conexion,catalogos){catalogos.obtener_abogados($scope);$scope.parseFecha=function(fecha){return moment(fecha).format('DD-MM-YYYY');};
    
    $scope.lanzar_autorizacion=function(Obj_autorizado){
        Avgrund.show("#alerta_autorizar_folios");$("#alerta_autorizar_folios").fadeIn("slow");$scope.objetoFinal=Obj_autorizado;
    };
    
    conexion_app.fol_solitudes_Noatendidas({"usuario":{"idusuario":"c81e728d9d4c2f636f067f89cc14862c","idsesionactual":"1"}},function(data){console.info("OK DATA",data);$scope.folios_Noatendidos=data.solicitudesNoAtendidas;},function(error){console.info("ERROR DATA",error);});
    $scope.lanza_autorizacion_folio=function(objetoSol,objeto_Rec){conexion_app.fol_autorizar_prestamo({"usuario":$scope.usr_global,"solicitudPrestamo":{"idsolicitudprestamo":$scope.objetoFinal.idsolicitudprestamo,"infoliofin":$scope.objetoFinal.infoliofin,"infolioinicio":$scope.objetoFinal.infolioinicio,"usuarioRecibe":objetoSol,"numeroEscritura":$scope.objetoFinal.numeroEscritura}},function(data){console.info("OK DATA",data);if(data.exito){ejecutaAlerta(1,data.estatus);var index=$scope.folios_Noatendidos.indexOf($scope.objetoFinal);if(index>-1){$scope.folios_Noatendidos.splice(index,1);}}else{ejecutaAlerta(2,"Ocurrió un error: "+data.estatus);}},function(error){alert("Algo malo paso al autorizar el folio"+error.status);});};}