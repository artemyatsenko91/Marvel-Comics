import style from './style.module.scss';
import xMen from '../../images/x-men.jpg';

const SingleComicsInfo = () => {
    return (
        <div className={style.comics_info}>
            <img src={xMen} alt='x-men' />
            <div className={style.comics_descr}>
                <div className={style.comics_name_and_link}>
                    <h3 className={style.comimcs_name}>
                        X-Men: Days of Future Past
                    </h3>
                    <a className={style.comimcs_back_link} href='/'>
                        Back to all
                    </a>
                </div>
                <div className={style.comics_about}>
                    <p className={style.text}>
                        Re-live the legendary first journey into the dystopian
                        future of 2013 - where Sentinels stalk the Earth, and
                        the X-Men are humanity's only hope...until they die!
                        Also featuring the first appearance of Alpha Flight, the
                        return of the Wendigo, the history of the X-Men from
                        Cyclops himself...and a demon for Christmas!?
                    </p>
                    <span className={style.pages}>144 pages</span>
                    <span className={style.lang}>Language: en-us</span>
                    <span className={style.price}>9.99$</span>
                </div>
            </div>
        </div>
    );
};

export default SingleComicsInfo;
