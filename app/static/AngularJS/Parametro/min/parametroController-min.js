registrationModule.controller("parametroController",function(r,o,e,a,s,d){r.productoId=1,r.usuarioId=1,r.empresaId=1,r.sucursalId=3,r.departamentoId=13,r.tipoOrdenId=1,r.init=function(){r.nombre="Genaro/Mario",d.getEscalamiento(r.productoId,r.usuarioId,r.empresaId,r.sucursalId,r.departamentoId,r.tipoOrdenId).success(n).error(t)};var t=function(r,o,e,a){s.error("Ocurrio un problema: "+r)},n=function(o,e,a,d){r.listaEscalamiento=o,s.success("Datos de escalamiento cargados.")};r.MostrarAprobadores=function(r){d.getAprobadores(r.empIdempresa,r.sucIdsucursal,r.depIddepartamento,r.tipoidtipoorden).success(c).error(t)};var c=function(o,e,a,d){r.listaAprobadores=o,$("#viewAprobadores").modal("show"),s.success("Aprobadores cargados.")}});