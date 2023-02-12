import style from './style.module.scss';
import Header from '../Header';
import RandomCharacter from '../RandomCharacter';
import CharacterList from '../CharactersList';
import CharacterInfo from '../CharacterInfo';
import bg_down_decor from '../../images/bg asset.png';
import SkeletonCharacterInfo from '../SkeletonCharactrInfo';
import Banner from '../Banner';
import ComicsList from '../ComicsList';
import SingleComicsInfo from '../SingleComicsInfo';

function App() {
    return (
        <div className='App'>
            <Header />
            <main className={style.main_content}>
                <div className='container'>
                    <RandomCharacter />
                    <div className='container'>
                        <div className={style.char_content}>
                            <CharacterList />
                            <CharacterInfo />
                            {/* <SkeletonCharacterInfo /> */}
                        </div>
                    </div>
                    <img
                        className={style.bg_down_decor}
                        src={bg_down_decor}
                        alt='bg_down_decor'
                    />
                    {/* <Banner /> */}
                    {/* <ComicsList/> */}
                    {/* <SingleComicsInfo/> */}
                </div>
            </main>
        </div>
    );
}

export default App;
