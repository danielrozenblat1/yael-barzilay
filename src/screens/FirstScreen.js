import { useEffect } from "react"
import NavBar from "../components/NavBar/NavBar"
import Button from "../components/button/Button"
import styles from "./FirstScreen.module.css"
import ScrollReveal from "scrollreveal"

const FirstScreen=()=>{
   useEffect(()=>{
    ScrollReveal().reveal(`.${styles.name}`, {
        duration: 1000,
        distance: "30px",
        origin: "top", // Start from the right side
        easing: "ease-out",
        reset:false,
        viewFactor: 0.2,
        interval: 300, // Delay between each element
        delay: 200, // Delay before the animation starts
        scale: 1, // Set scale to 1 or null
      });
      ScrollReveal().reveal(`.${styles.title}`, {
        duration: 1000,
        distance: "30px",
        origin: "bottom", // Start from the right side
        easing: "ease-out",
        reset:false,
        viewFactor: 0.2,
        interval: 300, // Delay between each element
        delay: 200, // Delay before the animation starts
        scale: 1, // Set scale to 1 or null
      });
      ScrollReveal().reveal(`.${styles.btn}`, {
        duration: 1000,
        distance: "30px",
        origin: "bottom", // Start from the right side
        easing: "ease-out",
        reset:false,
        viewFactor: 0.2,
        interval: 300, // Delay between each element
        delay: 200, // Delay before the animation starts
        scale: 1, // Set scale to 1 or null
      });
   },[])
return <>

<div className={styles.background}>

</div>

<h1 className={styles.name}>יעל ברזילאי</h1>
<h2 className={styles.title}>להפוך למותג ברגע</h2>
<div className={styles.btn}><Button text="לפרוייקטים" to="פרוייקטים"/></div>

</>


}
export default FirstScreen