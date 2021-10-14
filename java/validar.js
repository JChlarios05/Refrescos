function ingresar() {

    var usuario="johnatan"
    var contraseña="examen";

    if (document.frmingreso.txtusuario.value==usuario && document.frmingreso.txtcontraseña.value==contraseña) 
    {
        document.location="/html/inicio.html"
    }
    else
    {
        alert("Ingrese su usuario y contraseña correctamente")
    }
    
} 