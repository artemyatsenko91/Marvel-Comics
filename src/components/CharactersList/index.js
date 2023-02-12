import { ButtonLong } from '../Buttons';
import CharacterCard from './CharacterCard';
import style from './style.module.scss';

const CharacterList = () => {
    return (
        <div className={style.characters}>
            <div className={style.char_grid}>
                <CharacterCard />
                <CharacterCard />
                <CharacterCard />
                <CharacterCard />
                <CharacterCard />
                <CharacterCard />
                <CharacterCard />
                <CharacterCard />
                <CharacterCard />
            </div>
            <div className={style.button}>
                <ButtonLong btn_text='load more' />
            </div>
        </div>
    );
};

export default CharacterList;
