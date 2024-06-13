import styles from "./NewImageGrid.module.css"
import grid1 from "../../images/יעל ברזילאי מיתוג 1.png"
import grid2 from "../../images/יעל ברזילאי מיתוג 2.png"
import grid3 from "../../images/יעל ברזילאי מיתוג 3.png"
import grid4 from "../../images/יעל ברזילאי מיתוג 4.png"
import grid5 from "../../images/יעל ברזילאי מיתוג 5.png"
import grid6 from "../../images/יעל ברזילאי מיתוג 6.png"
import grid7 from "../../images/יעל ברזילאי מיתוג 7.png"
import grid8 from "../../images/יעל ברזילאי מיתוג 8.png"
import grid9 from "../../images/יעל ברזילאי מיתוג 9.png"
 import grid10 from "../../images/יעל ברזילאי מיתוג 10.png"
 import grid11 from "../../images/יעל ברזילאי מיתוג 11.png"
 import grid12 from "../../images/יעל ברזילאי מיתוג 12.png"
 import grid14 from "../../images/יעל ברזילאי מיתוג 14.png"
import { useEffect, useState } from "react"
import ScrollReveal from "scrollreveal"
import Button from "../button/Button"
const NewImagesGrid=()=>{







    useEffect(()=>{
        ScrollReveal().reveal(`.${styles.image1}`, {
            duration: 600,
            distance: "60px",
            origin: "top",
            easing: "ease-out",
            reset: false,
            viewFactor: 0.2,
            interval: 300,
            delay: 200,
            scale: 1,
          });

    },[])
    return <>

    <div className={styles.container}>
 <div className={styles.row}>
    <img className={styles.image1} alt="יעל ברזילאי לוגו ומיתוג"src={grid7} />
    <img className={styles.image1} alt="יעל ברזילאי לוגו ומיתוג"src={grid4} />
    </div>
    <div className={styles.row}>
    <img className={styles.image1} alt="יעל ברזילאי לוגו ומיתוג"src={grid1} />
    <img className={styles.image1} alt="יעל ברזילאי לוגו ומיתוג"src={grid2} />
   </div>
    <div className={styles.row}>
    <img className={styles.image1} alt="יעל ברזילאי לוגו ומיתוג"src={grid3} />
    <img className={styles.image1} alt="יעל ברזילאי לוגו ומיתוג"src={grid14} />
    </div>
    <div className={styles.row}>
    <img className={styles.image1} alt="יעל ברזילאי לוגו ומיתוג"src={grid11} />
    <img className={styles.image1}  alt="יעל ברזילאי לוגו ומיתוג"src={grid10} />
    </div>
    <div className={styles.row}>
    <img className={styles.image1}  alt="יעל ברזילאי לוגו ומיתוג"src={grid9} />
    <img className={styles.image1}  alt="יעל ברזילאי לוגו ומיתוג"src={grid8} />
    </div>
    <div className={styles.row}>
    <img className={styles.image1}  alt="יעל ברזילאי לוגו ומיתוג"src={grid6} />
    <img className={styles.image1}  alt="יעל ברזילאי לוגו ומיתוג"src={grid12} />
    <img className={styles.image1}  alt="יעל ברזילאי לוגו ומיתוג"src={grid5} />
   </div>
   <Button text="יעל , בואי נדבר" />
    
    </div>
    </>
    }
    export default NewImagesGrid