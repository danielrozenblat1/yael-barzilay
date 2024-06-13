import Box from "../components/box/Box"
import styles from "./SecondScreen.module.css"
import card from "../icons/wired-gradient-734-id-business-card-1.json"
import rgb from "../icons/wired-gradient-2288-rgb-colors.json"
import palette from "../icons/wired-gradient-761-pantone-color-palette.json"
import paper from "../icons/wired-gradient-88-document-user.json"
import ScrollReveal from "scrollreveal"
import { useEffect } from "react"
const SecondScreen=()=>{
    useEffect(()=>{
        ScrollReveal().reveal(`.${styles.header}`, {
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
    },[])

    return <>
<div className={styles.background}>
    <div className={styles.header}>אז איך הקסם קורה?</div>
<div className={styles.row}>

<Box icon={rgb} title="תיאום צבעים לבחירתך" description="לפני שבכלל אני מתחילה לעבוד על הלוגו שלך , אנחנו נשב על הצבעים שהכי מתאימים לעסק שלך ותקבל 3 גרסאות שונות לכל רקע שתבחר" />

<Box icon={palette} title="פלטת צבעי מותג" description="בנוסף ללוגו , תקבל ממני פלטת צבעי מותג שדרכה תוכל לשלוט על המיתוג שלך בכל סביבת רקע שהוא נמצא" /></div>
<div className={styles.row}>
<Box icon={card} title="כרטיס ביקור" description="בנוסף ללוגו תקבל מיתוג מלא - שכולל עיצוב מלא לכרטיס ביקור שלך" />
<Box icon={paper} title="ניירת משרדית" description="בנוסף ללוגו תקבל מיתוג מלא - שכולל עיצוב מלא לניירת משרדית שלך" />
</div>



</div>
    </>
}
export default SecondScreen