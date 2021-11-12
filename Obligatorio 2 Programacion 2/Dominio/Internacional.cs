using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio
{
    public class Internacional : Excursion
    {
        #region Atributos
        private Compañia compañia;

        #endregion
        #region properties
        public Compañia Compañia() { return compañia; }
      

        #endregion
        #region Constructor
        public Internacional(Compañia compañia, string descripcion, DateTime fechaComienzo, DateTime fechaFin, List<Destino> destinos, int diasTraslado, int stock) : base(descripcion, fechaComienzo, fechaFin, destinos, diasTraslado, stock)
        {
            this.compañia = compañia;
        }
        #endregion

        #region Metodos
        public override string ToString()
        {
            return base.ToString() + compañia ; 
        }

        
        #endregion
    }
}
