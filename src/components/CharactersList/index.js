import { useEffect, useState } from 'react';
import { ButtonLong } from '../Buttons';
import CharacterCard from './CharacterCard';
import style from './style.module.scss';
import MarvelServices from '../MarvelServices';
import Spinner from '../Spinner';
import ErrorMessage from '../ErrorMessage';

const CharacterList = (props) => {
    const [charsData, setCharsData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [limit, setLimit] = useState(9);

    useEffect(() => {
        const fetchChars = new MarvelServices();
        fetchChars
            .getCharacters(limit)
            .then((res) => {
                setCharsData(res.data.results);
                setLoading(false);
            })
            .catch(() => {
                setError(true);
                setLoading(false);
            });
    }, [limit]);

    const downloadMoreCharacters = () => {
        setLimit((prevState) => prevState + 9);
    };

    const loadingChars = loading ? (
        <div className={style.spinner}>
            <Spinner />
        </div>
    ) : null;
    const content = !loading
        ? charsData.map((item) => (
              <CharacterCard
                  charImg={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                  charName={item.name}
                  id={item.id}
                  key={item.id}
                  onClick={props.onCharSelected}
              />
          ))
        : null;
    const errorMessage = error ? <ErrorMessage /> : null;
    return (
        <div className={style.characters}>
            <div className={style.char_grid}>
                {loadingChars}
                {content}
                {errorMessage}
            </div>
            <div className={style.button}>
                <ButtonLong
                    btn_text='load more'
                    onClick={downloadMoreCharacters}
                />
            </div>
        </div>
    );
};

export default CharacterList;
