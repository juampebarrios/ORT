
function saveGestion(){
    var fecha = $("#Fecha").val();
    var comentarios = $("#Comentarios").val();
    var idCliente = 5;

    if (fecha.trim().length > 0 && !isNaN(fecha) && comentarios.trim().length > 0){
        
        if(comentarios === 'Eliminar Cliente'){

            var eliminar = eliminarCliente(comentarios);
            if (eliminar){
                alert("Cliente eliminado con éxito");
            }

        }else{

            var guardar = UC_exec(fecha, comentarios, idCliente);
            if(guardar){
                alert("Cliente agregado con éxito");
            }

        }
        
    }

}

function UC_exec(fecha, coemntario, idCliente){
    let nuevoCliente = new Cliente;
    nuevoCliente.fecha = fecha;
    nuevoCliente.comentario = comentario;
    nuevoCliente.idCliente = idCliente
    clientes.push(nuevoCliente);
    exito = true;
    return exito;

}

function eliminarCliente(comentario){
    var deleted = false;

    //...
    return deleted;
}