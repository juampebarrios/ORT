using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Dominio;

namespace Obligatorio.Controllers
{
    public class ExcursionController : Controller
    {

        Agencia unaA = Agencia.Instancia;

        [HttpGet]
        public ActionResult Index()
        {
            ViewBag.Excursiones = unaA.Excursiones();
            return View();
        }

        
        [HttpGet]   
        public ActionResult CompraExcursiones(int idEx)
        {

            ViewBag.Excursiones = unaA.ExcursionesID(idEx);
            ViewBag.Id = idEx;
            return View("Index");

        }

        [HttpGet]
        public ActionResult CompraExcursionesDetalle(int idEx)
        {

            ViewBag.Excursion = unaA.ExcursionesID(idEx);
            ViewBag.Id = idEx;
            ViewBag.Monto = unaA.montoExcursion(idEx);
            return View();

        }


        [HttpPost]
        public ActionResult CompraExcursionesDetalle(int idEx, int mayores, int menores, double monto, DateTime fechaCompra)
        {

            unaA.comprarExcursion(mayores, menores, monto, fechaCompra, (string)Session["nombre"], idEx);
            
            return View();

        }
    }



    
}