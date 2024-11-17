import { useState } from "react"


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
        <div class="posts">

            {post.map((post) => (
                <Post
                    usuario_foto={post.usuario_foto}
                    usuario_nome={post.usuario_nome}

                    post_foto={post.post_foto}
                    post_nome={post.post_nome}



                />
            ))}

        </div>
    )
}
function Post(props) {
    const { usuario_foto, usuario_nome, post_foto, post_nome } = props
    return (
        <div class="post">
            <Topo usuario_foto={usuario_foto} usuario_nome={usuario_nome} />

            <Conteudo post_foto={post_foto} post_nome={post_nome} />

        </div>
    )
}

function Topo(props) {
    const { usuario_foto, usuario_nome } = props
    return (
        <div class="topo">
            <div class="usuario">
                <img src={usuario_foto} alt={usuario_nome} />
                meowed
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
    )
}

function Conteudo(props) {
    const { post_foto, post_nome } = props

    const [like,setLike] = useState('heart-outline')
    const [cor,setCor] = useState('')

    function curtir() {
        setLike("heart-sharp")
        setCor("red")
    }



    function curtirviaBotao(){
            if(like === "heart-outline"){
                setLike("heart-sharp")
                setCor("red")
            } else {
                setLike("heart-outline")
                setCor("")
            }
    }
    return (
        <>
            <div class="conteudo">
                <img src={post_foto} alt={post_nome} onClick={curtir}/>
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon style={{color: cor}} name={like} onClick={curtirviaBotao}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src="assets/img/respondeai.svg" alt="respondeai" />
                    <div class="texto">
                        Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
                    </div>
                </div>
            </div>
        </>
    )
}

