import style from './style.module.scss';
import bannerLeftPic from '../../images/Avengers.png';
import bannerLeftLogo from '../../images/Avengers logo.png';

const Banner = () => {
    return (
        <a className={style.banner} href='/'>
            <img src={bannerLeftPic} alt='2' />
            <h2 className={style.banner_title}>
                New comics every week!
                <br />
                Stay tuned!
            </h2>
            <img src={bannerLeftLogo} alt='3' />
        </a>
    );
};

export default Banner;
