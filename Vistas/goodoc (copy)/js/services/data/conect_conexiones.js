define(['../module'],function(service){'use strict';service.factory("conect_conexiones",function($resource){return $resource(urlConectividad,{tipo:"@tipo",listController:"@listController",},{busquedaExtediente:{method:'POST',params:{tipo:"consultaExpedientes",listController:"buscar"},isArray:false},busquedaExtedienteParametro:{method:'POST',params:{tipo:"consultaExpedientes",listController:"buscar"},isArray:false},buscarComparecientesPorExpediente:{method:'POST',params:{tipo:"consultaExpedientes",listController:"buscarComparecientesPorExpediente"},isArray:false},buscarArchivos:{method:'POST',params:{tipo:"consultaExpedientes",listController:"listarArchivosExpediente"},isArray:false},});});});