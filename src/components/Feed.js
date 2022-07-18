import React from "react"

function Post(props) {
    const [changeColor, setChangeColor] = React.useState("");
    const [like, setLike] = React.useState(false);
    const [changeName, setChangeName] = React.useState("heart-outline")

    function giveLike() {
        setChangeName("heart");
        setChangeColor("red");
        setLike(true)
    }

    function giveDislike() {
        if (like) {
            setLike(false);
            setChangeName("heart-outline");
            setChangeColor("");

        } else {
            setLike(true)
            setChangeName("heart");
            setChangeColor("red");
        }

    }

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

            <div class="posts-image" onClick={giveLike}>
                <img src={props.img2} alt="gato no telefone" />
            </div>

            <div class="posts-icons">
                <div>
                    <ion-icon class={changeColor} name={changeName} onClick={giveDislike}></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>
            <div class="coluna-de-posts-curtiu flex">
                <img src={props.img3} alt="responde aí" />
                <p>Curtido por <strong>{props.usuario}</strong> e <strong>outras {props.numeroPessoas} pessoas</strong></p>
            </div>

        </div >
    );
}

export default function Feed() {
    const arrayPosts = [
        { img1: "/img/9gag1.png", titulopersona: "meow", img2: "/img/gato-telefone.png", img3: "/img/respondeai1.png", usuario: "Respondeai", numeroPessoas: 5000 },
        { img1: "/img/9gag1.png", titulopersona: "Voller", img2: "/img/gato-telefone.png", img3: "/img/respondeai1.png", usuario: "voller", numeroPessoas: 100000 },
        { img1: "/img/9gag1.png", titulopersona: "Gabriel", img2: "/img/gato-telefone.png", img3: "/img/respondeai1.png", usuario: "Castro", numeroPessoas: 20000 },
        { img1: "/img/9gag1.png", titulopersona: "Antônio", img2: "/img/gato-telefone.png", img3: "/img/respondeai1.png", usuario: "galo", numeroPessoas: 30000 }
    ];



    return (
        <div class="conteudo-principal">
            <div class="coluna-de-posts">
                {arrayPosts.map((e) => <Post img1={e.img1} titulopersona={e.titulopersona} img2={e.img2} img3={e.img3} usuario={e.usuario} numeroPessoas={e.numeroPessoas} />)}
            </div>
        </div>
    );
}