define(['../module'],function(directives){'use strict';directives.directive('subOperacion',function(){return{restrict:'E',scope:{detalle:"=detalle",idopt:"@",idsubopt:"@",nombre:"@",idacto:"@",previos:"=",nombreope:"@"},templateUrl:urlTemplates+'sub-operacion.html',controller:'ctrl_operaciones_actos',link:function($scope,$element,$attrs){}};});});