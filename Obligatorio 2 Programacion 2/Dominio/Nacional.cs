using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio
{
    public class Nacional : Excursion
    {
        #region Atributos
        private bool interesNacional;
        #endregion
        #region Properties
        public bool InteresNacional() { return interesNacional; }
        
        #endregion
        #region Constructor
        public Nacional(bool interesNacional, string descripcion, DateTime fechaComienzo, DateTime fechaFin, List<Destino> destinos, int diasTraslado, int stock) : base(descripcion, fechaComienzo, fechaFin, destinos, diasTraslado, stock)
        {
            this.interesNacional = interesNacional;
        }
        #endregion
        #region Metodos
        public override string ToString()
        {
            string dato;
            if(interesNacional == true)
            {
                dato = "Es de interes Nacional.";
            }
            else
            {
                dato = "No es de interes Nacional.";
            }
            return base.ToString() + dato;
        }
        #endregion





    }




}
