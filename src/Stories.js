export default function Stories() {

    const storys = [
        { image: "assets/img/9gag.svg", name: "9gag" },
        { image: "assets/img/meowed.svg", name: "meowed" },
        { image: "assets/img/barked.svg", name: "barked" },
        { image: "assets/img/nathanwpylestrangeplanet.svg", name: "nathanwpylestrangeplanet" },
        { image: "assets/img/wawawicomics.svg", name: "wawawicomics" },
        { image: "assets/img/respondeai.svg", name: "respondeai" },
        { image: "assets/img/filomoderna.svg", name: "filomoderna" },
        { image: "assets/img/memeriagourmet.svg", name: "memeriagourmet" },
    ]
    
    return (
        <div className="stories">
            {storys.map((story,i)=>(
                <Storys key={i} imagem={story.image} nome={story.name}/>
            ))}
            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}

function Storys(props) {

    const {imagem,nome} = props

    return (
        <div className="story">
            <div className="imagem">
                <img src={imagem} alt={nome} />
            </div>
            <div className="usuario">
                {nome}
            </div>
        </div>
    )
}
