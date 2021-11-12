using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio
{
    public class Destino
    {
        #region atributos
        private string ciudad = "";
        private string pais = "";
        private int dias = 0;
        private double costoDiario = 0;
        #endregion
        #region
        public string Ciudad() { return ciudad; }

        public string Pais() { return pais; }

        public int Dias() { return dias; }

        public double CostoDiario() { return costoDiario; }
       
        #endregion

    #region Constructor
        public Destino(string ciudad, string pais, int dias, double costoDiario)
        {
            this.ciudad = ciudad;
            this.pais = pais;
            this.dias = dias;
            this.costoDiario = costoDiario;
        }
        #endregion
        #region ToString
        public override string ToString()
        {
            return ciudad + ", " + pais + " " + dias + " días" + " -  " + "U$S " + costoDiario;
        }
        #endregion
        #region Metodos
        public static bool verificarString3Char(string dato)  // verificar en destinos si los paises y ciudades tienen mas de 3 caracteres
        {
            bool exito = false;
            if (dato.Length > 3)
            {
                exito = true;
            }

            return exito;
        }

        public static bool verificarPositivos(int dias, double costoDiario) // para verificar costo y dias como positivos
        {
            bool exito = false;
            if (dias > 0 && costoDiario > 0)
            {
                exito = true;
            }

            return exito;
        }

     
        #endregion

    }
}
