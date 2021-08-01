const urlBase = 'https://ort-tallermoviles.herokuapp.com/api/';
let token;
let myNavigator;
let menu;
let activeUser;

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
    //FALTA VALIDAR!!!
    let isValid = false;
    isValid = true;
    return isValid;
}

// APELLIDO VALIDO
function validateLastName(lastname){
    //FALTA VALIDAR!!!
    let isValid = false;
    isValid = true;
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
    navigate("login", true);
}

// TRAER PRODUCTOS
async function getProducts() {
    if(token){
        await $.ajax({
            url: urlBase + '/productos',
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
    console.log(json.data.length);
    if (json.data.length > 0){
        for (let i=0; i <= json.data.length; i++){
            $("#homeProducts").append("<ons-card>");
            $("#homeProducts").append(`<img src='${json.data[i].urlImagen}' alt=' ${json.data[i].nombre}  style='width: 100%'>`);
            $("#homeProducts").append(`<div class='title'>${json.data[i].nombre}</div>`);
            $("#homeProducts").append(`<div class='content'><div>`);
            $("#homeProducts").append(`<ons-button onclick="viewDetail('${json.data[i]._id}')"><ons-icon icon='ion-ios-share'></ons-icon></ons-button>`);
            $("#homeProducts").append(`<ons-button onclick="addFavourite('${json.data[i]._id}')"><ons-icon icon='ion-ios-thumbs-up"'></ons-icon></ons-button>`);
            $("#homeProducts").append(`</div>`);
            $("#homeProducts").append(`</div>`);
            $("#homeProducts").append(`</ons-card>`);
        }
    }
}





