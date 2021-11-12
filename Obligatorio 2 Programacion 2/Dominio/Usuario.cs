using System;
using System.Collections.Generic;
using System.Text;

namespace Dominio
{
    public class Usuario : IComparable<Usuario>
    {
        private string nombre;
        public string Nombre
        {
            get { return nombre; }
            set { nombre = value; }
        }

        private string apellido;
        public string Apellido
        {
            get { return apellido; }
            set { apellido = value; }
        }

        private string password;
        public string Password
        {
            get { return password; }
            set { password = value; }
        }

        private int cedula;
        public int Cedula
        {
            get { return cedula; }
            set { cedula = value; }
        }

        private string rol;
        public string Rol
        {
            get { return rol; }
            set { rol = value; }
        }

        public Usuario(string nombre, string apellido, string password, int cedula, string rol)
        {
            this.Nombre = nombre;
            this.Apellido = apellido;
            this.password = password;
            this.Cedula = cedula;
            this.Rol = rol;
        }



        /*validacion de datos para crear usuario*/
        public bool ValidarUsuario(string nombre, string apellido, string password, int cedula, string rol)
        {
            bool valida = false;
            bool validaNombre = false;
            bool validaApellido = false;
            bool validaPass = false;
            bool validaCed = false;

            int cedula2 = cedula.ToString().Length;

            if (nombre.Length > 2)
            {
                validaNombre = true;
            }

            if (apellido.Length > 2)
            {
                validaApellido = true;
            }

            if (password.Length > 6)
            {

                bool tieneNum = false;
                bool tieneMayus = false;
                bool tieneMinus = false;

                foreach (Char letra in password)
                {

                    if (Char.IsDigit(letra))
                    {
                        tieneNum = true;
                    }

                    if (Char.IsUpper(letra))
                    {
                        tieneMayus = true;
                    }

                    if (Char.IsLower(letra))
                    {
                        tieneMinus = true;
                    }

                    if (tieneNum == true && tieneMayus == true && tieneMinus == true)
                    {
                        validaPass = true;
                    }

                }
            }

            if (cedula2 >= 7 && cedula2 <= 9)
            {
                validaCed = true;
            }

            if (validaNombre == true && validaApellido == true && validaPass == true && validaCed == true)
            {
                valida = true;
            }

            return valida;
        }


        public override string ToString()
        {
            string dato = ("Nombre: " + nombre + " | " + "Apellido: " + apellido + " | " + "Documento: " + cedula);
            return base.ToString() + dato;
        }

        //Para ordenar por alfabeticamente por apellido y nombre:
        public int CompareTo(Usuario other)
        {
            if(apellido == other.apellido)
            {
                return nombre.CompareTo(other.nombre);
            }
            return apellido.CompareTo(other.apellido);
        }




    }

    
}
