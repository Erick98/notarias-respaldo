define(['../module'],function(directives){'use strict';directives.directive('comListaOrdenadaMulti',function(){return{restrict:'AE',templateUrl:urlTemplates+'componente_lista_o.html',scope:{titulo:"@",valores:"@",name:"@",idcomponente:"@",},link:function(scope,element){scope.valores=scope.valores.split(",");var lval=scope.valores[scope.valores.length-1];if(lval==""||!lval.trim()){scope.valores.pop();}
$.each(scope.valores,function(i){var valor=scope.valores[i];element.find(".wrap_lista_ordenada ol").append("<li><input type='checkbox' value='"+valor+"' name='"+scope.name+"'> <label for='"+scope.name+"'>"+valor+"</label></li>");})}};});});