const urlBase = 'https://ort-tallermoviles.herokuapp.com/api/';
let token;
let myNavigator;
let menu;
let activeUser;
let activePage;

//AL INICIAR
ons.ready(getActiveUser);

//BUSCA USUARIO ACTIVO
async function getActiveUser() {
    if (token === null || token === undefined){
        getToken();
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
            },
            
            error: showError
            
        })
    }
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
    }
}

//MOSTRAR ERROR
function showError(json) {
    let status = json.status;
    if (status === 400) {
        $('#message').html('Verifique los datos ingresados');
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
        $('#message').html(Error.message);
    }
}

// NOMBRE VALIDO
function validateName(name){
    let isValid = false;
    if(name.length.trim() > 0 && isNaN(name.trim())){
        isValid = true;
    }
    return isValid;
}

// APELLIDO VALIDO
function validateLastName(lastname){
    let isValid = false;
    if(lastname.length.trim() > 0 && isNaN(lastname.trim())){
        isValid = true;
    }
    return isValid;
}

// EMAIL VALIDO
function validateEmail(email){
    //FALTA VALIDAR!!!
    let isValid = false;
    isValid = true;
    return isValid;
}

// DIRECCION VALIDA
function validateAddress(address){
    //FALTA VALIDAR!!!
    let isValid = false;
    isValid = true;
    return isValid;
}

// PASSWORD VALIDO
function validatePassword(password){
    //FALTA VALIDAR!!!
    let isValid = false;
    isValid = true;
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
            },

            error: showError
        })

    }catch(Error){
        $('#message').html(Error.message);
    }
}

// LOGOUT
function logOut() {
    localStorage.removeItem("token");
    token = null;
    navigate("login", true);
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
        if (json.data.length > 0){
            for (let i=0; i < json.data.length; i++){
                $("#homeProducts").append("<ons-card>");
                $("#homeProducts").append(`<img src='https://ort-tallermoviles.herokuapp.com/assets/imgs/${json.data[i].urlImagen}.jpg' alt='${json.data[i].nombre}'  style='width: 100%'>`);
                $("#homeProducts").append(`<div class='title'>${json.data[i].nombre}</div>`);
                $("#homeProducts").append(`<div class='content'><div>`);
                $("#homeProducts").append(`<ons-button onclick="viewDetails('${json.data[i]._id}')"><ons-icon icon='ion-ios-list'></ons-icon></ons-button>`);
                $("#homeProducts").append(`<ons-button onclick="addFavorite('${json.data[i]._id}')"><ons-icon icon='ion-ios-star'></ons-icon></ons-button>`);
                // $("#homeProducts").append(`<ons-button onclick="buyProduct('${json.data[i]._id}')"><ons-icon icon='ion-ios-card'></ons-icon></ons-button>`);
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
        success: function (json) {
            $("#detail").append(`<img src='https://ort-tallermoviles.herokuapp.com/assets/imgs/${json.data.urlImagen}.jpg' alt='${json.data.nombre}'  style='width: 100%'>`);
            $("#detail").append(`${json.data.nombre}`);
            $("#detail").append("<ons-list>Detalles");
            $("#detail").append(`<ons-list-item> ${json.data.descripcion}: $${json.data.precio} </ons-list-item>`);
            $("#detail").append(`<ons-list-item> Estado: ${json.data.estado}. </ons-list-item>`);
            $("#detail").append(`<ons-list-item> Calificación: ${json.data.puntaje}. </ons-list-item>`);
            if (json.data.estado === 'en stock'){
                $("#detail").append(`<ons-list-item><ons-button onclick="buyProduct('${json.data._id}')"><ons-icon icon='ion-ios-card'></ons-icon></ons-button></ons-list-item>`);
            }
            $("#detail").append("</ons-list>");
        },
        error: showError
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
            timeout: 2000
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

