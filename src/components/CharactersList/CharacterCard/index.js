import style from './style.module.scss';

const CharacterCard = (props) => {
    const { charImg, charName } = props;
    return (
        <div
            className={style.char_card}
            onClick={() => props.onClick(props.id)}
        >
            <div className={style.img}>
                <img src={charImg} alt={charName} />
            </div>
            <div className={style.char_name}>
                <h3>{charName}</h3>
            </div>
        </div>
    );
};

export default CharacterCard;
