using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Dominio;

namespace Obligatorio.Controllers
{
    public class CompraController : Controller
    {
        Agencia unaA = Agencia.Instancia;

        [HttpGet]
        public ActionResult ListarExcursionesMenor()
        {
            ViewBag.Compras = unaA.ExcursionesMenores();

            return View();
        }
    }
}