import { useState } from "react"

export default function User() {

    const [foto,setFoto] = useState('assets/img/catanacomics.svg')

    function mudarFoto() {
        let pergunta = prompt("insira a foto que seja:")
        setFoto(pergunta)

        if(pergunta === null || pergunta==="")
        {
            setFoto(foto)
        }

    }


    return (
        <div class="usuario">
            <img src={foto} alt="imagem de perfil" onClick={mudarFoto} />
            <div class="texto">
                <span>
                    <strong>catanacomics</strong>
                    <ion-icon name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}