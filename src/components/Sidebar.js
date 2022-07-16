function SideBarUsuario(props) {
    return (
        <div class="sidebar-superior-lado">
            <img src={props.imgUsuario} alt="catanacomics1" />
            <div>
                <p class="side-sup-lado-paragrafo-1">{props.usuarioPrincipal}</p>
                <p class="side-sup-lado-paragrafo-2">{props.apelido}</p>
            </div>
        </div>
    );
}
function SidebarSugestao(props) {
    return (
        <div class="sidebar-superior-seguir">

            <img src={props.img} alt="badvibesmemes" />

            <div>
                <p class="font-size-1">{props.usuario}</p>
                <p class="paragrafo-2">{props.segue}</p>
            </div>

            <p class="paragrafo-seguir">seguir</p>
        </div>
    );


}
export default function Sidebar() {
    const arraySidebar = [
        { img: "/img/badvibesmeme1.png", usuario: "bad.vibes.memes", segue: "segue você" },
        { img: "/img/badvibesmeme1.png", usuario: "bad.vibes.memes", segue: "segue você" },
        { img: "/img/badvibesmeme1.png", usuario: "bad.vibes.memes", segue: "segue você" },
        { img: "/img/badvibesmeme1.png", usuario: "bad.vibes.memes", segue: "segue você" },
    
    ];

    return (
        <div class="sidebar">
            <div class="sidebar-superior">

                <div class="sidebar-superior-lado">
                    <SideBarUsuario imgUsuario="/img/catanacomics1.png" usuarioPrincipal="Catananomics" apelido="catana" />
                </div>

                <div class="sidebar-superior-paragrafo">
                    <p class="side-sup-paragrafo">Sugestões para você</p>
                    <p class="font-size-1">Ver tudo</p>
                </div>

                {arraySidebar.map((e) => <SidebarSugestao img={e.img} usuario={e.usuario} segue={e.segue} />)}

                <ul class="lista-de-links">
                    <p>Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma</p>
                </ul>

                <p class="side-paragrafo">© 2021 INSTAGRAM DO FACEBOOK</p>

            </div>
        </div>
    );

}

