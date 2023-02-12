import style from './style.module.scss';

const Header = () => {
    return (
        <header className={style.header}>
            <div className='container'>
                <div className={style.header_wrapper}>
                    <h2 className={style.header_title}>
                        <span className='color-dark-red'>Marvel</span>{' '}
                        information portal
                    </h2>
                    <nav className={style.header_nav}>
                        <ul className={style.nav_list}>
                            <li>
                                <a
                                    className={`${style.nav_link} ${style.nav_link_active}`}
                                    href='/'
                                >
                                    Characters
                                </a>
                            </li>
                            /
                            <li>
                                <a className={`${style.nav_link}`} href='/'>
                                    Comics
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
