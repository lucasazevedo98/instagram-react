import React from 'react'




export default function Posts() {
    const post = [
        {
            usuario_foto: "assets/img/meowed.svg",
            usuario_nome: "meowed",

            post_foto: "assets/img/gato-telefone.svg",
            post_nome: "gato-telefone",

            curtidas_foto: "assets/img/respondeai.svg",
            curtidas_nome: "respondeai"
        },
        {
            usuario_foto: "assets/img/barked.svg",
            usuario_nome: "barked",

            post_foto: "assets/img/dog.svg",
            post_nome: "dog",

            curtidas_foto: "assets/img/adorable_animals.svg",
            curtidas_nome: "adorable_animals"
        },
        {
            usuario_foto: "assets/img/meowed.svg",
            usuario_nome: "meowed",

            post_foto: "assets/img/gato-telefone.svg",
            post_nome: "gato-telefone",

            curtidas_foto: "assets/img/respondeai.svg",
            curtidas_nome: "respondeai"


        }
    ]

    return (
        <div class="post">
            {/* Topo */}
            {post.map((topo)=>(
                <Topo foto={topo.usuario_foto} nome={topo.usuario_nome}/>
            ))}
        </div>



    )
}


function Topo(props) {
    const {foto,nome} = props
    return (

        <div class="topo">
            <div class="usuario">
                <img src={foto} alt={nome} />
                meowed
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>

    )
}