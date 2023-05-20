import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo"
import ListaOpciones from "../ListaOpciones/index.js"
import Boton from "../Boton"

const Formulario = (props) => {

const  [nombre,actualizarNombre]= useState("")
const  [puesto,actualizarPuesto]= useState("")
const  [foto,actualizarFoto]= useState("")
const  [equipo,actualizarEquipo]= useState("")

const  [titulo,ActualizarTitulo]= useState("")
const  [color,actualizarColor]= useState("")



const{registrarColaborador,crearEquipo}= props


    const manejarEnvio = (e)=>{
        e.preventDefault()
        console.log("Manejar envio",e)
        let datosAEnviar ={
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar)
    }

    const maenjarNuevoEquipo = (e)=>{
        e.preventDefault()
        crearEquipo({titulo, colorPrimario: color})
    }


    return <section className = "formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <Campo 
                titulo ="Nombre" 
                placeholder="Ingrese su nombre" 
                required
                valor={nombre} 
                actualizarValor={actualizarNombre}
            />
            <Campo
                titulo ="Puesto" 
                placeholder="Ingrese su puesto" 
                required
                valor={puesto} 
                actualizarValor={actualizarPuesto}
            />
            <Campo
                titulo ="Foto" 
                placeholder="Ingrese su foto" 
                required
                valor={foto} 
                actualizarValor={actualizarFoto}
            />
            <ListaOpciones
            valor={equipo} 
            actualizarEquipo={actualizarEquipo}
            equipos ={props.equipos}
            />
            <Boton>
                Crear
            </Boton>
        </form>
        <form onSubmit={maenjarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo </h2>
            <Campo
                titulo ="Titulo" 
                placeholder="Ingresar titulo" 
                required
                valor={titulo} 
                actualizarValor={ActualizarTitulo}
            />
            <Campo
                titulo ="Color" 
                placeholder="Ingresar el color en Hex" 
                required
                valor={color} 
                actualizarValor={actualizarColor}
                type="color"
            />
            <Boton> Registrar equipo </Boton>
            </form>
    </section>
}

export default Formulario