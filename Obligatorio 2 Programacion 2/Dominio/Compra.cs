using System;
using System.Collections.Generic;
using System.Text;

namespace Dominio
{
    public class Compra : IComparable<Compra>
    {
        private int idCompra;
        private int ultId = 1;
        private int pasajerosMayores;
        private int pasajerosMenores;
        private double montoCompra;
        private DateTime fechaCompra;
        private Usuario usuarioComprador;
        private Excursion excursionComprada;

        public int IdCompra
        {
            get { return idCompra; }
            set { idCompra = value; }
        }

        public int PasajerosMayores
        {
            get { return pasajerosMayores; }
            set { pasajerosMayores = value; }
        }

        public int PasajerosMenores
        {
            get { return pasajerosMenores; }
            set { pasajerosMenores = value; }
        }


        public double MontoCompra
        {
            get { return montoCompra; }
            set { montoCompra = value; }
        }

        public DateTime FechaCompra
        {
            get { return fechaCompra; }
            set { fechaCompra = value; }
        }

        public Usuario UsuarioComprador
        {
            get { return usuarioComprador; }
            set { usuarioComprador = value; }
        }

        public Excursion ExcursionComprada
        {
            get { return excursionComprada; }
            set { excursionComprada = value; }
        }

        
        public Compra(int pasajerosMayores, int pasajerosMenores, double montoCompra, DateTime fechaCompra, Usuario usuario, Excursion excursion)
        {
            this.IdCompra = ultId;
            this.PasajerosMayores = pasajerosMayores;
            this.PasajerosMenores = pasajerosMenores;
            this.MontoCompra = montoCompra;
            this.FechaCompra = fechaCompra;
            this.UsuarioComprador = usuario;
            this.ExcursionComprada = excursion;
            ultId++;
        }


        public int CompareTo(Compra other)
        {

            if (fechaCompra < other.fechaCompra)
            {
                return fechaCompra.CompareTo(other.fechaCompra);

            }
            return fechaCompra.CompareTo(other.fechaCompra);

        }



    }
}
