function ctrl_usuarios($scope, conexion) {
    refreshList();

    function refreshList() {
        $scope.user_lista = conexion.listar_usuarios({
            usuario: $scope.usr_global
        }, function(data) {
            $scope.user_lista = data.usuarioList;
        }, function(error) {
            alert("Algo malo ocurrió :: Error " + error.status);
        });
    }

    function resetCampos() {
        $scope.user = null;
    }
    $scope.suspenderUsuario = function(usuario, status) {
        var msj = (!status) ? "Realmente desea activar al usuario" : "Realmente desea suspender al usuario";
        var msjConfirm = (!status) ? "El usuario se activo correctamente" : "El usuario se desactivo correctamente";
        if (confirm(msj)) {
            status = (status) ? false : true;
            usuario.inestatus = status;
            usuario.idsesionactual = $scope.usr_global.idsesionactual;
            conexion.usr_actualizar({
                "idusuarioactualiza": $scope.usr_global.idusuario,
                "usuario": usuario
            }, function(data) {
                if (data.exito) {
                    ejecutaAlerta(1, msjConfirm);
                    refreshList();
                } else {
                    ejecutaAlerta(2, 'Ocurrió un error: ' + data.estatus);
                }
            }, function(error) {
                ejecutaAlerta(2, 'Ocurrió un error al suspender al usuario: ' + error.status);
            });
        }
    };
    $scope.eliminarUsuario = function(usuario) {
        var msj = "Realmente desea eliminar al usuario";
        if (confirm(msj)) {
            usuario.isactivo = false;
            usuario.idsesionactual = $scope.usr_global.idsesionactual;
            conexion.usr_actualizar({
                "idusuarioactualiza": $scope.usr_global.idusuario,
                "usuario": usuario
            }, function(data) {
                if (data.exito) {
                    ejecutaAlerta(1, "Se eliminó correctamente al usuario");
                    refreshList();
                } else {
                    ejecutaAlerta(2, 'Ocurrió un error: ' + data.estatus);
                }
            }, function(error) {
                ejecutaAlerta(2, 'Algo malo ocurrio al eliminar al usuario: ' + error.status);
            });
        }
    };
    $scope.lanzaModal = function(usuario) {
        var msj = "Realmente desea cambiar la contraseña al usuario";
        if (confirm(msj)) {
            Avgrund.show("#changeKey");
            $scope.tmpUsr = usuario;
        }
    }
    $scope.cambiarPass = function() {
        if ($scope.checkPass.$valid) {
            $scope.tmpUsr.dsvalenc = document.getElementById("changePassUser").value;
            $scope.tmpUsr.idsesionactual = $scope.usr_global.idsesionactual;
            conexion.usr_actualizar({
                "idusuarioactualiza": $scope.usr_global.idusuario,
                "usuario": $scope.tmpUsr
            }, function(data) {
                if (data.exito) {
                    document.getElementById("changePassUser").value = "";
                    document.getElementById("changePassUserConfirm").value = "";
                    Avgrund.hide();
                    ejecutaAlerta(1, "Se actualizó correctamente la contraseña");
                } else {
                    Avgrund.hide();
                    ejecutaAlerta(2, 'Ocurrió un error: ' + data.estatus);
                }
            }, function(error) {
                Avgrund.hide();
                ejecutaAlerta(2, 'Algo malo ocurrio al eliminar al usuario: ' + error.status);
            });
            $scope.checkPass.submitted = false;
        } else {
            $scope.checkPass.submitted = true;
        }
    };
    $scope.lanzaForm = function() {
        $scope.user.isactivo = true;
        $scope.user.inestatus = true;
        $scope.user.idusuario = $scope.usr_global.idusuario;
        $scope.user.idsesionactual = $scope.usr_global.idsesionactual;
        $scope.user.dsultimoacceso = $scope.usr_global.dsultimoacceso;
        if ($scope.myForm.$valid) {
            $scope.user.rol = angular.fromJson($scope.user.rol);
            $scope.user.fchinicio = parseFecha(document.getElementById("fchinicio").value) + " 00:00:00";
            $scope.user.fchfin = parseFecha(document.getElementById("fchfin").value) + " 00:00:00";
            conexion.usr_agregar({
                "usuario": $scope.user
            }, function(data) {
                if (data.exito) {
                    ejecutaAlerta(1, 'El usuario se guardó correctamente');
                    refreshList();
                    resetCampos();
                } else {
                    ejecutaAlerta(2, 'Ocurrió un error: ' + data.estatus);
                }
            }, function(error) {
                ejecutaAlerta(2, 'Ocurrió un error al guardar al usuario: ' + error.status);
            });
            $scope.myForm.submitted = false;
        } else {
            $scope.myForm.submitted = true;
        }
    }
}