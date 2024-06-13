import styles from "./Button.module.css"
import {Link as ScrollLink} from "react-scroll"
const Button=(props)=>{

    return <>
    <div className={styles.wrap}>
    <ScrollLink to={props.to}  smooth={true}  duration={500} offset={-70} className={styles.button}>{props.text}</ScrollLink>
</div>
    
    </>
}
export default Button