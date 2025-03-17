import React from "react";
import styles from "./Home.module.css";

const Home: React.FC = () => {
    return(
        <div className={styles.home}>
            {/* HERO SECTION */}
            <section className={styles.hero}>
                <h1> Bienvenid@ a Nuestra Tienda </h1>
                <p> Descubre nuestras ultimas prendas en tendencia </p>
                <button className={styles.cta}> Explorar Productos </button>
            </section>

            {/* Categorias */}
            <section className={styles.categories}>
                <h2> Categorias Destacadas </h2>
                <div className={styles.categoryGrid}>
                    <div className={styles.categoryCard}> Ropa para Hombre </div>
                    <div className={styles.categoryCard}> Ropa para Mujer </div>
                </div>
            </section>

            {/* Productos Recomendados */}
            <section className={styles.featured}>
                <h2> Productos Recomendados </h2>
                <div className={styles.categoryGrid}>
                    <div className={styles.categoryCard}> Producto 1 </div>
                    <div className={styles.categoryCard}> Producto 2 </div>
                    <div className={styles.categoryCard}> Producto 3 </div>
                </div>
            </section>
        </div>
    ) 
}

export default Home