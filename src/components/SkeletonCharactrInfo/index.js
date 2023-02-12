import style from './style.module.scss';

const SkeletonCharacterInfo = () => {
    return (
        <aside className={style.skeleton_character}>
            <h3 className={style.skeleton_title}>
                Please select a character to see information
            </h3>
            <div className={style.skeleton_info}>
                <div className={style.skeleton_avatar}></div>
                <div className={style.skeleton_name}></div>
            </div>
            <div className={style.skeleton_bio_block}>
                <div className={style.skeleton_bio}></div>
                <div className={style.skeleton_bio}></div>
                <div className={style.skeleton_bio}></div>
            </div>
        </aside>
    );
};

export default SkeletonCharacterInfo;
