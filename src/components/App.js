import Navbar from "./Navbar"
import Stories from "./Stories"
import Feed from "./Feed"
import Sidebar from "./Sidebar"
import BottomBar from "./BottomBar"



export default function App() {
    return (
        <div>
            <Navbar />
            <div class="conteudo">
                <Stories />
                <Feed />
                <Sidebar />
                <BottomBar />
            </div>
        </div>
    );

}