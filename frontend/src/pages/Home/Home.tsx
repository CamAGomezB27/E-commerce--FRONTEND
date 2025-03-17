import React from "react";
import styles from "./Home.module.css";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import shirtImage from "../../assets/shirt.png";
import jacketImage from "../../assets/jacket.png";
import hawaiianSImage from "../../assets/hawaiian-shirt.png";
import skirtImage from "../../assets/skirt.png";
import Slider from "react-slick";


const Home: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500
    }

    return(
        <div className={styles.home}>
            {/* HERO SECTION */}
            <section className={styles.hero}>
                <div className={styles.herotext}>
                    <h1> Bienvenid@ a Nuestra Tienda </h1>
                    <button className={styles.cta}> Explorar Productos </button>
                </div>

                {/* CARRUSEL */}
                <div className={styles.imageContainer}>
                    <Slider {...settings} className={styles.carousel}>
                        {[shirtImage, jacketImage, skirtImage, hawaiianSImage].map((imgSrc, index) => (
                            <div key={index} className={styles.slide}>
                                <img 
                                    src={imgSrc} 
                                    alt={`Producto ${index +1}`}
                                    className={styles.productImage} 
                                />
                        </div>
                        ))}
                    </Slider>
                {/* <img src={shirtImage} alt="Camisa" className={styles.productImage}/> */}
                </div>
            </section> 
        </div>
    ) 
}

export default Home