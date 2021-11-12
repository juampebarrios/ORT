class Usuario{
    constructor(){
        this.UserName;
        this.Password;
        this.TipoDeUsuario;
        this.Estado=true;
        this.CantRecetas=0;
        this.RecetasMG=[];
    }
}

class Receta{
    constructor(){
        this.Codigo=Number.parseInt;;
        this.Titulo;
        this.TiempoPreparacion=Number.parseInt;
        this.Procedimiento;
        this.Imagen;
        this.Autor;
        this.TipoCreador=Number.parseInt;
        this.MeGusta=Number.parseInt;
        this.NoMeGusta=Number.parseInt;
        this.PorcentajeRendimiento;
    }
}