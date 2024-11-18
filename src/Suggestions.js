export default function Suggestions() {

    const usuarios = [
        { foto: "assets/img/bad.vibes.memes.svg", nome: "bad.vibes.memes", razao: "Segue você" },
        { foto: "assets/img/chibirdart.svg", nome: "chibirdart", razao: "Segue você" },
        { foto: "assets/img/razoesparaacreditar.svg", nome: "razoesparaacreditar", razao: "Novo no Instagram" },
        { foto: "assets/img/adorable_animals.svg", nome: "adorable_animals", razao: "Segue você" },
        { foto: "assets/img/smallcutecats.svg", nome: "smallcutecats", razao: "Segue você" },
    ]

    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {usuarios.map((usuario)=>(
                <Suggestion foto={usuario.foto} nome={usuario.nome} razao={usuario.razao}/>
            ))}



        </div>
    )
}

function Suggestion(props) {

    const {foto,nome,razao} = props

    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={foto} alt={nome} />
                <div class="texto">
                    <div class="nome">{nome}</div>
                    <div class="razao">{razao}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}