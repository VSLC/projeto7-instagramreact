

function Storie(props) {
    return (
        <div class="elementos-stories">
            <img class="width-stories instagram-background" src={props.src} alt="" />
            <div>
                <img class="width-stories" src={props.src2} alt="9gag" />
                <p>{props.title}</p>
            </div>
        </div>
    );
}

export default function Stories() {
    const arrayStories = [
        { src: "/img/stories_background.jpg", src2: "/img/9gag1.png", title: "9gag" },
        { src: "/img/stories_background.jpg", src2: "/img/catanacomics1.png", title: "9gag" },
        { src: "/img/stories_background.jpg", src2: "/img/badvibesmeme1.png", title: "9gag" },
        { src: "/img/stories_background.jpg", src2: "/img/9gag1.png", title: "9gag" },
        { src: "/img/stories_background.jpg", src2: "/img/9gag1.png", title: "9gag" },
        { src: "/img/stories_background.jpg", src2: "/img/9gag1.png", title: "9gag" },
        { src: "/img/stories_background.jpg", src2: "/img/9gag1.png", title: "9gag" },
        { src: "/img/stories_background.jpg", src2: "/img/9gag1.png", title: "9gag" },
        { src: "/img/stories_background.jpg", src2: "/img/9gag1.png", title: "9gag" }
    ];

    return (
        <div class="caixa-stories flex">
            {arrayStories.map((e) => <Storie src={e.src} src2={e.src2} title={e.title} />)}
            <ion-icon class="seta-icon none-mobile" name="chevron-forward-circle"></ion-icon>
        </div>

    );
}