import { Component } from 'react';
import style from './style.module.scss';
import decoration from '../../images/Decoration.png';
import { ButtonRed, ButtonGrey } from '../Buttons';
import MarverlService from '../MarvelServices';
import Spinner from '../Spinner';
import ErrorMessage from '../ErrorMessage';

class CharacterInfoUpper extends Component {
    state = {
        char: {},
        loading: true,
        error: false,
    };
    marvelService = new MarverlService();
    onError = () => {
        this.setState({
            loading: false,
            error: true,
        });
    };
    componentDidMount = () => {
        this.updateChar();
    };
    updateChar = () => {
        this.marvelService
            .getRandomCharacter(
                Math.floor(Math.random() * (1011400 - 1011000)) + 1011000
            )
            .then((res) => {
                this.setState({
                    char: {
                        name: res.data.results[0].name,
                        description: res.data.results[0].description,
                        thumbnail:
                            res.data.results[0].thumbnail.path +
                            '.' +
                            res.data.results[0].thumbnail.extension,
                        homepage: res.data.results[0].urls[0].url,
                        wiki: res.data.results[0].urls[1].url,
                    },
                    loading: false,
                });
            })
            .catch(this.onError);
    };

    render() {
        const { char, loading, error } = this.state;
        const spinner = loading ? <Spinner /> : null;
        const errorMessage = error ? <ErrorMessage /> : null;
        const content = !(loading || error) ? <View char={char} /> : null;
        return (
            <div className={style.character_info_block}>
                <div className='container'>
                    <div className={style.wrapper}>
                        {spinner}
                        {errorMessage}
                        {content}
                        <div className={style.random_character}>
                            <div className={style.random_block_text}>
                                <span className={style.random_block_title}>
                                    Random character for today! <br />
                                    Do you want to get to know him better?
                                </span>
                                <span className={style.random_btn_title}>
                                    Or choose another one
                                </span>
                            </div>
                            <div className={style.btn_row}>
                                <ButtonRed
                                    btn_text='try it'
                                    onCLick={this.updateChar}
                                />
                            </div>
                            <img
                                className={style.random_bg_img}
                                src={decoration}
                                alt='decoration'
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const View = ({ char }) => {
    const { name, description, thumbnail, homepage, wiki } = char;
    let imgStyle = { objectFit: 'cover' };
    if (
        thumbnail ===
        'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
    ) {
        imgStyle = { objectFit: 'unset' };
    }
    return (
        <div className={style.character_info}>
            <img
                className={style.character_img}
                src={thumbnail}
                alt='thor'
                style={imgStyle}
            />
            <div className={style.character_descr}>
                <h2 className={style.character_name}>{name}</h2>
                <p className={style.character_bio}>{description}</p>
                <div className={style.btn_row}>
                    <ButtonRed btn_text='homepage' btnUrl={homepage} />
                    <ButtonGrey btn_text='wiki' btnUrl={wiki} />
                </div>
            </div>
        </div>
    );
};

export default CharacterInfoUpper;
