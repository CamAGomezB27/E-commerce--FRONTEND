//Header y footer para todas las paginas

import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.css"


const Layout: React.FC = () => {
    return (
        <div className={styles.layout}>
            <Navbar />
            <main className={styles.content}>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout