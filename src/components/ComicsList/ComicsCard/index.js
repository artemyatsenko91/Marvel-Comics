import style from './style.module.scss';
import pic from '../../../images/UW.jpg';

const ComicsCard = () => {
    return (
        <div className={style.comics_card}>
            <a href='/'>
                <img className={style.comics_img} src={pic} alt='x-men' />
            </a>
            <h3 className={style.comics_name}>
                ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
            </h3>
            <span className={style.comics_price}>9.99$</span>
        </div>
    );
};

export default ComicsCard;
