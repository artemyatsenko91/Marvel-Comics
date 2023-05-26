import style from './style.module.scss';
import { ButtonRed, ButtonGrey } from '../Buttons';

const CharacterInfo = ({ char }) => {
    const charBio = () => {
        if (char.description) {
            return char.description;
        } else return 'No description for this character';
    };

    const comicsList = () => {
        if (char[0].comics.items.length > 1) {
            return char[0].comics.items.map((item, index) => {
                if (index > 14) return null;
                return (
                    <li className={style.list_item} key={index}>
                        {item.name}
                    </li>
                );
            });
        } else return 'Character has no comics';
    };

    return (
        <>
            <div className={style.about_char}>
                <div className={style.img_wrapper}>
                    <img
                        className={style.img}
                        src={`${char[0].thumbnail.path}.${char[0].thumbnail.extension}`}
                        alt={char[0].name}
                    />
                </div>
                <div className={style.char_name_and_buttons}>
                    <h3 className={style.char_name}>{char[0].name}</h3>
                    <div className={style.char_buttons}>
                        <ButtonRed
                            btn_text='homepage'
                            btnUrl={char[0].urls[0].url}
                        />
                        <ButtonGrey
                            btn_text='wiki'
                            btnUrl={char[0].urls[1].url}
                        />
                    </div>
                </div>
            </div>
            <p className={style.char_bio}>{charBio()}</p>
            <h4 className={style.comics_title}>Comics:</h4>
            <ul className={style.comics_list}>{comicsList()}</ul>
        </>
    );
};

export default CharacterInfo;
