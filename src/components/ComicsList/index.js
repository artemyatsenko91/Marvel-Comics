import { ButtonLong } from '../Buttons';
import ComicsCard from './ComicsCard';
import style from './style.module.scss';

const ComicsList = () => {
    return (
        <div className={style.comics}>
            <div className={style.comics_grid}>
                <ComicsCard />
                <ComicsCard />
                <ComicsCard />
                <ComicsCard />
                <ComicsCard />
                <ComicsCard />
                <ComicsCard />
                <ComicsCard />
            </div>
            <div className={style.button}>
                <ButtonLong btn_text='load more' />
            </div>
        </div>
    );
};

export default ComicsList;
