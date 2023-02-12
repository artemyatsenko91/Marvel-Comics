import style from './style.module.scss';
import { ButtonRed, ButtonGrey } from '../Buttons';
import loki from '../../images/loki.jpg';

const CharacterInfo = () => {
    return (
        <aside className={style.character_info}>
            <div className={style.about_char}>
                <img src={loki} alt='loki' />
                <div className={style.char_name_and_buttons}>
                    <h3 className={style.char_name}>LOKI</h3>
                    <div className={style.char_buttons}>
                        <ButtonRed btn_text='homepage' />
                        <ButtonGrey btn_text='wiki' />
                    </div>
                </div>
            </div>
            <p className={style.char_bio}>
                In Norse mythology, Loki is a god or jötunn (or both). Loki is
                the son of Fárbauti and Laufey, and the brother of Helblindi and
                Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the
                wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki
                is the father of Nari and/or Narfi and with the stallion
                Svaðilfari as the father, Loki gave birth—in the form of a
                mare—to the eight-legged horse Sleipnir. In addition, Loki is
                referred to as the father of Váli in the Prose Edda.
            </p>
            <h4 className={style.comics_title}>Comics:</h4>
            <ul className={style.comics_list}>
                <li className={style.list_item}>
                    All-Winners Squad: Band of Heroes (2011) #3
                </li>
                <li className={style.list_item}>
                    All-Winners Squad: Band of Heroes (2011) #3
                </li>
                <li className={style.list_item}>
                    All-Winners Squad: Band of Heroes (2011) #3
                </li>
                <li className={style.list_item}>
                    All-Winners Squad: Band of Heroes (2011) #3
                </li>
            </ul>
        </aside>
    );
};

export default CharacterInfo;
