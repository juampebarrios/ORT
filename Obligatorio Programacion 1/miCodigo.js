$().ready(eventos);

function eventos(){
    preCargarDatosUsuarios();
    preCargarDatosRecetas();
    ocultarDiv();
    mostrarReceta();
    mostrarBotonIngresar();
    ocultarCerrarSesion();
    ocultarVolver();
    $("#btnIngresar0").click(mostrarDivIngreso);
    $("#btnCerrarSesion").click(cerrarSesion);
    $("#btnSearch").click(buscar);
    $("#btnIngresar").click(ingresar);
    $("#btnCancelar").click(cancelar);
    $("#btnVolver").click(volver);
    $("#btnMostrarCol").click(mostrarColaboradores);
    $("#btnCrearCol").click(crearColaborador);
    $("#btnAgregarRecetaA").click(mostrarDivAgregarRecA);
    $("#btnCrearRecetaA").click(crearRecetaA);
    $("#btnReportes").click(mostrarReportes);
    $("#btnReporteTiempo").click(mostrarReporteTiempo);
    $("#btnReporteDuracionRecetas").click(reporteRecetasMayorTiempo);
    $("#btnReporteRendimiento").click(reporteDeRendimiento);
    $("#btnAgregarCol").click(mostrarDivCrarCol);
    $("#btnAgregarRecetaC").click(mostrarDivAgregarRecC);
    $("#btnCrearRecetaC").click(crearRecetaC);
}

//Definimos Array de Usuarios:
let usuarios=new Array();

//Definimos Array de Recetas:
let recetas= new Array();

//Guardamos en una variable global al usuario que hace login:
let usuarioLogueado= new Usuario(); //null  objeto Usuario

//Contador de recetas creadas:
let codigoReceta=21;

// Precargamos datos de Usuarios:
function preCargarDatosUsuarioChef(){
    let chef=new Usuario(); //Se precarga el usuario Chef/Administrador.
    chef.UserName="chef";
    chef.Password="chef-01";
    chef.TipoDeUsuario="Administrador";
    chef.Estado=true;
    chef.CantRecetas=4;
    usuarios.push(chef); //Se pushea el usuario Adm. en el Array.
}

function precargaDatosCol1(){
    let usuario= new Usuario(); //Se precargan colaboradores activos.
    usuario.UserName="jsuarez";
    usuario.Password="j-suarez";
    usuario.TipoDeUsuario="Colaborador";
    usuario.Estado=true;
    usuario.CantRecetas=6;
    usuarios.push(usuario); //Se pushean los usuarios en el Array.
}
function precargaDatosCol2(){
    let usuario= new Usuario(); //Se precargan colaboradores activos.
    usuario.UserName="jbarrios";
    usuario.Password="j-barrios";
    usuario.TipoDeUsuario="Colaborador";
    usuario.Estado=true;
    usuario.CantRecetas=5;
    usuarios.push(usuario); //Se pushean los usuarios en el Array.
}
function precargaDatosCol3(){
    let usuario= new Usuario(); //Se precargan colaboradores activos.
    usuario.UserName="prodriguez";
    usuario.Password="p-rodriguez";
    usuario.TipoDeUsuario="Colaborador";
    usuario.Estado=true;
    usuario.CantRecetas=3;
    usuarios.push(usuario); //Se pushean los usuarios en el Array.
}
function precargaDatosCol4(){
    let usuario= new Usuario(); //Se precargan colaboradores activos.
    usuario.UserName="prodriguez1";
    usuario.Password="p-rodriguez";
    usuario.TipoDeUsuario="Colaborador";
    usuario.Estado=false;
    usuario.CantRecetas=1;
    usuarios.push(usuario); //Se pushean los usuarios en el Array.
}
function precargaDatosCol5(){
    let usuario= new Usuario(); //Se precargan colaboradores activos.
    usuario.UserName="prodriguez2";
    usuario.Password="p-rodriguez";
    usuario.TipoDeUsuario="Colaborador";
    usuario.Estado=false;
    usuario.CantRecetas=1;
    usuarios.push(usuario); //Se pushean los usuarios en el Array.
}

function preCargarDatosUsuarios(){
    preCargarDatosUsuarioChef();
    precargaDatosCol1();
    precargaDatosCol2();
    precargaDatosCol3();
    precargaDatosCol4();
    precargaDatosCol5();
}

//Precarga de receta:
function preCargarReceta1(){
    let receta = new Receta; //Se define la nueva receta.
    receta.Codigo = 1;
    receta.Titulo = "Panchos"
    receta.TiempoPreparacion = 15;
    receta.Procedimiento = "2 panchos.<br>2 panes.<br>Muzzarella a gusto.<br><br>Hervir panchos.<br>Sacar del agua.<br>Cortar panes.<br>Colocar los panchos en cada pan.<br>Cubrir con muzzarella.<br>Hornear hasta que se derrita el queso.<br>¡Listo!";
    receta.Imagen = "panchos.jpg";
    receta.Autor = "chef"
    receta.TipoCreador=1;
    receta.MeGusta=5;
    receta.NoMeGusta=1;
    recetas.push(receta); //Se precarga la nueva receta.
}

function preCargarReceta2(){
    let receta = new Receta; //Se define la nueva receta.
    receta.Codigo = 2;
    receta.Titulo = "Brownie de Chocolate con Helado"
    receta.TiempoPreparacion = 45;
    receta.Procedimiento = `Derretir manteca 150g con chocolate 150g<br>Azúcar, agregar una taza<br>Agregar 3 huevos<br>Harina agregar media taza<br>Meter en el horno a 180º, 10 a 15 min.<br>Servir con una bola de helado de crema.<br>Vetear con salsa de dulce de Leche.`;
    receta.Imagen = "BrownieConHelado.jpg";
    receta.Autor = "chef"
    receta.TipoCreador=1;
    receta.MeGusta=14;
    receta.NoMeGusta=3;
    recetas.push(receta); //Se precarga la nueva receta.
}

function preCargarReceta3(){
    let receta = new Receta; //Se define la nueva receta.
    receta.Codigo = 3;
    receta.Titulo = `Pizza` 
    receta.TiempoPreparacion = 80;
    receta.Procedimiento = `1kg de harina<br>1 cda. de sal fina<br>2 cdas de aceite<br>2 tazas de agua<br>10 grs de levadura<br><br>Mezlcar los ingredientes, amasar y dejar reposar.<br>Poner la masa en una asadera y cubrir con salsa y muzzarella.<br>Dejar hornear por 20 minutos.`;
    receta.Imagen = "Pizza.jpg";
    receta.Autor = "chef"
    receta.TipoCreador=1;
    receta.MeGusta=10;
    receta.NoMeGusta=5;
    recetas.push(receta); //Se precarga la nueva receta.
}

function preCargarReceta4(){
    let receta = new Receta; //Se define la nueva receta.
    receta.Codigo = 4;
    receta.Titulo = `Masa para Canelones`
    receta.TiempoPreparacion = 50;
    receta.Procedimiento = `500 grs de harina<br>2 huevos<br>2 cdas polvo de hornear<br>1 cda sal<br>2 tazas leche<br>2 tazas agua<br><br>Mezclar ingredientes y licuar por 5 minutos<br>Dejar descansar media hora en un bowl<br>Se pasa la masa a un sarten y se cocinan las tapas<br>Rellenar con lo que mas le guste`;
    receta.Imagen = "Canelones.jpg";
    receta.Autor = "chef"
    receta.TipoCreador=1;
    receta.MeGusta=2;
    receta.NoMeGusta=7;
    recetas.push(receta); //Se precarga la nueva receta.
}

function preCargarReceta5(){
    let receta = new Receta; //Se define la nueva receta.
    receta.Codigo = 5;
    receta.Titulo = `Chocotorta`
    receta.TiempoPreparacion = 45;
    receta.Procedimiento = `400 gr de dulce de leche<br>400 gr de crema de leche<br>750 gr de galletitas de chocolate<br>Leche para remojar las galletitas<br>50 gr de chocolate semi amargo<br>50 gr de cacao en polvo<br><br>Batir el dulce de leche y agregar la crema<br>Remojar cada galletita y colocar en una fuente hasta formar una capa.<br>Colocar una capa de la crema de dulce de leche.<br>Repetir 4 veces.<br>Dejar enfriar 1 hora.<br>Listo.`;
    receta.Imagen = "Chocotorta.jpg";
    receta.Autor = "jsuarez"
    receta.TipoCreador=2;
    receta.MeGusta=12;
    receta.NoMeGusta=3;
    recetas.push(receta); //Se precarga la nueva receta.
}

function preCargarReceta6(){
    let receta = new Receta; //Se define la nueva receta.
    receta.Codigo = 6;
    receta.Titulo = `Paella`
    receta.TiempoPreparacion = 60;
    receta.Procedimiento = `1 dientes de ajo<br>1 tomate pera<br>1 pimiento verde italiano<br>150g calamar 150 g<br>12 almeja fina 12<br>300g arroz bomba<br>1 caldo de pescado<br>Azafrán<br>6 langostinos<br><br>Troceamos calamares y pescado<br>Doramos<br>Añadimos pimiento y tomate<br>Agregamos arroz<br>Dejar cocer 20 min<br>Agregamos langostinos<br>Servir`;
    receta.Imagen = "Paella.jpg";
    receta.Autor = "jsuarez"
    receta.TipoCreador=2
    receta.MeGusta=4;
    receta.NoMeGusta=1;
    recetas.push(receta); //Se precarga la nueva receta.
}

function preCargarReceta7(){
    let receta = new Receta; //Se define la nueva receta.
    receta.Codigo = 7;
    receta.Titulo = `Pasteles de Membrillo`
    receta.TiempoPreparacion = 55;
    receta.Procedimiento = `250g harina<br>1 cda polvo de hornear<br>1 cda sal<br>2 cda aceite<br>Agua tibia<br>Dulce membrillo<br>Grasa vacuna<br><br>Mezclar la harina con la sal y la levadura<br>Agregar el aceite<br>Luego poner la cantidad necesaria de agua, amasar y dejar descansar 15 minutos<br>Hacer bollitos, amasar y rellenar con dulce de membrillo<br>Freír en grasa caliente`;
    receta.Imagen = "PastelitosMembrillo.jpg";
    receta.Autor = "jsuarez"
    receta.TipoCreador=2
    receta.MeGusta=8;
    receta.NoMeGusta=0;
    recetas.push(receta); //Se precarga la nueva receta.
}

function preCargarReceta8(){
    let receta = new Receta; //Se define la nueva receta.
    receta.Codigo = 8;
    receta.Titulo = `Tortas Fritas`
    receta.TiempoPreparacion = 30;
    receta.Procedimiento = `1kg harina<br>30g royal<br>Sal (a gusto)<br>8 cucharadas grasa vacuna<br><br>En un bowl poner la harina el royal y la sal y mezclar<br>Agregar agua tibia hasta que se forme una masa homogénea<br>Después de tener la masa ya hecha agregarle las 8 cucharadas de grasa<br>Amasar hasta que ya no se pegue, formar los bollos y estirar<br>Freir.`;
    receta.Imagen = "TortasFritas.jpg";
    receta.Autor = "jsuarez"
    receta.TipoCreador=2
    receta.MeGusta=10;
    receta.NoMeGusta=3;
    recetas.push(receta); //Se precarga la nueva receta.
}

function preCargarReceta9(){
    let receta = new Receta; //Se define la nueva receta.
    receta.Codigo = 9;
    receta.Titulo = `Churros`
    receta.TiempoPreparacion = 40;
    receta.Procedimiento = `250gr harina de trigo<br>250gr agua<br>50gr mantequilla<br>1cdta sal<br>Azúcar para espolvorear<br>Aceite para freír<br>Churrera o una manga<br><br>En una olla, calentamos el agua con la sal y la mantequilla<br>Cuando empiece a hervir, le agregamos la harina y mezclamos hasta que quede una masa compacta y flexible<br>Introducir la masa en la manga o la churrera y freír en aceite caliente a fuego medio `;
    receta.Imagen = "Churros.jpg";
    receta.Autor = "jsuarez"
    receta.TipoCreador=2
    receta.MeGusta=7;
    receta.NoMeGusta=5;
    recetas.push(receta); //Se precarga la nueva receta.
}

function preCargarReceta10(){
    let receta = new Receta; //Se define la nueva receta.
    receta.Codigo = 10;
    receta.Titulo = `Milanesas`
    receta.TiempoPreparacion = 30;
    receta.Procedimiento = `1 1/2kg carneA<br>8 huevos<br>1/2kg pan rallado<br>1/2 cdta Pimentón<br>3 dientes de ajo<br>Cebolla de verdeo<br><br>En un recipiente batir los huevos junto con el pimentón, la cebolla y ajo picados<br>Dejar reposar la carne en esa preparación<br>Luego pasar la carne por pan rallado<br>Hornear o freír.`;
    receta.Imagen = "Milanesas.jpg";
    receta.Autor = "jsuarez"
    receta.TipoCreador=2
    receta.MeGusta=15;
    receta.NoMeGusta=3;
    recetas.push(receta); //Se precarga la nueva receta.
}

function preCargarReceta11(){
    let receta = new Receta; //Se define la nueva receta.
    receta.Codigo = 11;
    receta.Titulo = `Torta de Jamón y Queso`
    receta.TiempoPreparacion = 45;
    receta.Procedimiento = `3 huevos<br>1/2 Taza aceite<br>1 taza leche<br>12 cucharadas harina<br>4 cdas queso rallado<br>2 cdtas polvo para hornear<br>2 pizca sal<br>150grs jamón en fetas<br><br>150grs de queso en fetas<br>En la licuadora agregar los huevos, el aceite, la leche, el queso rallado y mezclar<br>Agregar harina, polvo para hornear y sal<br>Agregar la mitad de la mezcla, agregamos el jamón y el queso en fetas<br>Volcar la otra mitad de la mezcla<br>Hornear.`;
    receta.Imagen = "TortaJamonyQueso.jpg";
    receta.Autor = "jbarrios"
    receta.TipoCreador=2
    receta.MeGusta=3;
    receta.NoMeGusta=8;
    recetas.push(receta); //Se precarga la nueva receta.
}

function preCargarReceta12(){
    let receta = new Receta; //Se define la nueva receta.
    receta.Codigo = 12;
    receta.Titulo = `Cheesecake`
    receta.TiempoPreparacion = 120;
    receta.Procedimiento = `2 tubos de galletas María<br>100 gramos manteca<br>2 potes Casancrem medianos<br>1 lata leche condensada<br>Mermelada de frutos rojos<br><br>Deshacer las galletas y mezclar con la manteca, armar la base en la bandeja desmoldable<br>Mezclar la leche condensada con el queso crema<br>Agregar la mezcla en la bandeja arriba de la base de las galletas<br>Hornear a temperatura media hasta dorar un poco<br>Luego dejar enfriar y poner la mermelada.`;
    receta.Imagen = "Cheesecake.jpg";
    receta.Autor = "jbarrios"
    receta.TipoCreador=2
    receta.MeGusta=21;
    receta.NoMeGusta=8;
    recetas.push(receta); //Se precarga la nueva receta.
}

function preCargarReceta13(){
    let receta = new Receta; //Se define la nueva receta.
    receta.Codigo = 13;
    receta.Titulo = `Tuco`
    receta.TiempoPreparacion = 20;
    receta.Procedimiento = `1 morrón<br>1 cebolla<br>350grs carne picada<br>500ml pulpa de tomate<br>Sal<br>Ajil<br>Picar medio morrón y media cebolla y freír<br><br>Agregar carne y condimentar<br>Una vez cocido agregar pulpa de tomate a gusto<br>Esperar que hierva.`;
    receta.Imagen = "Tuco.jpg";
    receta.Autor = "jbarrios"
    receta.TipoCreador=2
    receta.MeGusta=7;
    receta.NoMeGusta=1;
    recetas.push(receta); //Se precarga la nueva receta.
}

function preCargarReceta14(){
    let receta = new Receta; //Se define la nueva receta.
    receta.Codigo = 14;
    receta.Titulo = `Arroz Con Leche`
    receta.TiempoPreparacion = 40;
    receta.Procedimiento = `1 litro leche<br>2 huevos<br>12 cucharadas azúcar<br>C/N esencia de vainilla<br>1/2 taza arroz<br><br>Llevar al fuego bajo la leche con el arroz<br>Batir los huevos con 8 cucharadas de azúcar y vainilla hasta punto letra<br>Cuando el arroz este pronto apagar el fuego e incorporarle el batido de los huevos<br>Listo.`;
    receta.Imagen = "ArrozConLeche.jpg";
    receta.Autor = "jbarrios"
    receta.TipoCreador=2
    receta.MeGusta=5;
    receta.NoMeGusta=2;
    recetas.push(receta); //Se precarga la nueva receta.
}

function preCargarReceta15(){
    let receta = new Receta; //Se define la nueva receta.
    receta.Codigo = 15;
    receta.Titulo = `Ñoquis de Papa y Harina`
    receta.TiempoPreparacion = 80;
    receta.Procedimiento = `12 papas<br>600 grs harina<br>1 huevo<br>Nuez moscada<br>Sal<br><br>Pelamos y cortamos papas<br>Hervir<br>Luego de cocidas hacer el puré, y ponerle una cucharada de sal y nuez moscada a gusto<br>Mezclar con el huevo y la harina<br>Cortar e ir estirando y armar los ñoquis<br>Hervir.`;
    receta.Imagen = "Noquis.jpg";
    receta.Autor = "jbarrios"
    receta.TipoCreador=2
    receta.MeGusta=11;
    receta.NoMeGusta=4;
    recetas.push(receta); //Se precarga la nueva receta.
}

function preCargarReceta16(){
    let receta = new Receta; //Se define la nueva receta.
    receta.Codigo = 16;
    receta.Titulo = `Morrones Rellenos`
    receta.TiempoPreparacion = 30;
    receta.Procedimiento = `3 morrones<br>Cebolla<br>Morrón para el relleno<br>Ajos<br>3 huevos<br>Muzzarella<br>Sal<br>Pimienta negra<br><br>Lavamos y cortamos los morrones<br>Luego picamos el morrón que nos quedó, la cebolla y el ajo, y fritamos<br>Condimentamos<br>Le agregamos la muzzarella y un huevo a cada uno<br>Horneamos.<br>Listo.`;
    receta.Imagen = "MorronesRellenos.jpg";
    receta.Autor = "prodriguez"
    receta.TipoCreador=2
    receta.MeGusta=9;
    receta.NoMeGusta=0;
    recetas.push(receta); //Se precarga la nueva receta.
}

function preCargarReceta17(){
    let receta = new Receta; //Se define la nueva receta.
    receta.Codigo = 17;
    receta.Titulo = `Ensalada César`
    receta.TiempoPreparacion = 30;
    receta.Procedimiento = `1 lechuga<br>Pan<br>Pollo desmenuzado<br>Queso semiduro<br>100 grs Mayonesa<br>1 cdta Mostaza<br>Ajo<br>Limón<br>Sal<br>Pimienta<br>Aceite<br><br>Aderezo: aplastar un diente de ajo, alivianar la mayonesa con aceite de oliva y jugo de limón, agregar el ajo, la mostaza, la sal y la pimienta y reservar esta mezcla en la heladera<br><br>Crutones: vamos a cortar el pan en cubos y dorarlos en el horno con un poco de aceite<br><br>Mezclar todo bien en un bowl.<br>Listo.`;
    receta.Imagen = "EnsaladaCesar.jpg";
    receta.Autor = "prodriguez"
    receta.TipoCreador=2
    receta.MeGusta=13;
    receta.NoMeGusta=1;
    recetas.push(receta); //Se precarga la nueva receta.
}

function preCargarReceta18(){
    let receta = new Receta; //Se define la nueva receta.
    receta.Codigo = 18;
    receta.Titulo = `Milanesas de Berenjena`
    receta.TiempoPreparacion = 20;
    receta.Procedimiento = `2 berenjenas<br>4 huevos<br>200grs harina<br>200gr. avena<br>Condimentos<br><br>Pelar y cortar las berenjenas<br>Empanar por harina y avena<br>Pasarla por el huevo que lo condimentados bien con condimentos y a la freírlos en el sartén con aceite caliente.`;
    receta.Imagen = "MilanesasBerenjena.jpg";
    receta.Autor = "prodriguez"
    receta.TipoCreador=2
    receta.MeGusta=13;
    receta.NoMeGusta=0;
    recetas.push(receta); //Se precarga la nueva receta.
}

function preCargarReceta19(){
    let receta = new Receta; //Se define la nueva receta.
    receta.Codigo = 19;
    receta.Titulo = `Chivito al Pan`
    receta.TiempoPreparacion = 35;
    receta.Procedimiento = `C/N pan tortuga<br>Bifes de lomo C/N<br>Panceta en fetas C/N<br>Jamón en fetas C/N<br>C/N queso muzzarella<br>C/N Huevos<br>Hojas lechuga<br>Rodajas tomate<br>Mayonesa<br>Ketchup<br><br>Cortar panes<br>Agregar aderezos<br>En una plancha poner fetas de panceta y los bifes de lomo salpimentados a gusto<br>En un sartén de teflon haremos los huevos fritos necesarios para cada chivito<br>Agregar lechuga y tomate<br>Tapar con pan.<br>Servir.`;
    receta.Imagen = "Chivito.jpg";
    receta.Autor = "prodriguez1"
    receta.TipoCreador=2
    receta.MeGusta=17;
    receta.NoMeGusta=1;
    recetas.push(receta); //Se precarga la nueva receta.
}

function preCargarReceta20(){
    let receta = new Receta; //Se define la nueva receta.
    receta.Codigo = 20;
    receta.Titulo = `Tortilla de Papas`
    receta.TiempoPreparacion = 70;
    receta.Procedimiento = `1kg de papas<br>3 huevos<br>Sal<br>Condimentos a gusto<br>Aceite<br><br>Pelar y lavar las papas, cortarlas en rodajitas chicas y sofritar<br>Al sacarlas escurrirlas bien y colocarlas en un bowl junto con la cebolla el morrón y ajo y sofritar de un lado y luego del otro y lista la tortilla<br>Listo para servir.`;
    receta.Imagen = "Tortilla.jpg";
    receta.Autor = "prodriguez2"
    receta.TipoCreador=2
    receta.MeGusta=18;
    receta.NoMeGusta=7;
    recetas.push(receta); //Se precarga la nueva receta.
}

function preCargarDatosRecetas(){
    preCargarReceta1();
    preCargarReceta2();
    preCargarReceta3();
    preCargarReceta4();
    preCargarReceta5();
    preCargarReceta6();
    preCargarReceta7();
    preCargarReceta8();
    preCargarReceta9();
    preCargarReceta10();
    preCargarReceta11();
    preCargarReceta12();
    preCargarReceta13();
    preCargarReceta14();
    preCargarReceta15();
    preCargarReceta16();
    preCargarReceta17();
    preCargarReceta18();
    preCargarReceta19();
    preCargarReceta20();
}


//Mostrar recetas:
function mostrarReceta(){
    let informacion="";
   //Codigo ordenar el array de recetas
   recetas.sort(criterioDeOrdenCodigo);
   recetas.sort(criterioDeOrdenCreador);
    for(let i=0;i<recetas.length;i++){
        let recetaActual=recetas[i];
        for(let i=0;i<usuarios.length;i++){
            let usuarioActual=usuarios[i];
            if(recetaActual.Autor==usuarioActual.UserName){
                if(usuarioActual.Estado){
                    informacion+=`<hr>
                    <div class="recetas">
                    <div id="titulo"> <h2>${recetaActual.Titulo}</h2> </div> <br>
                    <div id="${recetaActual.Codigo}receta" class="numero"><b>Receta Nº${recetaActual.Codigo}</b></div> <br>
                    <div id="tiempo"> Tiempo de preparación: <b>${recetaActual.TiempoPreparacion} minutos.</b></div> <br>
                    <div id="imagen"> <img src="Imagenes/${recetaActual.Imagen}"/> </div> <br>
                    <div id="procedimiento"> <b>Procedimiento:</b> <br>${recetaActual.Procedimiento} </div> <br>
                    <div id="autor"> Autor: <b>${recetaActual.Autor}</b> </p> <br>
                    <input type="button" class="botonesMG" id="${recetaActual.Codigo}MG" value="&#128077" />
                    <input type="button" class="botonesNMG" id="${recetaActual.Codigo}NMG" value="&#128078" />
                    <div id="divLikes"> <span>${recetaActual.MeGusta}</span> <span>${recetaActual.NoMeGusta}</span></div> <br>
                    </div>`
                }
            }
        }
    }
    $("#pMostrarRecetaPre").html(informacion);
    $(".botonesMG").click(clickEnMG);
    $(".botonesNMG").click(clickEnNMG);
}


//Odenamos recetas (primero las del chef).
function criterioDeOrdenCreador(pRecetaA, pRecetaB){
    let orden=0;
    if(pRecetaA.TipoCreador>pRecetaB.TipoCreador){
        orden=1;
    }
    if(pRecetaA.TipoCreador<pRecetaB.TipoCreador){
        orden=-1;
    }
    return orden;
}

//Ordenamos recetas por orden de código.
function criterioDeOrdenCodigo(pRecetaA, pRecetaB){
    let orden=0;
    if(pRecetaA.Codigo>pRecetaB.Codigo){
        orden=1;
    }
    if(pRecetaA.Codigo<pRecetaB.Codigo){
        orden=-1;
    }
    return orden;
}


//Función para los MG.
function clickEnMG(){
    let idBton = $(this).attr("id");  //this es el objeto del DOM que disparó el evento click, que es el botón.
    idBton=Number.parseInt(idBton);
    let i=0;
    let encontre=false; //Bandera de que encontré receta.
    while(i<recetas.length&&!encontre){ //Recorro Array de recetas.
        let recetaActual=recetas[i];
        if(recetaActual.Codigo===idBton){ //Si recetaActual.Codigo es igual al id del boton que trajimos, suma MeGusta.
            recetaActual.MeGusta++;
            encontre=true; //Cambio de bandera.
        }
        i++;
    }
    //mostrarReceta(); //Actualizamos lista de recetas.
    mostrarReceta();
    let idb = "#"+ idBton + "MG"; //Declaramos idb para formar el id del botón de me gusta.
    $(idb).prop("disabled",true);
}

//Función para los No MG.
function clickEnNMG(){
    let idBton = $(this).attr("id");  //this es el objeto del DOM que disparó el evento click, que es el botón.
    idBton=Number.parseInt(idBton);
    let i=0;
    let encontre=false; //Bandera de que encontré receta.
    while(i<recetas.length&&!encontre){ //Recorro Array de recetas.
        let recetaActual=recetas[i];
        if(recetaActual.Codigo===idBton){
            recetaActual.NoMeGusta++; //Si recetaActual.Codigo es igual al id del boton que trajimos, suma NoMeGsuta.
            encontre=true;//Cambio de bandera.
        }
        i++;
    }
    mostrarReceta(); //Actualizamos lista de recetas.
    let idb = "#"+ idBton +"NMG";//Declaramos idb para formar el id del botón de me gusta.
    $(idb).prop("disabled",true);
}

function mostrarBotonIngresar(){ //Se muestra el botón ingresar al cargar la página.
    $("#btnIngresar0").show();
}

function ocultarCerrarSesion(){ //Se oculta el botón Cerrar Sesión al cargar la página.
    $("#btnCerrarSesion").hide();
}

function ocultarVolver(){ //Se oculta el botón Volver al cargar la página.
    $("#btnVolver").hide();
}

function cerrarSesion(){ //Al presionar el botón Cerrar Sesión se realizarán las acciones que contiene la función.
    let i=0;
    let found=false;
    while(i<usuarios.length&&!found){
        let usuarioActual=usuarios[i];
        if(usuarioActual.UserName==usuarioLogueado.UserName){
            usuarioActual.UserName=usuarioLogueado.UserName;
            usuarioActual.Password=usuarioLogueado.Password;
            usuarioActual.TipoDeUsuario=usuarioLogueado.TipoDeUsuario;
            usuarioActual.Estado=usuarioLogueado.Estado;
            usuarioActual.CantRecetas=usuarioLogueado.CantRecetas;
            usuarioActual.RecetasMG=usuarioLogueado.RecetasMG;
            found=true;
        }
        i++;
    }
    mostrarReceta();
    $("#btnIngresar0").show();
    $("#divUsuarioFinal").show();
    $("#btnCerrarSesion").hide();
    $("#divAdministrador").hide();
    $("#divColaborador").hide();
    $("#divMostrarColaboradores").hide();
    $("#divAgregarRecetasA").hide();
    $("#divCrearColaborador").hide();
    $("#divMostrarRecetaBuscada").hide()
    $("#txtUserName").val("");
    $("#txtPassword").val("");
    $("#pIngreso").empty();
    $("#txtNombre").val("");
    $("#txtApellido").val("");
    $("#pCrearCol").empty();
    $("#pHabilitarCol").empty();
    $("#txtTituloRecetaA").val("");
    $("#txtTiempoDePreparacionA").val("");
    $("#txtProcedimientoA").val("");
    $("#fileFotoA").val(null);
    $("#pCrearRecetaA").empty();
    $("#divAgregarRecetasC").hide();
    $("#txtTituloRecetaC").val("");
    $("#txtTiempoDePreparacionC").val("");
    $("#txtProcedimientoC").val("");
    $("#fileFotoC").val(null);
    $("#pCrearRecetaC").empty();
    $("#divReportes").hide();
    $("#txtReporteTiempo").val("");
    $("#pDuracionEnMin").empty();
    $("#pMayorDuracion").empty();
    $("#pRendimientoRecetas").empty();
    $("#btnVolver").hide();
}

function volver(){ //Al presionar el botón Volver se Realizarán las acciones que contiene la función.
    $("#divUsuarioFinal").show();
    $("#divMostrarRecetaBuscada").hide();
    $("#txtSearch").val("");
    $("#btnVolver").hide();
}

function cancelar(){ //Al presionar el botón Cancelar se realizarán las acciones que contiene la función.
    $("#divIngreso").hide();
    $("#btnIngresar0").show();
    $("#txtUserName").val("");
    $("#txtPassword").val("");
    $("#pIngreso").html("");
    $("#divUsuarioFinal").show();
}

function ocultarDiv(){ //Divs que estarán ocultos al cargar la página.
    $("#divIngreso").hide();
    $("#divAdministrador").hide();
    $("#divColaborador").hide();
    $("#divCrearColaborador").hide();
    $("#divAgregarRecetasA").hide();
    $("#divAgregarRecetasC").hide();
    $("#divMostrarColaboradores").hide();
    $("#divReportes").hide();
    
}

function mostrarDivIngreso(){ //Al presionar el botón Ingresar se realizarán las acciones que contiene la función.
    $("#divIngreso").show();
    $("#btnIngresar0").hide();
}

function mostrarDivCrarCol(){ //Al presionar el botón Crear Colaborador se realizarán las acciones que contiene la función.
    $("#divCrearColaborador").show();
    $("#divMostrarColaboradores").hide();
    $("#divAgregarRecetasA").hide();
    $("#divReportes").hide();
}
function mostrarReportes(){
    $("#divReportes").show();
    $("#divAgregarRecetasA").hide();
    $("#divCrearColaborador").hide();
    $("#divMostrarColaboradores").hide();
}

function mostrarDivAgregarRecA(){ //Al presionar el botón Agregar Receta se realizarán las acciones que contiene la función.
    $("#divAgregarRecetasA").show();
    $("#divCrearColaborador").hide();
    $("#divMostrarColaboradores").hide();
    $("#divReportes").hide();
}


function mostrarDivAgregarRecC(){ //Al presionar el botón Agregar Receta se realizarán las acciones que contiene la función.
    $("#divAgregarRecetasC").show();
}

//Funcion de ingreso:
function ingresar(){
    let mensaje="";
    let name=$("#txtUserName").val();
    let password=$("#txtPassword").val();
    if(name.trim().length>0&&isNaN(name)&&password.trim().length>0&&isNaN(password)){
        let ingresoValido=validarIngreso(name,password); //Se llamará a la función validarIngreso.
        let habilitado=estaHabilitado(name); //Se llamará a la función estaHabilitado.
        if(ingresoValido){
            if(habilitado){
                $("#divIngreso").hide();
                let tipoDeUsuario=consultarTipoDeUsuario(name); //Se llamará a la función consultarTipodeUsuario.
                if(tipoDeUsuario==="Administrador"){
                    $("#btnCerrarSesion").show();
                    $("#divAdministrador").show();
                    $("#pIngreso").empty();
                    $("#divMostrarRecetaBuscada").hide();
                    $("#btnVolver").hide();
                    mensaje=`¡Bienvendio ${name}!`;
                    $("#hAd").html(mensaje);
                    usuarioLogueado.UserName=name; //Se guarda el nombre de usuario en variable global.
                    let i=0;
                    let encontrado=false;
                    while(i<usuarios.length&&!encontrado){
                        let usuarioActual=usuarios[i];
                        if(usuarioActual.UserName==usuarioLogueado.UserName){
                            usuarioLogueado.UserName=usuarioActual.UserName;
                            usuarioLogueado.Password=usuarioActual.Password;
                            usuarioLogueado.TipoDeUsuario=usuarioActual.TipoDeUsuario;
                            usuarioLogueado.Estado=usuarioActual.Estado;
                            usuarioLogueado.CantRecetas=usuarioActual.CantRecetas;
                            usuarioLogueado.RecetasMG=usuarioActual.RecetasMG;
                            encontrado=true;
                        }
                        i++;
                    }
                }else{
                    usuarioLogueado.UserName=name; //Se guarda el nombre de usuario en variable global.
                    let i=0;
                    let encontrado=false;
                    while(i<usuarios.length&&!encontrado){
                        let usuarioActual=usuarios[i];
                        if(usuarioActual.UserName==usuarioLogueado.UserName){
                            usuarioLogueado.UserName=usuarioActual.UserName;
                            usuarioLogueado.Password=usuarioActual.Password;
                            usuarioLogueado.TipoDeUsuario=usuarioActual.TipoDeUsuario;
                            usuarioLogueado.Estado=usuarioActual.Estado;
                            usuarioLogueado.CantRecetas=usuarioActual.CantRecetas;
                            usuarioLogueado.RecetasMG=usuarioActual.RecetasMG;
                            encontrado=true;
                        }
                        i++;
                    }    
                    mensaje=`¡Bienvenido ${usuarioLogueado.UserName}!`;
                    $("#btnCerrarSesion").show();
                    $("#divColaborador").show();
                    $("#pIngreso").empty();
                    $("#divMostrarRecetaBuscada").hide();
                    $("#btnVolver").hide();
                    $("#hCol").html(mensaje);
                }
            }else{
                mensaje=`Su usuario fue deshabilitado, contactese con el administrador para ser habilitado nuevamente.`;
                $("#pIngreso").html(mensaje); //En caso de que el usuario no esté habilitado, se mostrará este mensaje.
            }
        }else{
            mensaje="Error. Verifique usuario y contraseña.";
            $("#pIngreso").html(mensaje);//Si los datos no coinciden con ningún usuario, se mostrará este mensaje.
        }
    }else{
        mensaje="Error, verifique datos ingresados.";
        $("#pIngreso").html(mensaje); //Si los caracteres ingresados no son válidos, se mostrará este mensaje.
    }
}

//Validar ingreso:
function validarIngreso(user,password){
    valida=false;
    let i=0;
    while(i<usuarios.length&&!valida){ //Recorre Array de usuarios.
        let usuarioActual=usuarios[i];
        if(user===usuarioActual.UserName){
            if(password===usuarioActual.Password){ 
                valida=true; //Si coinciden UserName y Password, valida = true.
            }
        }
        i++;
    }
    return valida; //Retorna true o false.
}

//Función para verificar si el usuario está habilitado o no para el ingreso:
function estaHabilitado(pName){
    let estaHabilitado=false; //Declara bandera de habilitado.
    let encontrado=false; //Declara bandera de encontrado.
    let i=0;
    while(i<usuarios.length&&!encontrado){ //Recorremos Array de usuarios.
        let usuarioActual=usuarios[i];
        if(pName===usuarioActual.UserName){ 
            encontrado=true; //Si el nombre de usuario buscado es encontrado, retorna true.
            if(usuarioActual.Estado){
                estaHabilitado=true; //Si el usurio está habilitado, retorna true.
            }
        }
        i++;
    }
    return estaHabilitado; //Retorna bandera.
}

//Consultar tipo de usuario:
function consultarTipoDeUsuario(pNombre){
    let tipoDeUsuario="";
    let encontrado=false;
    let i=0;
    while(i<usuarios.length&&!encontrado){ //Recorre Array de usuarios.
        usuarioActual=usuarios[i];
        if(pNombre===usuarioActual.UserName){
            tipoDeUsuario=usuarioActual.TipoDeUsuario;
            encontrado=true; //Si se encuentra el usuario, devuelve el tipo de usuario y econtrado = true.
        }
        i++;
    }
    return tipoDeUsuario; //Retorna tipo de usuario.
}


//FUNCIONES DEL ADMINISTRADOR:

// Mostrar colaboradores:
function mostrarColaboradores(){
    let listaColaboradores=`<table id="tablaColaboradores" border="1">
    <th>Colaboradores</th><th>Estado</th><th>Cantidad de Recetas</th><th></th>`; //Se crea tabla para mostrar colaboradores.
    for (let i=0;i<usuarios.length;i++){ //Se recorre el Array de usuarios.
        let usuarioActual=usuarios[i];
        let estado="";
        let cantR=usuarioActual.CantRecetas;
        if(cantR==undefined) cantR=0;
        if(usuarioActual.Estado){
            estado="Habilitado";
        }else{
            estado="Inhabilitado";
        }
        if(usuarioActual.TipoDeUsuario==="Colaborador"){ //Se listan todos los usuarios cuyo tipo es "Colaborador".
            listaColaboradores+=`<tr atributo=${usuarioActual.UserName}><td>${usuarioActual.UserName}</td><td>${estado}</td><td>${cantR}</td><td><input type="radio" name="usuario" value=${usuarioActual.UserName}/></td>`;
        }
    }
    console.log(usuarios);
    listaColaboradores+=`<br></table><br> <input type="button" id="btnHabilitarDeshabilitar" value="Hablitar / Deshabilitar"/>`;
    //Se realizan las siguientes acciones:
    $("#divMostrarColaboradores").show();
    $("#divAgregarRecetasA").hide();
    $("#divCrearColaborador").hide();
    $("#divReportes").hide();
    $("#divPlanillaColaboradores").html(listaColaboradores);
    $("#btnHabilitarDeshabilitar").click(elegirDeTabla);
}

//Función para elegir un usuario de la tabla.
function elegirDeTabla(){
    let mensaje="";
    let listaColaboradores = $("input:radio");
    let i=0;
    let found=false;
    while(i<listaColaboradores.length&&!found){//Recorremos la lista de colaboradores.
        let colabX=listaColaboradores[i];
        if ($(colabX).prop("checked")){//Si el checkbox está marcado se realizará lo que está a continuación.
            let nombre=$(colabX).val();
            nombre=sacarBarra(nombre); //Llamamos esta función para corregir un error que aparece en el nombre del colaborador.
            mensaje=habilitarDeshabilitarCol(nombre);  //Se llama a la función habilitarDeshabilitarCol. 
            found=true;//Devolvemos true.
        }
        i++;
    }
    $("#pHabilitarCol").html(mensaje);
    mostrarColaboradores();
}

//Función que corrige el nombre del colaborador.
function sacarBarra(nombreConBarra){
    let posBarra=nombreConBarra.indexOf("/");
    let nombreSinBarra=nombreConBarra.substring(0,posBarra);
    return nombreSinBarra;
}
//Botón para deshabilitar o habilitar a un colaborador:
function habilitarDeshabilitarCol(userName){
    let mensaje="";
    let i=0;
    let found=false;
    while(i<usuarios.length&&!found){
        let usuarioX=usuarios[i];
        if(usuarioX.UserName==userName){
            if(usuarioX.Estado){
                usuarioX.Estado=false;
                mensaje=`El usuario ${usuarioX.UserName} fue inhabilitado.`
            }else{
                usuarioX.Estado=true;
                mensaje=`El usuario ${usuarioX.UserName} fue habilitado.`
            }
            found=true;
        }
        i++;
    }
    return mensaje;
}

//Crear colaborador:
function crearColaborador(){
    let mensaje="";
    let nombre=$("#txtNombre").val();
    let apellido=$("#txtApellido").val();
    if(nombre.trim().length>0&&isNaN(nombre)&&apellido.trim().length>0&&isNaN(apellido)){ //Validación de nombre y apellido.
        let userName=crearNombreUsuario(nombre,apellido); //Se llama a la función crearNombreUsuario.
        let password=crearContraseña(nombre,apellido); //Se llama a la función crearContraseña.
        userName=buscarUserName(userName); //Se llama a la función buscarUserName.
        let newUser= new Usuario(); //Se define el nuevo usuario.
        newUser.UserName=userName;
        newUser.Password=password;
        newUser.TipoDeUsuario="Colaborador"; //El administrador crea exclusivamente colaboradores.
        newUser.Estado=true; //Activo por defecto.
        newUser.CantRecetas=0;
        usuarios.push(newUser); //Se agrega el nuevo usuario.
        mensaje+=`<b>¡Usuario creado correctamente!</b><br><br>Información del Usuario:<br>Nombre de Usuario: ${newUser.UserName} <br>Contraseña: ${newUser.Password} <br>`;
    }else{
        mensaje="Error, verifique ingreso.";
    }
    $("#pCrearCol").html(mensaje);
}

//Crear nombre de usuario:
function crearNombreUsuario(name,lastName){
    let primeraLetra=name.charAt(0); //Se guarda la primera letra del nombre.
    let apellido=lastName;
    let usuario=primeraLetra+apellido;
    let usuarioFinal=usuario.toLowerCase();
    return usuarioFinal; //Retorna nombre de usuario.
}

//Crear contraseña:
function crearContraseña(name,lastName){
    let primeraLetra=name.charAt(0);
    let usuario=primeraLetra;
    usuario+="-";
    usuario+=lastName;
    let usuarioFinal=usuario.toLowerCase();
    return usuarioFinal;
}

//Buscar nombre de usuario:
function buscarUserName(pUser){
    let contNomUsuarios=0;

    //function que te cuente cuantos aalvez  ojo con aalavezota aalvez-1
    let nombreUsuario="";
    for(let i=0;i<usuarios.length;i++){//Recorre el Array de usuarios.
        let usuarioActual=usuarios[i];
        let nuevoString="";
        for(let x=0;x<pUser.length;x++){
            nuevoString += usuarioActual.UserName.charAt(x);
        }
        if(nuevoString===pUser){
            contNomUsuarios++;
            encontrado=true;
            nombreUsuario=nuevoString;
        }
    }
    if(contNomUsuarios>0){
        if(nombreUsuario===pUser){
            nombreUsuario+=contNomUsuarios;
        }
    }else{
        nombreUsuario=pUser;
    }
    return nombreUsuario;
}

//Crear receta (ADMINISTRADOR):
function crearRecetaA(){
    let mensaje="";
    let titulo=$("#txtTituloRecetaA").val();
    let tiempoPrep=$("#txtTiempoDePreparacionA").val();
    let procedimiento=$("#txtProcedimientoA").val();
    let foto=quitarFakePad($("#fileFotoA").val()); //Se llama a la función quitarFakePad.
    
    let autor=usuarioLogueado.UserName; //El autor de la receta será el nombre de usuario guardado en la variable global.
    let tituloValido = validarTitulo(titulo); //Se llama a la función validarTítulo.
        if(!tituloValido){
            mensaje+=`El título no cumple con los requisitos. <br>`;
        }
    let tiempoValido = validarTiempo(tiempoPrep); //Se llama a la función validarTiempo.
        if(!tiempoValido){
            mensaje+=`El tiempo no cumple con los requisitos. <br>`;
        }
    let procedimientoValido = validarProcedimiento(procedimiento); //Se llama a la función validarProcedimiento.
        if(!procedimientoValido){
            mensaje+=`El procedimiento no cumple con los requisitos. <br>`;
        }
    let imagenValida = validarImagen(foto); //Se llama a la función validarProcedimiento.
        if(!imagenValida){
        mensaje+=`Debe seleccionar un archivo de imagen (.jpg o .png).<br>`;
        }
    if(tituloValido && tiempoValido && procedimientoValido && imagenValida){
        let nuevaReceta=new Receta; //Se define la nueva receta.
        nuevaReceta.Codigo=codigoReceta;
        nuevaReceta.Titulo=titulo;
        nuevaReceta.TiempoPreparacion=tiempoPrep;
        nuevaReceta.Procedimiento=procedimiento;
        nuevaReceta.Imagen=foto;
        nuevaReceta.Autor=autor;
        nuevaReceta.TipoCreador=1;
        nuevaReceta.MeGusta=0;
        nuevaReceta.NoMeGusta=0;
        recetas.push(nuevaReceta); //Se agrega la nueva receta.
        codigoReceta++;//sumamos uno al acumulador de recetas.
        mensaje="Receta cargada correctamente.";
    }
    usuarioLogueado.CantRecetas++;
    $("#pCrearRecetaA").html(mensaje);
    $("#txtTituloRecetaA").val("");
    $("#txtTiempoDePreparacionA").val("");
    $("#txtProcedimientoA").val("");
    $("#fileFotoA").val(null);
    mostrarReceta();
}

//Crear receta (COLABORADORES):
function crearRecetaC(){
    let mensaje="";
    let titulo=$("#txtTituloRecetaC").val();
    let tiempoPrep=$("#txtTiempoDePreparacionC").val();
    let procedimiento=$("#txtProcedimientoC").val();
    let foto=quitarFakePad($("#fileFotoC").val());//Se llama a la función quitarFakePad.
    
    let autor=usuarioLogueado.UserName; //El autor de la receta será el nombre de usuario guardado en la variable global.
    let tituloValido = validarTitulo(titulo); //Se llama a la función validarTítulo.
        if(!tituloValido){
            mensaje+=`El título no cumple con los requisitos. <br>`;
        }
    let tiempoValido = validarTiempo(tiempoPrep); //Se llama a la función validarTiempo.
        if(!tiempoValido){
            mensaje+=`El tiempo no cumple con los requisitos. <br>`;
        }
    let procedimientoValido = validarProcedimiento(procedimiento); //Se llama a la función validarProcedimiento.
        if(!procedimientoValido){
            mensaje+=`El procedimiento no cumple con los requisitos. <br>`;
        }
    let imagenValida = validarImagen(foto); //Se llama a la función validarProcedimiento.
        if(!imagenValida){
            mensaje+=`Debe seleccionar un archivo de imagen (.jpg o .png).<br>`;
        }
    if(tituloValido && tiempoValido && procedimientoValido && imagenValida){
        let nuevaReceta=new Receta; //Se define la nueva receta.
        nuevaReceta.Codigo=codigoReceta;
        nuevaReceta.Titulo=titulo;
        nuevaReceta.TiempoPreparacion=tiempoPrep;
        nuevaReceta.Procedimiento=procedimiento;
        nuevaReceta.Imagen=foto;
        nuevaReceta.Autor=autor;
        nuevaReceta.TipoCreador=2;
        nuevaReceta.MeGusta=0;
        nuevaReceta.NoMeGusta=0;
        recetas.push(nuevaReceta); //Se agrega la nueva receta.
        codigoReceta++;//sumamos uno al acumulador de recetas.
        mensaje="Receta cargada correctamente.";
    }
    usuarioLogueado.CantRecetas++;
    $("#txtTituloRecetaC").val("");
    $("#txtTiempoDePreparacionC").val("");
    $("#txtProcedimientoC").val("");
    $("#fileFotoC").val(null);
    console.log(usuarios);
    $("#pCrearRecetaC").html(mensaje);
    mostrarColaboradores();
    mostrarReceta();
}

//Función para corregir nombre del archivo de imagen:
function quitarFakePad(pNombre){
    let nombreArchivo=pNombre;
    let i=nombreArchivo.length-1;
    let guion=0;
    let hayBarra=false;
    while(i>0&&!hayBarra){
        if(pNombre.charAt(i)==="\\" || pNombre.charAt(i)==="/"){
            hayBarra=true;
            guion=i;
        }
        i--;
    }
    if(hayBarra){
        nombreArchivo=pNombre.substr(guion);
    }
    return nombreArchivo;
}

//Función para validar que la imagen sea .jpg o .png.
function validarImagen(nombreImagen){
    let valida=false;
    let nuevoString="";
    let largo=nombreImagen.length
    for(let i=0;i<largo;i++){
        nuevoString+=nombreImagen.charAt(i);
    }
    let posPunto=largo-4;
    let subCadena=nuevoString.substr(posPunto)
    if (subCadena===".jpg" || subCadena===".png"){
        valida=true;
    }
    return valida;
}

//Función para validar título de la receta:
function validarTitulo(pTitulo){
    let cumple = false;
    if (pTitulo.trim().length > 0 && isNaN(pTitulo)){
        cumple = true;
    }
    return cumple;
}

//Función para validar tiempo de la receta:
function validarTiempo(pTiempo){
    let cumple = false;
    if (pTiempo.trim().length > 0 && !isNaN(pTiempo)){
        cumple = true;
    }
    return cumple;
}

//Función para validar procedimiento de la receta:
function validarProcedimiento(pProcedimiento){
    let cumple = false;
    let largo = pProcedimiento.length-1;
    if(largo <= 150 && isNaN(pProcedimiento)){
        cumple = true;
    }
    return cumple;
}

//Función que realizará la búsqueda:
function buscar(){
    $("#divMostrarRecetaBuscada").empty();
    let listaCodigos= new Array();//se crea el array de codigos de recetas encontrados
    let mensaje="";
    let palabra=$("#txtSearch").val(); //se toma la palabra buscada desde el html
    if(palabra.trim().length>0){
        palabra=palabra.toLowerCase(); //se convierte la palabra a minuscula
        listaCodigos=listaEncontrardasEnRecetas(palabra);// se llama a la funcion llevando la palabra buscada
        if(listaCodigos.length>0){
            for(let i=0;i<listaCodigos.length;i++){
                codigoActual=listaCodigos[i];
                mostrarRecetaPorCodigo(codigoActual);
            }
            $("#pIngreso").empty();
            $("#divUsuarioFinal").hide();
            $("#divMostrarRecetaBuscada").show();
            $("#btnVolver").show();
        }else{
            mensaje="No se han encontrado resultados."
            $("#pIngreso").html(mensaje);
            $("#divMostrarRecetaBuscada").hide();
            $("#divUsuarioFinal").show();
        }
        
    }else{
        mensaje="Error, verifique datos ingresados para búsqueda."
        $("#pIngreso").html(mensaje);
    }
}

function listaEncontrardasEnRecetas(palabra){
    let codigosBusqueda=new Array(); // se crea array
    for(let i=0;i<recetas.length;i++){
        let recetaActual=recetas[i];
        compararPalabraAPalabra(palabra,recetaActual.Titulo,recetaActual.Codigo,codigosBusqueda);//Se llamará a la función compararPalabraAPalabra.
        let palabrasProcedimiento = recetaActual.Procedimiento.split(" ");// separo las palabras del procedimiento en un array para facilitar el debuggueo.
        for(let i = 0; i< palabrasProcedimiento.length; i++){
            compararPalabraAPalabra(palabra,palabrasProcedimiento[i],recetaActual.Codigo,codigosBusqueda);
        }
    }
    return codigosBusqueda;
}

//Función que comparará palabras al realizar la búsqueda.
function compararPalabraAPalabra (palabraBuscada, palabraAComparar,codigo,codigosBusqueda){
    let banderaBusqueda;
    let itePalabraAComparar=0 
    let buscarmas = true;
    while(buscarmas && itePalabraAComparar<palabraAComparar.length){
        let itePalabra=0;
        let iteAux = itePalabraAComparar;
        banderaBusqueda = true;
        while(banderaBusqueda && iteAux < palabraAComparar.length && itePalabra < palabraBuscada.length){
            let carPalabraAComparar=palabraAComparar.charAt(iteAux);
            let carPalabra=palabraBuscada.charAt(itePalabra);
            carPalabraAComparar=carPalabraAComparar.toLowerCase();
            if(carPalabra!==carPalabraAComparar){
                //no cumple
                banderaBusqueda =false;
            }
            itePalabra++;
            iteAux++;
        }
        //preguntar porque salí
        if(itePalabra == palabraBuscada.length && banderaBusqueda){
            //recorrí toda la palabra
            buscarmas = false;
            valida=true;//al pedooo
            //encontre push
            let i=0;
            yaEsta=false;
            while(i<codigosBusqueda.length&&!yaEsta){
                let codigoActual=codigosBusqueda[i];
                if(codigoActual==codigo){
                    yaEsta=true;
                }
                i++;
            }
            if(!yaEsta){
                codigosBusqueda.push(codigo);
            }
        }
        itePalabraAComparar++;
        
    }
}

//Función que mostrará las recetas coincidentes con la búsqueda.
function mostrarRecetaPorCodigo(codigo){
    let informacion="";
    recetas.sort(criterioDeOrdenCodigo);
    recetas.sort(criterioDeOrdenCreador);
    for(let i=0;i<recetas.length;i++){
        let recetaActual=recetas[i];
        if(recetaActual.Codigo===codigo){
            informacion+=`<div class="recetas">
            <div id="titulo"> <h2>${recetaActual.Titulo}</h2> </div> <br>
            <div id="${recetaActual.Codigo}receta" class="numero"><b>Receta Nº${recetaActual.Codigo}</b></div> <br>
            <div id="tiempo"> Tiempo de preparación: <b>${recetaActual.TiempoPreparacion} minutos.</b></div> <br>
            <div id="imagen"> <img src="Imagenes/${recetaActual.Imagen}"/> </div> <br>
            <div id="procedimiento"> <b>Procedimiento:</b> <br>${recetaActual.Procedimiento} </div> <br>
            <div id="autor"> Autor: <b>${recetaActual.Autor}</b> </p> <br>
            <input type="button" class="botonesMG" id="${recetaActual.Codigo}MG" value="&#128077" />
            <input type="button" class="botonesNMG" id="${recetaActual.Codigo}NMG" value="&#128078"/>
            <div id="divLikes"> <span>${recetaActual.MeGusta}</span> <span>${recetaActual.NoMeGusta}</span></div> <br>
            </div>`
        }
    }
    $("#divMostrarRecetaBuscada").append(informacion);
    $(".botonesMG").click(clickEnMG);
    $(".botonesNMG").click(clickEnNMG);
}


//Reportes

//Criterio de orden por tiempo.
function criterioDeOrdenParaReportes(pRecetaA, pRecetaB){
    let orden=0;
    if(pRecetaA.TiempoPreparacion>pRecetaB.TiempoPreparacion){
        orden=-1;
    }
    if(pRecetaA.TiempoPreparacion<pRecetaB.TiempoPreparacion){
        orden=1;
    }
    return orden;
}

//Criterio de orden por rendimiento.
function criterioDeOrdenParaReporteRendimiento(pRecetaA,pRecetaB){
    let orden=0;
    if(pRecetaA.porcentaje>pRecetaB.porcentaje){
        orden=-1;
    }
    if(pRecetaA.porcentaje<pRecetaB.porcentaje){
        orden=1;
    }
    return orden;
}

//Función que mostrará las recetas con mayor tiempo.
function reporteRecetasMayorTiempo(){
    let informacion="";
    recetas.sort(criterioDeOrdenParaReportes);
    for(let i=0;i<3;i++){
        let recetaActual=recetas[i];
        informacion+=`${recetaActual.Titulo} - ${recetaActual.TiempoPreparacion} Minutos. <br>`;
    }
    $("#pMayorDuracion").html(informacion);
}

//Función que mostrará las recetas con mayor rendimiento.
function reporteDeRendimiento(){
    let informacion=[];
    for(let i=0;i<recetas.length;i++){
        let recetaActual=recetas[i];
        let mg=recetaActual.MeGusta;
        let nmg=recetaActual.NoMeGusta;
        let total=mg+nmg;  
        let porcentaje=mg*100/total;
        porcentaje=Number.parseInt(porcentaje);
        informacion.push({titulo:recetaActual.Titulo,porcentaje:porcentaje});
    }
    informacion.sort(criterioDeOrdenParaReporteRendimiento);
    let mensaje=`Recetas con Mayor Rendimiento: <br>`;
    for(let i=0;i<=5;i++){
        let recetaX=informacion[i];
        mensaje+=`Receta ${recetaX.titulo}: ${recetaX.porcentaje}%.<br>`
    }
    $("#pRendimientoRecetas").html(mensaje);
}

//Función que mostrará cuantas recetas duran exactamente el tiempo buscado y cuántas duran más.
function mostrarReporteTiempo(){
    let mensaje="";
    let contadorRecetasMasTiempo=0;
    let contadorRecetasTiempo=0;
    let num=$("#txtReporteTiempo").val();
    if(num.trim().length>0&&!isNaN(num)){
        num=Number.parseInt(num);
        for (let i=0;i<recetas.length;i++){
            let recetaX=recetas[i];
            if(recetaX.TiempoPreparacion==num){
                contadorRecetasTiempo++;
            }
            if(recetaX.TiempoPreparacion>num){
                contadorRecetasMasTiempo++;
            }
        }
        mensaje=`Hay ${contadorRecetasTiempo} recetas que tardan exactamente ${num} minutos. <br>`
        mensaje+=`Hay ${contadorRecetasMasTiempo} recetas que tardan más de ${num} minutos.`
    }else{
        mensaje="Debe ingresar un número de minutos.";
    }
    $("#pDuracionEnMin").html(mensaje)
}
