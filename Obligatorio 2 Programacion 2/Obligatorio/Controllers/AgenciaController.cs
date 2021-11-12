using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Dominio;

namespace Obligatorio.Controllers
{
    public class AgenciaController : Controller
    {
        Agencia unaA = Agencia.Instancia;

        // GET: Excursion
        public ActionResult Index()
        {
            ViewBag.Excursiones = unaA.Excursiones();
            return View();
        }

    }
}