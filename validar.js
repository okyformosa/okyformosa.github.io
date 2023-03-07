

function validar(){
                if (document.getElementById("nombre").value == "" || document.getElementById("nombre").length == 0)
                    {
                    swal("Nombre y Apellido Vacio","Ingese por favor...", "warning");
                    } else {
                            if (document.getElementById("email").value == "" || document.getElementById("email").length==0)
                                {
                                swal("Correo Vacio", "Ingese por favor...", "warning");
                                } else {
                                        if (document.getElementById("mensaje").value == "" || document.getElementById("mensaje").length==0)
                                            {
                                            swal("Mensaje Vacio", "Ingese por favor...", "warning");
                                            } else {
                                                swal("Mensaje enviado..", "Pronto estaremos comunicandonos con Ud.", "success")
                                            }
                                            
                                }
                    }
    
    document.formulario.reset();

}
