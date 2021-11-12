using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio
{
    public abstract class Excursion
    {
        #region atributos
        private int id = 0;
        private static int ultId = 900;
        private string descripcion = "";
        private DateTime fechaComienzo;
        private DateTime fechaFin;
        private List<Destino> destinos = new List<Destino>();
        private int diasTraslado = 0;
        private int stock = 0;

        #endregion
        #region Properties

        public int Id() { return id; }
        public string Descripcion() { return descripcion; }
        public DateTime FechaComienzo() { return fechaComienzo; }
        public DateTime FechaFin() { return fechaFin; }
        public List<Destino> Destinos() { return destinos; }
        public int DiasTraslado() { return diasTraslado; }

        public int Stock() { return stock; }
        #endregion
        #region Constructor
        public Excursion(string descripcion, DateTime fechaComienzo, DateTime fechaFin, List<Destino> destinos, int diasTraslado, int stock)
        {
            this.id = 100 + ultId;
            this.descripcion = descripcion;
            this.fechaComienzo = fechaComienzo;
            this.fechaFin = fechaFin;
            this.destinos = destinos;
            this.diasTraslado = diasTraslado;
            this.stock = stock;
            ultId = id;
        }
        #endregion
        #region Metodos
        public string MostrarListaDestinos(List<Destino> listaDestinos)
        {
            string destinos = "";
            int cantDestinos = listaDestinos.Count;
            int i = 0;
            while (i < cantDestinos)
            {
                string destinoActual = listaDestinos[i].Ciudad();
                destinos += destinoActual + " - ";
                i++;
            }
            return destinos;
        }
        public double CostoExcursion()
        {
            double CostoDolares = 0;
            foreach (Destino destino in destinos)
            {
                CostoDolares += destino.CostoDiario();
            }
            return CostoDolares;
        }


        #endregion
        #region ToString
        public override string ToString()
        {
            return "ID: " + id + "\n" + 
            "Descripción: " + descripcion + "\n" + 
            "Fecha de comienzo: " + fechaComienzo + "\n" + "Fecha de Fin: " + fechaFin + "\n" + "Ciudades: " + MostrarListaDestinos(destinos) + "\n" + "Días de traslado: " + diasTraslado + "\n" + "Stock disponible: " + stock + " lugares" + "\n";
        }
        #endregion

    }


}