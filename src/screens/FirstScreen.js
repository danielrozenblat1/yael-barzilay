import { useState, useEffect } from "react";
import NavBar from "../components/NavBar/NavBar";
import Button from "../components/button/Button";
import styles from "./FirstScreen.module.css";
import ScrollReveal from "scrollreveal";
import Loader from "../components/Loader/Loader";
import background from "../images/רקע יעל ברזילאי.png"

const FirstScreen = () => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = background ; // Replace with the actual path to your background image
        img.onload = () => {
            setIsImageLoaded(true);
        };
    }, []);

    useEffect(() => {
        if (isImageLoaded) {
            ScrollReveal().reveal(`.${styles.name}`, {
                duration: 1000,
                distance: "30px",
                origin: "top",
                easing: "ease-out",
                reset: false,
                viewFactor: 0.2,
                interval: 300,
                delay: 200,
                scale: 1,
            });
            ScrollReveal().reveal(`.${styles.title}`, {
                duration: 1000,
                distance: "30px",
                origin: "bottom",
                easing: "ease-out",
                reset: false,
                viewFactor: 0.2,
                interval: 300,
                delay: 200,
                scale: 1,
            });
            ScrollReveal().reveal(`.${styles.btn}`, {
                duration: 1000,
                distance: "30px",
                origin: "bottom",
                easing: "ease-out",
                reset: false,
                viewFactor: 0.2,
                interval: 300,
                delay: 200,
                scale: 1,
            });
        }
    }, [isImageLoaded]);

    if (!isImageLoaded) {
        return <Loader />;
    }

    return (
        <>
            <div className={styles.background}></div>
            <h1 className={styles.name}>יעל ברזילאי</h1>
            <h2 className={styles.title}>להפוך למותג ברגע</h2>
            <div className={styles.btn}>
                <Button text="לפרוייקטים" to="פרוייקטים" />
            </div>
        </>
    );
};

export default FirstScreen;
