import Work from "./work";
import './home.css';
import Union from './assets/Union .png';
import Market from "./market";
import Grove from "./groove";
import About from "./about";
const Home = () => {
    return(
        <div className="section-container">
            <section><Work /></section>
            <div className="union">
                <img src={Union} alt="union" />
            </div>
            <section><Market /></section>
            <section><Grove /></section>
            <section><About /></section>
            <section></section>
            <section></section>
            <section></section>
        </div>
    )
}
export default Home;