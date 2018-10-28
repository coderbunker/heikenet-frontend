import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import {Link} from 'react-router-dom';

const cx = classNames.bind(styles);

const Header = () => {
    return(
    <Header className={cx('header')}>
        <div className={cx('header-content')}>
            <div className={cx('brand')}>
            <Link to='/'> HeikeNet</Link>
               
            </div>
            <div className={cx('right')}>
                rightMenu
            </div>
        </div>
    </Header>
    )
}

export default Header;