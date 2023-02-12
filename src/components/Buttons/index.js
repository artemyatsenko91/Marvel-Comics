import style from './style.module.scss';

const ButtonRed = (props) => {
    return (
        <a className={`${style.button} ${style.button__main}`} href={props.btnUrl} onClick={props.onCLick}>
            <div className={style.inner}>{props.btn_text}</div>
        </a>
    );
};

const ButtonGrey = (props) => {
    return (
        <a className={`${style.button} ${style.button__secondary}`} href={props.btnUrl}>
            <div className={style.inner}>{props.btn_text}</div>
        </a>
    );
};

const ButtonLong = (props) => {
    return (
        <a className={`${style.button} ${style.button__long}`} href={props.btnUrl}>
            <div className={style.inner}>{props.btn_text}</div>
        </a>
    );
};

export { ButtonRed, ButtonGrey, ButtonLong };
