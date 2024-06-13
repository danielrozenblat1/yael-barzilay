import styles from "./ThirdScreen.module.css"
import {Player} from "@lordicon/react"
import logo from "../images/יעל ברזילאי לוגו שקוף.png"
import { useRef } from "react"
import NewImagesGrid from "../components/grid/NewImageGrid"
import Button from "../components/button/Button"
const ThirdScreen=()=>{
    const playerRef1=useRef(null);



return <>
<div className={styles.background}>
<div className={styles.center}><img className={styles.image} src={logo}/></div>
<div className={styles.title} id="פרוייקטים">קמצוץ מהמיתוגים שעשיתי</div>

<NewImagesGrid/>

</div>

</>


}
export default ThirdScreen