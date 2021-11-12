using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Runtime.InteropServices.ComTypes;
using System.Text;
using System.Threading.Tasks;

namespace Dominio
{
    public class Agencia
    {
        #region Atributos
        private static Agencia instancia;
        private List<Excursion> excursiones = new List<Excursion>();
        private List<Destino> destinos = new List<Destino>();
        private List<Compañia> compañias = new List<Compañia>();
        private List<Usuario> usuarios = new List<Usuario>(); //lista de usuarios 
        private static double cotizacionDolar = 43.4;  // estaba en public 
        private List<Compra> compras = new List<Compra>();
        #endregion
        #region Properties          
        public List<Excursion> Excursiones() { return excursiones; }
        public List<Destino> Destinos() { return destinos; }
        public List<Compañia> Compañias() { return compañias; }
        public List<Usuario> Usuarios() { return usuarios; }
        public List<Compra> Compras(){ return compras; }
        
            

    public double CotizacionDolar
        {
            get { return cotizacionDolar; }
            set { cotizacionDolar = value; }
        }

        #endregion
        #region Metodos

        public static Agencia Instancia
        {
            get
            {
                if (instancia == null)
                {
                    instancia = new Agencia();
                }
                return instancia;
            }
        }


        public Agencia()
        {
            PrecargarDestinos();
            PrecargarCompañias();
            PrecargarExcursiones();
            PrecargarUsuarios();
        }

        ////////////////////////////////////////////////////////////////////////

        private void PrecargarUsuarios()
        {
            AgregarUsuario("", "", "Administrador1", 48585800, "Administrador");
            AgregarUsuario("", "", "Administrador2", 51129732, "Administrador");
            AgregarUsuario("Diego", "Maradona", "Dalediego10", 10101010, "Cliente");


        }

        public Usuario BuscarUsuario(int cedula)
        {
            int i = 0;
            Usuario usuario = null;
            while (usuario == null && i < usuarios.Count)
            {
                if (usuarios[i].Cedula == cedula)
                {
                    usuario = usuarios[i];
                }
                i++;
            }
            return usuario;
        }

        public Usuario BuscarCedulaPassword(int cedula, string password)
        {
            int i = 0;
            Usuario usuario = null;
            while (usuario == null && i < usuarios.Count)
            {
                if (usuarios[i].Cedula == cedula)
                {
                    if (usuarios[i].Password == password)
                    {
                        usuario = usuarios[i];
                    }
                }
                i++;
            }
            return usuario;
        }



        public bool ValidaUsuario(string nombre, string apellido, string password, int cedula, string rol)
        {
            Usuario unU = new Usuario(nombre, apellido, password, cedula, rol);
            bool valida = false;
            valida = unU.ValidarUsuario(nombre, apellido, password, cedula, rol);
            if (valida == true)
            {
                usuarios.Add(unU);
            }
            return valida;
        }


        private void AgregarUsuario(string nombre, string apellido, string password, int cedula, string rol)
        {
            Usuario usuario = new Usuario(nombre, apellido, password, cedula, rol);
            usuarios.Add(usuario);

        }



        private void PrecargarDestinos() //Precarga de destinos !!!
        {
            AgregarDestino("Montevideo", "Uruguay", 6, 250);
            AgregarDestino("Colonia", "Uruguay", 7, 300);
            AgregarDestino("Salto", "Uruguay", 8, 350);
            AgregarDestino("Punta del Este", "Uruguay", 14, 400);
            AgregarDestino("Buenos Aires", "Argentina", 7, 300);
            AgregarDestino("Rio de Janeiro", "Brasil", 10, 700);
            AgregarDestino("Pipa", "Brasil", 8, 800);
            AgregarDestino("Miami", "Estados Unidos", 14, 1300);
            AgregarDestino("Nueva York", "Estados Unidos", 14, 2000);
            AgregarDestino("Barcelona", "España", 6, 900);
            AgregarDestino("Paris", "Francia", 7, 900);
            AgregarDestino("Roma", "Italia", 7, 950);
            AgregarDestino("Milan", "Italia", 7, 850);
            AgregarDestino("Venecia", "Italia", 5, 750);
        }
        private void PrecargarCompañias() //Precarga Compañias aereas
        {
            AgregarCompañia("AMERICAN AIRLINES", "Estados Unidos");
            AgregarCompañia("FLY EMIRATES", "Emiratos Árabes");
            AgregarCompañia("LATAM", "Brasil");
            AgregarCompañia("IBERIA", "España");
            AgregarCompañia("AIRFRANCE", "Francia");
            AgregarCompañia("ALITALIA", "Italia");

        }

        private void PrecargarExcursiones() //Precarga de Excursiones !!!
        {

            DateTime fecha = new DateTime(2020, 12, 20);
            DateTime fecha2 = new DateTime(2020, 12, 25);
            AltaExcursionNacional(true, "Paquete que incluye las ciudades de Montevideo y Colonia", fecha, fecha2, AsignarDestinosAExcursion(1, 2), 2, 35);

            DateTime fecha3 = new DateTime(2020, 12, 15);
            DateTime fecha4 = new DateTime(2020, 12, 20);
            AltaExcursionNacional(true, "Paquete que incluye las ciudades de Montevideo y Punta del Este", fecha3, fecha4, AsignarDestinosAExcursion(1, 4), 1, 40);

            DateTime fecha5 = new DateTime(2021, 01, 01);
            DateTime fecha6 = new DateTime(2021, 01, 07);
            AltaExcursionNacional(true, "Paquete que incluye las ciudades de Colonia y Salto", fecha5, fecha6, AsignarDestinosAExcursion(2, 3), 2, 2);

            DateTime fecha7 = new DateTime(2021, 01, 01);
            DateTime fecha8 = new DateTime(2021, 01, 15);
            AltaExcursionNacional(true, "Paquete que incluye las ciudades de Colonia y Punta del Este", fecha7, fecha8, AsignarDestinosAExcursion(2, 4), 2, 7);

            DateTime fecha9 = new DateTime(2021, 01, 01);
            DateTime fecha10 = new DateTime(2021, 01, 10);
            AltaExcursionNacional(true, "Paquete que incluye las ciudades de Montevideo y Salto", fecha9, fecha10, AsignarDestinosAExcursion(1, 3), 2, 0);

            DateTime fecha11 = new DateTime(2021, 01, 01);
            DateTime fecha12 = new DateTime(2021, 01, 10);
            AltaExcursionInternacional(compañias[1], "Paquete incluye dos ciudades del exterior.", fecha11, fecha12, AsignarDestinosAExcursion(8, 9), 4, 6);

            DateTime fecha13 = new DateTime(2021, 01, 01);
            DateTime fecha14 = new DateTime(2021, 01, 10);
            AltaExcursionInternacional(compañias[2], "Paquete incluye dos ciudades del exterior.", fecha13, fecha14, AsignarDestinosAExcursion(13, 14), 4, 20);

            DateTime fecha15 = new DateTime(2021, 01, 01);
            DateTime fecha16 = new DateTime(2021, 01, 10);
            AltaExcursionInternacional(compañias[3], "Paquete incluye dos ciudades del exterior.", fecha15, fecha16, AsignarDestinosAExcursion(12, 13), 4, 16);

            DateTime fecha17 = new DateTime(2021, 01, 01);
            DateTime fecha18 = new DateTime(2021, 01, 10);
            AltaExcursionInternacional(compañias[4], "Paquete incluye dos ciudades del exterior.", fecha17, fecha18, AsignarDestinosAExcursion(6, 7), 4, 19);

            DateTime fecha19 = new DateTime(2021, 01, 01);
            DateTime fecha20 = new DateTime(2021, 01, 10);
            AltaExcursionInternacional(compañias[5], "Paquete incluye dos ciudades del exterior.", fecha19, fecha20, AsignarDestinosAExcursion(5, 6), 4, 0);
        }

        private void AgregarCompañia(string nombre, string pais)
        {
            Compañia compañia = new Compañia(nombre, pais);
            compañias.Add(compañia);
        }
        public double CostoEnPesos(double costoDolares)
        {
            double costoEnPesos = 0;
            costoEnPesos = costoDolares * cotizacionDolar;
            return costoEnPesos;

        }


        public List<Compra> ExcursionesMenores ()
        {
            List<Compra> aux = new List<Compra>();
            foreach (Compra compra in compras)
            {
                if (compra.PasajerosMenores > 1)
                {

                    aux.Add(compra);
                   
                }
            }

            aux.Sort();
            return aux;
        }














        public List<Excursion> ExcursionesEntreFechas(DateTime desde, DateTime hasta, string ciudad)
        {
            List<Excursion> aux = new List<Excursion>();
            if (desde <= hasta)
            {
                foreach (Excursion excursion in excursiones)
                {
                    if (excursion.FechaComienzo() >= desde && excursion.FechaFin() <= hasta)
                    {
                        foreach (Destino destino in excursion.Destinos())
                        {
                            if (destino.Ciudad() == ciudad)
                            {
                                aux.Add(excursion);
                            }
                        }
                    }
                }
            }
            return aux;
        }


        public List<Excursion> ExcursionesEntreFechasOperador(DateTime desde, DateTime hasta, int idCompra)
        {
            List<Excursion> aux = new List<Excursion>();
            if (desde <= hasta)
            {
                foreach (Compra unaC in compras)
                {
                    if (unaC.IdCompra == idCompra)
                    {
                        aux.Add(unaC.ExcursionComprada);
                    }
                }
            }
            return aux;
        }

        public bool comprarExcursion(int mayores, int menores, double montoCompra, DateTime fechaCompra, string nombreUsuario, int idExcursion)
        {
            bool compro = false;
            foreach(Usuario unU in usuarios)
            {
                if (unU.Nombre == nombreUsuario)
                {
                    foreach(Excursion unaE in excursiones)
                    {
                        if(unaE.Id()== idExcursion)
                        {
                            Compra unaCompra = new Compra(mayores, menores, montoCompra, fechaCompra, unU, unaE);
                            compras.Add(unaCompra);
                            int pasajeros = mayores + menores;
                            unaE.Stock = unaE.Stock - pasajeros;
                        } 
                    }
                }            }

            return compro;
        }


            public List<Excursion> ExcursionesID (int ID)
        {
            List<Excursion> aux = new List<Excursion>();
            foreach (Excursion excursion in excursiones)
            {
                if (excursion.Id() == ID)
                {
                    aux.Add(excursion);
                }
            }
            return aux;
        }

        public double montoExcursion (int ID)
        {
            double monto = 0;

            foreach(Excursion unaE in excursiones)
            {
                if (unaE.Id() == ID)
                {
                    monto = unaE.CostoExcursion();
                }
            }
            return monto;
        }

        public DateTime PedirFecha(string mensaje)
        {
            DateTime fecha;
            bool valido = false;
            do
            {
                Console.WriteLine(mensaje);
                valido = DateTime.TryParse(Console.ReadLine(), out fecha);
                if (!valido)
                {
                    Console.WriteLine("No es una fecha válida.");
                }
            } while (!valido);
            return fecha;
        }

        public bool BuscarExcursion(string descripcion)
        {
            bool excursion = false;
            int i = 0;
            while (excursion == false && excursiones.Count < i)
            {
                if (excursiones[i].Descripcion() == descripcion)
                {
                    excursion = true;
                }
                i++;
            }
            return excursion;

        }



        public bool AltaExcursionNacional(bool interesNacional, string descripcion, DateTime fechaComenzo, DateTime fechaFin, List<Destino> destinos, int diasTraslado, int stock)
        {
            bool exito = false;
            bool existe = BuscarExcursion(descripcion);
            if (existe == false)
            {
                Nacional nuevaExcursion = new Nacional(interesNacional, descripcion, fechaComenzo, fechaFin, destinos, diasTraslado, stock);
                excursiones.Add(nuevaExcursion);
                exito = true;
            }
            return exito;

        }
        public bool AltaExcursionInternacional(Compañia compañia, string descripcion, DateTime fechaComenzo, DateTime fechaFin, List<Destino> destinos, int diasTraslado, int stock)
        {
            bool exito = false;
            bool existe = BuscarExcursion(descripcion);
            if (existe == false)
            {
                Internacional nuevaExcursion = new Internacional(compañia, descripcion, fechaComenzo, fechaFin, destinos, diasTraslado, stock);
                excursiones.Add(nuevaExcursion);
                exito = true;
            }
            return exito;
        }

        public bool IngresarDestino(string ciudad, string pais, int dias, double costoDiario)
        {
            bool exito = false;
            Destino destino = new Destino(ciudad, pais, dias, costoDiario);
            if ((Destino.verificarString3Char(ciudad) == true) && (Destino.verificarPositivos(dias, costoDiario)) && (BuscarDestino(ciudad, pais) == false))
            {
                destinos.Add(destino);
                exito = true;
            }
            return exito;
        }

        private List<Destino> AsignarDestinosAExcursion(int destino1, int destino2)
        {
            List<Destino> destinosPorExcursion = new List<Destino>();
            if (destino1 >= 0 && destino2 >= 0 && destino1 < destinos.Count() && destino2 < destinos.Count())
            {
                destinosPorExcursion.Add(destinos[destino1]);
                destinosPorExcursion.Add(destinos[destino2]);
            }
            return destinosPorExcursion;
        }

        private void AgregarDestino(string ciudad, string pais, int dias, double costoDiario) // !!!!!!!!!!!!!!!!!!!!!!!!!!!!
        {
            Destino destino = new Destino(ciudad, pais, dias, costoDiario);
            destinos.Add(destino);
        }

        private bool BuscarDestino(string ciudad, string pais)
        {
            bool existeCiudadPais = false;
            int i = 0;
            while (existeCiudadPais == false && i < destinos.Count)  
            {
                if (destinos[i].Pais() == pais)
                {
                    if (destinos[i].Ciudad() == ciudad)
                        existeCiudadPais = true;
                }
                i++;
            }
            return existeCiudadPais;
        }

        public List<Usuario> usuariosClientes()// Guardar usuarios clientes en lista cliente
        {
            List<Usuario> clientes = new List<Usuario>();
            foreach (Usuario cliente in usuarios)
            {
                if (cliente.Rol == "Cliente")
                {
                    clientes.Add(cliente);
                }
            }
            clientes.Sort();
            return clientes;

        }


        
        #endregion
    }
}
