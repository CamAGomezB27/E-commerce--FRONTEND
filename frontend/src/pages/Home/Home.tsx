import React from "react";
import styles from "./Home.module.css";
import shirtImage from "../../assets/shirt.png";

const Home: React.FC = () => {
    return(
        <div className={styles.home}>
            {/* HERO SECTION */}
            <section className={styles.hero}>
                <div className={styles.herotext}>
                    <h1> Bienvenid@ a Nuestra Tienda </h1>
                    <button className={styles.cta}> Explorar Productos </button>
                </div>
                <div className={styles.heroimage}>
                <img src={shirtImage} alt="imagen" />
                </div>
            </section> 
        </div>
    ) 
}

export default Home