import { useState } from "react"

export default function User() {

    const [foto,setFoto] = useState('assets/img/catanacomics.svg')
    const [nome,setNome] = useState('catanacomics')

    function mudarFoto() {
        let pergunta = prompt("insira a foto que seja:")
        setFoto(pergunta)

        if(pergunta === null || pergunta==="")
        {
            setFoto(foto)
        }

    }

    function mudarNome(){
        let alterarNome = prompt("insira o nome que seja:")
        setNome(alterarNome)

        if(alterarNome === null || alterarNome ==="")
            {
                setNome(nome)
            }
    }


    return (
        <div class="usuario">
            <img src={foto} alt="imagem de perfil" onClick={mudarFoto} />
            <div class="texto">
                <span >
                    <strong>{nome}</strong>
                    <ion-icon name="pencil" onClick={mudarNome}></ion-icon>
                </span>
            </div>
        </div>
    )
}