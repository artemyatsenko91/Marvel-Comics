import baba from '../../../images/baba.jpg'
import style from "./style.module.scss";

const CharacterCard = () => {
    return (
        <div className={style.char_card}>
            <img src={baba} alt="baba" />
            <div className={style.char_name}>
                <h3>ABYSS</h3>
            </div>
        </div>
    )
}

export default CharacterCard;