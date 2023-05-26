import style from './style.module.scss';

const SkeletonCharacterInfo = () => {
    return (
        <>
            <p className={style.char__select}>
                Please select a character to see information
            </p>
            <div className={style.skeleton}>
                <div className={`pulse ${style.skeleton__header}`}>
                    <div className={`pulse ${style.skeleton__circle}`}></div>
                    <div className={`pulse ${style.skeleton__mini}`}></div>
                </div>
                <div className={`pulse ${style.skeleton__block}`}></div>
                <div className={`pulse ${style.skeleton__block}`}></div>
                <div className={`pulse ${style.skeleton__block}`}></div>
            </div>
        </>
    );
};

export default SkeletonCharacterInfo;
