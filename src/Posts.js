import { useState } from "react"


export default function Posts() {
    const post = [
        {
            usuario_foto: "assets/img/meowed.svg",
            usuario_nome: "meowed",

            post_foto: "assets/img/gato-telefone.svg",
            post_nome: "gato-telefone",

            curtidas_foto: "assets/img/respondeai.svg",
            curtidas_nome: "respondeai",

            numeroDeCurtidas:101523
        },
        {
            usuario_foto: "assets/img/barked.svg",
            usuario_nome: "barked",

            post_foto: "assets/img/dog.svg",
            post_nome: "dog",

            curtidas_foto: "assets/img/adorable_animals.svg",
            curtidas_nome: "adorable_animals",
            numeroDeCurtidas:99159
        },
        {
            usuario_foto: "assets/img/meowed.svg",
            usuario_nome: "meowed",

            post_foto: "assets/img/gato-telefone.svg",
            post_nome: "gato-telefone",

            curtidas_foto: "assets/img/respondeai.svg",
            curtidas_nome: "respondeai",

            numeroDeCurtidas:101523


        }
    ]

    return (
        <div className="posts">

            {post.map((post,i) => (
                <Post

                    key={i}

                    usuario_foto={post.usuario_foto}
                    usuario_nome={post.usuario_nome}

                    post_foto={post.post_foto}
                    post_nome={post.post_nome}

                    curtidas_foto={post.curtidas_foto}
                    curtidas_nome={post.curtidas_nome}

                    numeroDeCurtidas={post.numeroDeCurtidas}



                />
            ))}

        </div>
    )
}
function Post(props) {
    const { usuario_foto, usuario_nome, post_foto, post_nome,curtidas_foto,curtidas_nome,numeroDeCurtidas } = props
    return (
        <div className="post">
            <Topo usuario_foto={usuario_foto} usuario_nome={usuario_nome} />

            <Conteudo numeroDeCurtidas={numeroDeCurtidas} post_foto={post_foto} post_nome={post_nome} curtidas_foto={curtidas_foto} curtidas_nome={curtidas_nome} />

        </div>
    )
}

function Topo(props) {
    const { usuario_foto, usuario_nome } = props
    return (
        <div className="topo">
            <div className="usuario">
                <img src={usuario_foto} alt={usuario_nome} />
                meowed
            </div>
            <div className="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
    )
}

function Conteudo(props) {
    const { post_foto, post_nome,curtidas_foto,curtidas_nome,numeroDeCurtidas } = props

    const [like,setLike] = useState('heart-outline')
    const [cor,setCor] = useState('')

    const [curtidas,setCurtidas] = useState(numeroDeCurtidas)

    const [salvar, setSalvar] = useState('bookmark-outline')

    function curtirviaBotao(){
        if(like === "heart-outline"){
            setLike("heart-sharp")
            setCor("red")
            setCurtidas(curtidas + 1)
        } else {
            setLike("heart-outline")
            setCor("")
            setCurtidas(curtidas - 1)
        }
}

    function curtir() {

        if(like==="heart-outline"){
            setLike("heart-sharp")
            setCor("red")
            setCurtidas(curtidas + 1)
        }

    }

    function botaoSalvar() {
        if(salvar === "bookmark-outline"){
            setSalvar("bookmark-sharp")
        } else {
            setSalvar("bookmark-outline")
        }
        }
    return (
        <>
            <div className="conteudo">
                <img src={post_foto} alt={post_nome} onClick={curtir}/>
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon style={{color: cor}} name={like} onClick={curtirviaBotao}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon onClick={botaoSalvar} name={salvar}></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={curtidas_foto} alt={curtidas_nome} />
                    <div className="texto">
                        Curtido por <strong>{curtidas_nome}</strong> e <strong>outras {curtidas} pessoas</strong>
                    </div>
                </div>
            </div>
        </>
    )

}


