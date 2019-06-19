function ctrl_plantillas($scope, $rootScope, catalogos, funcionesutiles, $filter, $timeout, conexion) {
    $scope.plantilla = {};
    $scope.suboperaciones_data = [];
    $scope.obtiene_plantillas = function() {
        conexion.plantillas_listar({
            "usuario": $rootScope.usr_global
        }, function(data) {
            if (data.exito) {
                $scope.noPublicadas = data.noPublicadosList;
                $scope.publicadas = data.publicadosList;
            } else {
                ejecutaAlerta(2, 'Ocurrió un error: ' + data.estatus);
            }
        }, function(error) {
            ejecutaAlerta(2, 'Ocurrió un error al listar las plantillas: ' + error.status);
        });
    }
    $scope.parseUnixToDate = function(fecha) {
        return funcionesutiles.fecalUnixtoDate(fecha);
    }
    $scope.vaciar_datos_en_ckeditor = function() {
        $timeout(function() {
            CKEDITOR.instances["plan_ck"].insertHtml($scope.plantRecuperada.txplantilla);
        }, 1000);
    }
    $scope.actualiza_subops = function() {
        _.each($scope.plantRecuperada.listaPlantillaDocumentoNotarialSubOperacion, function(item) {
            $.each($("#select_subop_act_plantilla option"), function() {
                var texto = $(this).text()
                if (texto == item.suboperacion.dsnombre) {
                    $(this).prop("selected", true);
                }
            });
            _.each($scope.suboperaciones, function(dato) {
                if (dato.dsnombre == item.suboperacion.dsnombre) {
                    $scope.suboperaciones_data.push(dato);
                }
            })
        })
        $(".chosen-select").chosen()
    }
    $scope.obtener_plantilla_por_id = function() {
        conexion.plantillas_get_x_id({
            "usuario": $rootScope.usr_global,
            "plantilla": JSON.parse($rootScope.edit_plantilla)
        }, function(data) {
            $scope.plantRecuperada = data.plantilla;
        }, function(error) {});
    }
    $scope.permiteEditar = false;
    if ($rootScope.edit_plantilla && $rootScope.edit_plantilla != null) {
        $scope.permiteEditar = true;
        $scope.plantRecuperada = JSON.parse($rootScope.edit_plantilla);
        delete $rootScope.edit_plantilla;
        creaCK('#tb_plantilla');
        if ($rootScope.onlyread) {
            $scope.onlyread = true;
            delete $rootScope.onlyread;
        }
        catalogos.get_suboperaciones($scope, function() {
            $timeout(function() {
                $scope.actualiza_subops();
            }, 500)
        });
        $scope.vaciar_datos_en_ckeditor();
        $('.tab-container').easytabs('select', 'tb_plantilla');
    }
    $scope.obtiene_plantillas();
    $scope.actualiza_plantilla = function(publicado) {
        $scope.plantRecuperada.txplantilla = CKEDITOR.instances['plan_ck'].getData();
        $scope.plantRecuperada.ispublicado = publicado;
        $scope.plantRecuperada.listaPlantillaDocumentoNotarialSubOperacion = [];
        _.each($scope.suboperaciones_data, function(item) {
            var tmpDato = {};
            tmpDato.suboperacion = item;
            $scope.plantRecuperada.listaPlantillaDocumentoNotarialSubOperacion.push(tmpDato);
        })
        conexion.plantilla_actualizar({
            "usuario": $scope.usr_global,
            "plantilla": $scope.plantRecuperada
        }, function(data) {
            if (data.exito) {
                ejecutaAlerta(1, "Se actualizó correctamente la plantilla");
                force_redirect('index_adm.html#/plantillas_explorador');
            } else {
                ejecutaAlerta(2, "Ocurrió un error: " + data.estatus);
            }
        }, function(error) {
            alert("Algo malo paso al actualizar la plantilla: " + error.status);
        });
    }
    $scope.validar_plantilla = function() {
        conexion.plantillas_validar({
            "usuario": $scope.usr_global,
            "plantilla": {
                "txplantilla": CKEDITOR.instances['plan_ck'].getData()
            }
        }, function(data) {
            if (data.exito) {
                ejecutaAlerta(1, "La plantilla es correcta")
            } else {
                ejecutaAlerta(2, "Encontro errores en la plantilla");
            }
        }, function(error) {
            alert("Algo malo paso al validar la plantilla:" + error.status)
        });
    }
}