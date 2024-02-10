
import styles from './button.module.css';
type TButton = {
    text :string;
    move: string,
    onClickEvent: (param:string) => void;
  }

const Button  = ({text, move,onClickEvent }: TButton)  => {
    return (
        <button 
        className={`${styles.btn}  ${styles[text]}`} 
        onClick={() => onClickEvent(move)}/>
    )
}

export default Button;