function ctrl_variables_def_exp($scope,$timeout,conexion,catalogos,$rootScope){$scope.calculo={};if($rootScope.variable_exp){$scope.variable=$rootScope.variable_exp;delete $rootScope.variable_exp;conexion.var_obtener_calculo({"usuario":$scope.usr_global,"variable":$scope.variable},function(data){if(data.calculo){$scope.calculo=data.calculo;$scope.lista_campos(function(){$scope.calculo.dspropiedad=$scope.calculo.dspropiedad;});}},function(error){alert("Algo malo paso al obtener el cálculo de la variable: "+error.status);});}else{$scope.goTo("/catalogo_variables");}
$scope.lista_campos=function(callback){conexion.lista_campos_variables({"usuario":$scope.usr_global,"calculo":$scope.calculo},function(data){if(data.exito){$scope.campos_variable=data.campos;if(typeof callback!="undefined")callback()}else{ejecutaAlerta(2,"Ocurrió un error: "+data.estatus);}},function(error){alert("Algo malo paso al obtener los campos variable: "+error.status);});}
$scope.guardar_valor_variable=function(){$scope.calculo.variable=$scope.variable;conexion.var_asignar_calculo({"usuario":$scope.usr_global,"calculo":$scope.calculo},function(data){if(data.exito){ejecutaAlerta(1,"Se guardó correctamente el valor de la variable");$timeout(function(){force_redirect("index_adm.html#/catalogo_variables");},1000);}else{ejecutaAlerta(2,"Ocurrió un error: "+data.estatus);}},function(error){alert("Algo malo paso al guardar el valor de la variable: "+error.status);});}
catalogos.get_entidades($scope);catalogos.get_var_filtros($scope);}