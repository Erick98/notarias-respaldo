function ctrl_roles($scope,$filter,conexion){$scope.getRoles=function(){conexion.listar_rol({"usuario":$scope.usr_global},function(data){$scope.roles=data.rolesList;$scope.rolSelect=$scope.roles[0];$scope.usur_procXrol();},function(error){alert("Algo malo ocurrió :: Error "+error.status);});}
$scope.detalleRol=function(){var found=$filter('getRol')($scope.roles,$scope.rolSelect.idrol);$scope.rolSelect=found;$scope.usur_procXrol();}
$scope.usur_procXrol=function(){conexion.listar_X_rol({"usuario":$scope.usr_global,"rol":$scope.rolSelect},function(data){$scope.users_X_rol=data.usuarioList;},function(error){alert("Algo malo ocurrió al obtener los usuarios por rol :: Error "+error.status);});var tmpusr=$scope.usr_global;tmpusr.rol=$scope.rolSelect;conexion.listar_procesos_X_rol({"usuario":tmpusr,},function(data){console.info("ROL***",data);$scope.users_procesos_X_rol=data.procesoList;},function(error){alert("Algo malo paso al obtener los procesos por rol: "+error.status);});}
$scope.getRoles();}