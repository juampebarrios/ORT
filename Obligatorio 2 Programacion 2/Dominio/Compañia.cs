using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio
{
    public class Compañia
    {
        #region atributos
        private int id = 0;
        private static int ultId = 0;
        private string nombre;
        private string pais = "";
        #endregion
        #region properties
        public int Id() { return id; }
      
        public string Pais() { return pais; }
        public string Nombre() { return nombre; }
     
        #endregion

        #region Constructor
        public Compañia(string nombre, string pais)
        {
            this.id = +ultId;
            this.nombre = nombre;
            this.pais = pais;
            ultId = id;
        }

        #endregion

        public override string ToString()
        {
            return nombre + " " + pais;
        }


    }
}
