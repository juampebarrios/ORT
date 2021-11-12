using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Dominio;

namespace Obligatorio.Controllers
{
    public class UsuarioController : Controller
    {

        Agencia unaA = Agencia.Instancia;

        [HttpGet]
        public ActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Login(int cedula, string password)
        {
            Usuario unU = unaA.BuscarCedulaPassword(cedula, password);
            if (unU == null)
            {
                ViewBag.Mensaje = "<div class='alert alert-danger'>No se encontraron coincidencias. Intente nuevamente.</div>";
                ViewBag.mensaje = "puto";
                return View();
            }
            else
            {
                if (unU.Rol == "Cliente")
                {
                    Session["rol"] = unU.Rol;
                    Session["nombre"] = unU.Nombre;
                    return Redirect("/Agencia/Index");
                }
                else
                {
                    Session["rol"] = unU.Rol;
                    Session["nombre"] = unU.Nombre;
                    return Redirect("/Agencia/Index");
                }
            }
        }

        [HttpGet]
        public ActionResult Registro()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Registro(string nombre, string apellido, string password, int cedula, string rol)
        {

            Usuario unU = unaA.BuscarUsuario(cedula);
            if (unU != null)
            {
                ViewBag.Mensaje = "<div class='alert alert-danger'>Este usuario ya está registrado.</div>";
                ViewBag.Nombre = nombre;
                ViewBag.Apellido = apellido;
            }
            else
            {
                bool usuarioValido = unaA.ValidaUsuario(nombre, apellido, password, cedula, rol);
                if (usuarioValido == true)
                {
                    ViewBag.Mensaje = "<div class='alert alert-success'>Usuario registrado correctamente.</div>";

                }
                else
                {
                    ViewBag.Mensaje = "<div class='alert alert-danger'>Verifique los campos ingresados.</div>";
                }
            }
            return View();
        }

        [HttpGet]
        public ActionResult Logout()
        {
            Session.Abandon();
            return Redirect("/Usuario/Login");
        }

        [HttpGet]
        public ActionResult MostrarClientes()
        {
            ViewBag.Clientes = unaA.usuariosClientes();
            return View();
        }
    }
}