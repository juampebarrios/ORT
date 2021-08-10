const urlBase = 'https://ort-tallermoviles.herokuapp.com/api/';
const urlMapa = 'https://nominatim.openstreetmap.org/search?format=json&q=';
let token;
let myNavigator;
let menu;
let activeUser;
let activePage;
let storeName;
let actualPlace;
let latitudOrigen;
let longitudOrigen;

//AL INICIAR
ons.ready(getActiveUser);

//BUSCA USUARIO ACTIVO
async function getActiveUser() {
    if (token === null || token === undefined){
        getToken();
        hideItems();
    }
    if (token) {
        await $.ajax({
            
            url: urlBase + 'usuarios/session',
            type: 'GET',
            dataType: 'json',
            headers: {
                'x-auth': token
            },
            
            success: function (json) {
                activeUser = json.data._id;
                navigate('products', true);
                $("#itemProducts").show();
                $("#itemFavorites").show();
                $("#itemMycart").show();
                $("#itemSignup").hide();
                $("#itemLogin").hide();
                verificarConexion();
            },

            error: showError

        })
    }
    navigator.geolocation.getCurrentPosition(GuardarUbicacionActual, showError);
}

//GUARDAMOS UBICACION DEL USUARIO
function GuardarUbicacionActual(position){
    latitudOrigen=position.coords.latitude;
    longitudOrigen=position.coords.longitude;
}

//OCULTAR DIVS PARA USUARIOS NO LOGUEADOS
function hideItems(){
    $("#itemProducts").hide();
    $("#itemFavorites").hide();
    $("#itemMycart").hide();
}

//OBTENER TOKEN
function getToken(){
    token = localStorage.getItem('token');
}

//ABRIR MENÚ
function openMenu() {
    let myMenu = document.querySelector('#menu');
    myMenu.open();
    menu = true;
}

//CERRAR MENÚ
function closeMenu() {
    let myMenu = document.querySelector('#menu');
    myMenu.close();
    menu = false;
}

//REDIRIGE A PAGINA
function navigate(pageToGo, resetStack, data) {
    myNavigator = document.querySelector('#myNavigator');
    if (resetStack) {
        myNavigator.resetToPage(`${pageToGo}.html`);
    }
    else {
        myNavigator.pushPage(`${pageToGo}.html`, data);
    }
    if (menu) {
        closeMenu();
    }
    switch(pageToGo){
        case 'login':
            activePage = 'login';
            break;
        case 'signUp':
            activePage = 'signUp';
            break;
        case 'products':
            activePage = 'products';
            break;
        case 'favorites':
            activePage = 'favorites';
            break;
        case 'mycart' :
            activePage = 'mycart';
            break;
    }
}

//MOSTRAR ERROR
function showError(json) {
    let status = json.status;
    if (status === 400) {
        ons.notification.toast('Algo salió mal!');
    }
}

// REGISTRARSE
async function signUp() {
    $('#message').html('');
    let name = $('#txtName').val();
    let lastname = $('#txtLastName').val();
    let email = $('#txtEmail').val();
    let address = $('#txtAddress').val();
    let password = $('#txtPassword').val();

    try{

        if(!validateName(name)){
            throw new Error ("Verifique nombre");
        }

        if(!validateLastName(lastname)){
            throw new Error ("Verifique apellido");
        }
        
        if(!validateEmail(email)){
            throw new Error ("Verifique email");
        }

        if(!validateAddress(address)){
            throw new Error ("Verifique dirección");
        }
        
        if(!validatePassword(password)){
            throw new Error ("Verifique contraseña");
        }

        let data = { nombre: name, apellido: lastname, email: email, direccion: address, password: password };
    
        await $.ajax({
            url: urlBase + "usuarios",
            type: "POST",
            datatype: "JSON",
            contentType: "application/json",
            data: JSON.stringify(data),

            success: function (json) {
                ons.notification.alert("Alta exitosa");
            },

            error: showError
        })

    }catch(Error){
        ons.notification.alert(Error.message);
    }
}

// NOMBRE VALIDO
function validateName(name){
    let isValid = false;
    if(name.trim().length > 0 && isNaN(name.trim())){
        isValid = true;
    }
    return isValid;
}

// APELLIDO VALIDO
function validateLastName(lastname){
    let isValid = false;
    if(lastname.trim().length > 0 && isNaN(lastname.trim())){
        isValid = true;
    }
    return isValid;
}

// EMAIL VALIDO
function validateEmail(email){
    //FALTA VALIDAR!!!
    let isValid = false;
    let regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (regex.test(email)) {
        isValid = true;
    }
    return isValid;
}

// DIRECCION VALIDA
function validateAddress(address){
    let isValid = false;
    if(address.trim().length > 0){
        isValid = true;
    }
    return isValid;
}

// PASSWORD VALIDO
function validatePassword(password){
    let isValid = false;
    if(password.trim().length >= 8){
        isValid = true;
    }
    return isValid;
}

// LOGIN
async function logIn() {
    let email = $("#txtUserEmail").val();
    let password = $("#txtUserPassword").val();
    
    try{
        if(!validateEmail(email)){
            throw new Error ("Verifique email");
        }

        if(!validatePassword(password)){
            throw new Error ("Verifique contraseña");
        }

        let data = { email: email, password: password };
        
        await $.ajax({
            url: urlBase + "/usuarios/session",
            type: "POST",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(data),

            success: function (json) {
                localStorage.setItem("token", json.data.token);
                getActiveUser();
                $("#itemProducts").show();
                $("#itemFavorites").show();
                $("#itemMycart").show();
                $("#itemSignup").hide();
                $("#itemLogin").hide();
            },

            error: showError
        })

    }catch(Error){
        ons.notification.toast(Error.message, {
            timeout: 1500
        })
    }
}

// LOGOUT
function logOut() {
    localStorage.removeItem("token");
    token = null;
    navigate("login", true);
    hideItems();
    $("#itemSignup").show();
    $("#itemLogin").show();
}

// TRAER PRODUCTOS
async function getProducts() {
    if(token){
        await $.ajax({
            url: urlBase + 'productos',
            type: "GET",
            datatype: "json",
            contentType: "application/json",
            headers: {
                "x-auth": localStorage.getItem("token")
            },
            success: showProducts,
            error: showError
        })
    }
}

// MOSTRAR PRODUCTOS
function showProducts(json){
    if (activePage === 'products'){
        $("#homeProducts").append(`<ons-input type='text' id="txtBuscarProducto" modifier="underbar" placeholder="Nombre del producto" float></ons-input>`);
        $("#homeProducts").append(`<ons-button onclick="buscarProductoPorNombre()" id="btnBuscar"><ons-icon icon='md-zoom-in'></ons-icon></ons-button>`);
        $("#homeProducts").append(`<ons-button onclick="filtroQR('btnQR')"><ion-icon name="qr-code"></ion-icon></ons-button>`);
        if (json.data.length > 0){
            for (let i=0; i < json.data.length; i++){
                $("#homeProducts").append("<ons-card>");
                $("#homeProducts").append(`<img src='https://ort-tallermoviles.herokuapp.com/assets/imgs/${json.data[i].urlImagen}.jpg' alt='${json.data[i].nombre}'  style='width: 100%'>`);
                $("#homeProducts").append(`<div class='title'>${json.data[i].nombre}</div>`);
                $("#homeProducts").append(`<div class='content'><div>`);
                $("#homeProducts").append(`<ons-button onclick="viewDetails('${json.data[i]._id}')"><ons-icon icon='ion-ios-list'></ons-icon></ons-button>`);
                $("#homeProducts").append(`<ons-button onclick="addFavorite('${json.data[i]._id}')"><ons-icon icon='ion-ios-star'></ons-icon></ons-button>`);
                $("#homeProducts").append(`</div>`);
                $("#homeProducts").append(`</div>`);
                $("#homeProducts").append(`</ons-card>`);
            }
        } 
    }
    if (activePage === 'favorites'){
        $("#homeFavorites").append("<ons-card>");
        $("#homeFavorites").append(`<img src='https://ort-tallermoviles.herokuapp.com/assets/imgs/${json.data.urlImagen}.jpg' alt='${json.data.nombre}'  style='width: 100%'>`);
        $("#homeFavorites").append(`<div class='title'>${json.data.nombre}</div>`);
        $("#homeFavorites").append(`<div class='content'><div>`);
        $("#homeFavorites").append(`<ons-button onclick="viewDetails('${json.data._id}')"><ons-icon icon='ion-ios-list'></ons-icon></ons-button>`);
        $("#homeFavorites").append(`<ons-button onclick="deleteFavorite('${json.data._id}')"><ons-icon icon='ion-ios-remove-circle-outline'></ons-icon></ons-button>`);
        // $("#homeFavorites").append(`<ons-button onclick="buyProduct('${json.data._id}')"><ons-icon icon='ion-ios-card'></ons-icon></ons-button>`);
        $("#homeFavorites").append(`</div>`);
        $("#homeFavorites").append(`</div>`);
        $("#homeFavorites").append(`</ons-card>`);
    }
    if (activePage === 'mycart'){
        if (json.data.length > 0){
            for (let i=0; i < json.data.length; i++){
                let precioTotalXProducto = json.data[i].total * json.data[i].cantidad;
                $("#homeCart").append("<ons-card>");
                $("#homeCart").append(`<img src='https://ort-tallermoviles.herokuapp.com/assets/imgs/${json.data[i].producto.urlImagen}.jpg' alt='${json.data[i].nombre}'  style='width: 100%'>`);
                $("#homeCart").append(`<div class='title'>${json.data[i].producto.nombre}</div>`);
                $("#homeCart").append(`<div class='content'>`);
                $("#homeCart").append(`<ons-list-item>Sucursal de retiro: ${json.data[i].sucursal.nombre}</ons-list-item>`);
                $("#homeCart").append(`<ons-list-item>Precio total: ${precioTotalXProducto}</ons-list-item>`);
                $("#homeCart").append(`<ons-list-item>Estado del pedido: ${json.data[i].estado}</ons-list-item>`);
                if(json.data[i].estado === "pendiente"){
                    $("#homeCart").append(`<ons-button onclick="changeProductStatus('${json.data[i]._id}')">Comentar</ons-button>`);
                }
                $("#homeCart").append(`</div>`);
                $("#homeCart").append(`</ons-card>`);
            }
        }
    }
}

//BUSCAMOS PRODUCTO POR NOMBRE
async function buscarProductoPorNombre(){
    let nombre = $("#txtBuscarProducto").val();
    await $.get({
        url: urlBase + 'productos' + '?nombre=' + nombre,
        type: "GET",
        datatype: "json",
        contentType: "application/json",
        headers: {
            "x-auth": token
        },
        success: function(json){
            if(nombre.trim().length>0){
                if(json.data.length>0){
                    console.log(json);
                    $("#homeProducts").empty();
                    showProducts(json);
                }
            }else{
                ons.notification.toast('No ha ingresado ningún nombre'), {
                    timeout:1500
                }
            }
        },
        
        error: showError
    })

}



// VER DETALLES
function viewDetails(idProduct){
    navigate("detailsProduct", false, data = { idProduct: idProduct });
}

// OBTENER DETALLES
async function getDetails(){
    await $.ajax({
        url: urlBase + 'productos/' + data.idProduct,
        type: "GET",
        dataType: "json",
        headers: {
            "x-auth": token
        },
        success: async function (json) {
            $('#detail').append(`<ons-card>`)
            $("#detail").append(`<div class='title'> ${json.data.nombre} </div>`);
            $("#detail").append(`<img src='https://ort-tallermoviles.herokuapp.com/assets/imgs/${json.data.urlImagen}.jpg' alt='${json.data.nombre}'  style='width: 100%'>`);
            $('#detail').append(`</ons-card>`)
            $("#detail").append("<ons-list>Detalles");
            $("#detail").append(`<ons-list-item> ${json.data.descripcion}: $${json.data.precio} </ons-list-item>`);
            $("#detail").append(`<ons-list-item> Estado: ${json.data.estado}. </ons-list-item>`);
            $("#detail").append(`<ons-list-item> Calificación: ${json.data.puntaje}. </ons-list-item>`);
            $("#detail").append("</ons-list>");
            if (json.data.estado === 'en stock'){
                $("#detail").append("<ons-list>Comprar:");
                $("#detail").append(`<ons-list-item>Seleccionar sucursal:</ons-list-item>`);
                $("#detail").append(`<ons-list-item><ons-select select-id='selectPlace'></ons-select></ons-list-item>`);
                $("#detail").append(`<ons-list-item>Seleccionar cantidad:</ons-list-item>`);
                $("#detail").append(`<ons-list-item><ons-input type='number' id="txtTotalOrder" modifier="underbar" placeholder="Cantidad" float></ons-input></ons-list-item>`);
                $("#detail").append(`<ons-list-item><ons-button onclick="buyProduct('${json.data._id}')"><ons-icon icon='ion-ios-card'></ons-icon></ons-button></ons-list-item>`);
                $("#detail").append("</ons-list>");
                await loadPlaces();
            }
            
            let map = L.map('mapId').setView([latitudOrigen,longitudOrigen], 10);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);
            
            L.marker([latitudOrigen, longitudOrigen]).addTo(map)
                .bindPopup('Esta es su ubicación')
                .openPopup();
                actualPlace = $('#selectPlace').val();
                findStoreLocationById(actualPlace);
                await $.ajax({
                    url: urlMapa + storeName + ', Montevideo',
                    type: 'GET',
                    dataType: "Json",
                    success:function (json){
                        console.log(json)
                        if(json!=null && json.length>0){
                        let storeLatitud= json[0].lat;
                        let storeLength=json[0].lon;
                        let distancia=map.distance([latitudOrigen,longitudOrigen],[storeLatitud,storeLength]);
                        L.marker([storeLatitud,storeLength]).addTo(map)
                        .bindPopup("La distancia entre el dispositivo y el destino es de " + distancia + "metros")
                        .openPopup();
                    }
                },
                    error: showError

                })
        },
        error: showError
    })
}

$('#selectPlace').change(function(){
    getDetails();
})

//BUSCAR DIRECCION SELECCIONADA PARA UBICAR EN EL MAPA
async function findStoreLocationById(idStore){
    await $.get({
        url: urlBase + 'sucursales',
        datatype: "json",
        contentType: "application/json",
        headers: {
            "x-auth": token
        },
        success: function(json){
            let i=0;
            let locationFouded = false;
            while (i<json.data.length && !locationFouded){
                let actualLocation = json.data[i].direccion;
                if(json.data[i]._id === idStore){
                    storeName=actualLocation;
                    locationFouded = true;
                }
                i++;
            }
        },
        Error: showError
    })
}

// AGREGAR A FAVORITOS
function addFavorite(idProduct){
    let favoriteProducts = [];
    let contains = false;

    if (localStorage.getItem("favorites") != null) {
        favoriteProducts = JSON.parse(localStorage.getItem("favorites"));
    }
    if (favoriteProducts.length > 0) {
        favoriteProducts.find(function (value) {
            if (value.idProduct == idProduct && value.user == activeUser) {
                contains = true;
            }
        })

    }
    if(!contains){
        favoriteProducts.push({idProduct:idProduct,user:activeUser});
        localStorage.setItem("favorites",JSON.stringify(favoriteProducts));
        ons.notification.toast('Se agregó el producto a la lista de favoritos', {
            timeout: 1500
        })

    }
    else{
        ons.notification.toast('El producto ya está en la lista de favoritos', {
            timeout: 1500
        })
    }
}

// FUNCION PARA MOSTRAR FAVORITOS
async function getFavorites(){
    let favoriteProducts = localStorage.getItem('favorites');
    let list;
    
    if (favoriteProducts !== null){
        list = JSON.parse(favoriteProducts);
        
        for (i=0; i < list.length; i++){
            if (list[i].user === activeUser){
                await $.get({
                    url: urlBase + 'productos/' + list[i].idProduct,
                    dataType: "json",
                    headers: {
                        "x-auth": token
                    },
        
                    success: showProducts,
                    
                    error: showError
                })
            } 
        }
    }
}

//FUNCION PARA BORRAR FAVORITO
async function deleteFavorite(idProduct){
    let favoriteProducts = localStorage.getItem('favorites');
    let list;

    if (favoriteProducts != null){
        list = JSON.parse(favoriteProducts);
        let i = 0;
        while (i < list.length){
            if (list[i].user === activeUser && list[i].idProduct === idProduct){
                let actualElement = list.indexOf(list[i]);
                list.splice(actualElement, 1);
                localStorage.setItem("favorites",JSON.stringify(list));
                $('#homeFavorites').empty();
                ons.notification.toast('El producto fue eliminado de la lista de favoritos', {
                    timeout: 1500
                })
                await getFavorites();
            }
            i++;
        }
    }
}

// FUNCION PARA CARGAR SUCURSALES
async function loadPlaces(){
    await $.get({
        url: urlBase + 'sucursales',
        datatype: "json",
        contentType: "application/json",
        headers: {
            "x-auth": token
        },
        
        success: function(json){
            console.log(json);
            for (let i=0; i < json.data.length; i++){
                $('#selectPlace').append(`<option value='${json.data[i]._id}'>${json.data[i].nombre} - ${json.data[i].direccion}</option>`)
            }
        },

        error: showError
    })
}

//FUNCION PARA COMPRAR PRODUCTO
async function buyProduct(idProduct){
    let totalOrder = $('#txtTotalOrder').val();
    actualPlace = $('#selectPlace').val();

    let data = {cantidad: totalOrder, idProducto: idProduct, idSucursal: actualPlace};

    if (totalOrder.trim() > 0 && !isNaN(totalOrder)){
        await $.post({
            url: urlBase + 'pedidos',
            datatype: "json",
            contentType: "application/json",
            headers: {
                "x-auth": token
            },
            data: JSON.stringify(data),
            
            success: function(json){
                console.log(json);
                ons.notification.toast('Su compra ha sido exitosa!', {
                    timeout: 1500
                })
    
            error: showError
            }
        })
    }
}

//FUNCION PARA MOSTRAR PEDIDOS
async function getCart(){
    await $.get({
        url: urlBase + 'pedidos',
        datatype: "json",
        contentType: "application/json",
        headers: {
            "x-auth": token
        },

        success: showProducts,

        error: showError
    })
}

<<<<<<< Updated upstream
//ABRE CUADRO DE TEXTO PARA MANDAR COMENTARIO SI EL PEDIDO ESTA PENDIENTE
function modalDialog(idProduct){
        ons.notification.prompt('Ingrese su comentario')
        .then(function(input) {
        let message = input ? 'Su mensaje fue enviado correctamente: ' + input : 'No ha ingresado ningún mensaje!';
        ons.notification.alert(message);
        changeProductStatus(idProduct, input)
    });
}

//PEGADA A LA API PARA CAMBIAR ESTADO DEL PRODUCTO
 function changeProductStatus(idProduct, messageApi){
    let dataBody = {comentario: messageApi};
    
     $.ajax({
=======
// function modalDialog(idProduct){
//         ons.notification.prompt('Ingrese su comentario')
//         .then(function(input) {
//         let message = input ? 'Su mensaje fue enviado correctamente: ' + input : 'No ha ingresado ningún mensaje!';
//         ons.notification.alert(message);
//         let messageApi = input;
//         if(messageApi.trim().length > 0){
//             changeProductStatus(idProduct, messageApi);
//         }
//     });
// }

function changeProductStatus(idProduct){
    let comment = 'hola'
    let data = {comentario: comment};
    
    $.ajax({
>>>>>>> Stashed changes
        url: urlBase + 'pedidos/' + idProduct,
        type: "PUT",
        datatype: "json",
        contentType: "application/json",
        headers: {
<<<<<<< Updated upstream
            "x-auth": token
        },
        path:{
            "_id": idProduct
        },
        data: JSON.stringify(dataBody),

        success: function(json){
            $("#homeCart").empty();
            getCart();
        },
=======
            "x-auth": token,
            "id": idProduct
        },
        data: JSON.stringify(data),
        success: showProducts,
>>>>>>> Stashed changes

        error: function(json){
            console.log(json)
        }
    });
}

function filtroQR(){
    cordova.plugins.barcodeScanner.scan(
        function (result) {
             if(!result.cancelled){
                    if(result.format == "QR_CODE"){
                         let QRvalue = result.text;                          
                         console.log(QRvalue);
                         buscarPorQR();
                    }else{
                       alert("Ops, se escaneo un código pero al parecer no es QR");
                    }
             }else{
               alert("El usuario se ha saltado el escaneo.");
             }
          },
          function (error) {
               alert("Ha ocurrido un error: " + error);
          },
          
    {
        preferFrontCamera: false,
        showFlipCameraButton: false,
        torchOn: false,
      }
     );
}

//BUSCAR PRODUCTO POR QR
async function buscarPorQR(QRvalue){
    await $.get({
        url: urlBase + 'productos' + '?codigo=' + QRvalue,
        type: "GET",
        datatype: "json",
        contentType: "application/json",
        headers: {
            "x-auth": token
        },
        success: function(json){
            if(json.data.length>0){
                console.log(json);
                $("#homeProducts").empty();
                showProducts(json);
            }
        },
        error: showError,
    })
}

function verificarConexion(){
    if(navigator.connection.none){
        ons.notification.toast("No tiene internet", {timeout:1500 })
        haveConnection=false;
    }
    else{
        haveConnection=true;
    }
}
