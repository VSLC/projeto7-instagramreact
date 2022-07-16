function Post(props) {
    return (
        <div class="posts">
            <div class="posts-persona align-items">
                <div class="posts-persona-cabecalho">
                    <img src={props.img1} alt="9gag1" />
                    <p> {props.titulopersona} </p>
                </div>
                <div>
                    <ion-icon class="left" name="ellipsis-horizontal-outline"></ion-icon>
                </div>
            </div>

            <div class="posts-image">
                <img src={props.img2} alt="gato no telefone" />
            </div>

            <div class="posts-icons">
                <div>
                    <ion-icon class="tamanho-icone like" name="heart"></ion-icon>
                    <ion-icon class="tamanho-icone" name="chatbubble-outline"></ion-icon>
                    <ion-icon class="tamanho-icone" name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon class="tamanho-icone" name="bookmark-outline"></ion-icon>
                </div>
            </div>

            <div class="coluna-de-posts-curtiu flex">
                <img src={props.img3} alt="responde aí" />
                <p>{props.message}</p>
            </div>

        </div>
    );
}

export default function Feed() {
    const arrayPosts = [
        { img1: "/img/9gag1.png", titulopersona: "meow", img2: "/img/gato-telefone.png", img3: "/img/respondeai1.png", message: "Curtido por Responde e outras 100.000 pessoas" },
        { img1: "/img/9gag1.png", titulopersona: "Voller", img2: "/img/gato-telefone.png", img3: "/img/respondeai1.png", message: "Curtido por voller e outras 100.000 pessoas" },
        { img1: "/img/9gag1.png", titulopersona: "Gabriel", img2: "/img/gato-telefone.png", img3: "/img/respondeai1.png", message: "Curtido por Castro e outras 100.000 pessoas" },
        { img1: "/img/9gag1.png", titulopersona: "Antônio", img2: "/img/gato-telefone.png", img3: "/img/respondeai1.png", message: "Curtido por galo e outras 100.000 pessoas" }
    ];

    return (
        <div class="conteudo-principal">
            <div class="coluna-de-posts">
                {arrayPosts.map((e) => <Post img1={e.img1} titulopersona={e.titulopersona} img2={e.img2} img3={e.img3} message={e.message} />)}
            </div>
        </div>
    );
}