import{ useState } from "react"
import "./MiOrg.css"

const MiOrg = (props)=>{
   
    return <section className="orgSection">
        <h3 className="tittle">Mi organizacion</h3>
        <img src="/img/Botão add-01 1.png" alt="add " onClick={props.cambiarMostrar} />
    </section>
    }

    export default MiOrg