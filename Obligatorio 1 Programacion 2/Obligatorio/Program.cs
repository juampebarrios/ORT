using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dominio;

namespace Obligatorio
{
    class Program
    {
        static Agencia agencia = new Agencia();
        static void Main(string[] args)
        {
            Interfaz();
        }

        private static void Titulo(string titulo)
        {

            Console.WriteLine();
            Console.WriteLine(titulo);
        }

        private static void Interfaz()
        {

            int opcion;
            do
            {
                Console.WriteLine("**********");
                Titulo("************************ Menú ******************");
                Console.WriteLine();
                Console.WriteLine("1-Ingresar destino");
                Console.WriteLine("2-Ver destinos disponibles");
                Console.WriteLine("3-Modificar cotización del dólar");
                Console.WriteLine("4-Lista de excursiones ingresadas");
                Console.WriteLine("5-Lista de excursiones según destino - fechas");
                Console.WriteLine("0- SALIR");
                Console.WriteLine();
                opcion = PedirNumero("Ingrese el número de la opción deseada:");
                switch (opcion)
                {
                    case 1: { IngresarDestino(); break; }
                    case 2: { MostrarDestino(); break; }  
                    case 3: { ModificarCotizacionDolar(); break; }
                    case 4: { MostrarExcursionesIngresadas(); break; }
                    case 5: { MostrarExcursionDestinoFecha(); break; }
                    default: { Console.WriteLine("-->Se ingresó un valor fuera del rango."); break; }
                }

            } while (opcion != 0);
        }

        private static void IngresarDestino()
        {
            string ciudad;
            string pais;
            int dias;
            double costoDiario;
            
            pais=PedirTexto("\n" + "Ingrese el País:");
            ciudad = PedirTexto("\n" + "Ingrese la Ciudad:");
            dias = PedirNumero("\n" + "Ingrese cantidad de días:");
            costoDiario = PedirCosto("\n" + "Ingrese el costo diario:");
            if(agencia.IngresarDestino(ciudad, pais, dias, costoDiario) == true)
            {
                Console.WriteLine();
                Console.WriteLine("-->Se ha ingresado el destino correctamente");
            }
            else
            {
                Console.WriteLine();
                Console.WriteLine("-->Ha habido un error en el ingreso");
            }
        }

        private static void MostrarDestino()
        {
            ListarDestinos();
        }

        private static void ModificarCotizacionDolar()
        {
            double cotizacion = PedirNumero("Ingrse cotización actual:");
            agencia.cotizacionDolar = cotizacion;
            Console.WriteLine("La nueva cotización es: " + agencia.cotizacionDolar);
        }

        private static void MostrarExcursionesIngresadas()
        {
            ListarExcursiones();
        }

        //******************

        //******************

        private static void MostrarExcursionDestinoFecha()
        {
            DateTime desde = agencia.PedirFecha("Ingrese fecha de comienzo (DD/MM/YYYY): ");
            DateTime hasta = agencia.PedirFecha("Ingrese fecha de fin (DD/MM/YYYY: ");
            string ciudad = PedirTexto("Ingrese ciudad de destino");
            List<Excursion> aux = agencia.ExcursionesEntreFechas(desde, hasta, ciudad);
            if (aux.Count > 0)
            {
                foreach (Excursion excursion in aux)
                {
                    Console.WriteLine(excursion);
                }
            }
            else
            {
                Console.WriteLine("No hay excursiones para las fechas ingresadas.");
            }
        }



        private static void MostarListaDestinos(List<Destino> aux, string mensaje)
        {
            if (aux.Count > 0)
            {
                foreach (Destino unDestino in aux)
                {
                    Console.WriteLine(unDestino);
                }
            }
            else
            {
                Console.WriteLine(mensaje);
            }
        }

        private static void MostarListaExcursiones(List<Excursion> aux, string mensaje)
        {
            double costoDolar = 0;
            double costoPesos = 0;
            if (aux.Count > 0)
            {
                foreach (Excursion unaExcursion in aux)
                {
                    costoDolar = unaExcursion.CostoExcursion();
                    costoPesos = agencia.CostoEnPesos(costoDolar);
                    Console.WriteLine();
                    Console.WriteLine(unaExcursion + "\n" + "\n" + "Costo En U$S: " + costoDolar + "\n" + "Costo en Pesos: " + costoPesos);
                    Console.WriteLine();

                }
            }
            else
            {
                Console.WriteLine(mensaje);
            }
        }

        public static void ListarDestinos()
        {
            Console.WriteLine();
            Console.WriteLine("Destinos disponibles:");
            Console.WriteLine();
            List<Destino> aux = agencia.Destinos();
            MostarListaDestinos(aux, "---> No hay destinos cargados.");
        }

        public static void ListarExcursiones()
        {
            Console.WriteLine();
            Console.WriteLine("Excursiones ingresadas:");
            Console.WriteLine();
            List<Excursion> aux = agencia.Excursiones();
            MostarListaExcursiones(aux, "---> No hay excursiones cargados.");
        }

        #region Tools
        private static string PedirTexto(string mensaje = "Ingrese el texto:")
        {
            Console.WriteLine(mensaje);
            string texto = Console.ReadLine();
            return texto;
        }
        private static int PedirNumero(string mensaje = "Ingrese el numero:")
        {
            int num;
            bool valido = false;
            do
            {
                Console.WriteLine(mensaje);
                valido = int.TryParse(Console.ReadLine(), out num);
                if (!valido)
                {
                    Console.WriteLine("Solo se admiten numeros");
                }
            } while (!valido);
            return num;
        }
        private static double PedirCosto(string mensaje = "Ingrese el numero:")
        {
            double num;
            bool valido = false;
            do
            {
                Console.WriteLine(mensaje);
                valido = double.TryParse(Console.ReadLine(), out num);
                if (!valido)
                {
                    Console.WriteLine("Solo se admiten numeros");
                }
            } while (!valido);
            return num;
        }
        #endregion
    }
}
