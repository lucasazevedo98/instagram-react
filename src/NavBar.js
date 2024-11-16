export default function NavBar() {

    const icones = ["paper-plane-outline", "compass-outline", "heart-outline", "person-outline"]
    return (
        <div class="container">
            <div className="logo">
                <Icons name="logo-instagram" />
                <div class="separador"></div>
                <img src="assets/img/logo.png" alt="logo" />
            </div>

            <div className="pesquisa">
                <input type="text" placeholder="Pesquisar" />
            </div>

            <div className="icones">
                {icones.map((icon,i) => (
                    <Icons key={i} name={icon} />
                ))}
            </div>

            <div className="icones-mobile">
                <Icons name="paper-plane-outline" />
            </div>
        </div>
    )
}


function Icons(props) {
    return (
        <ion-icon name={props.name}></ion-icon>
    )
}