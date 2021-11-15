import styles from './navbar.module.css';
import { navMenu } from './navMenu';
import logo from '../../assets/images/logo.svg';
import Image from 'next/image';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';
import { useState } from 'react';

const Menu = () => (
    <>
        {navMenu.map(item => (
            <p key={item.id}>
                <a href={item.anchor}>{item.name}</a>
            </p>
        ))}
    </>
);

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className={styles.navbar}>
            <div className={styles.navbar_links}>
                <div className={styles.navbar_logo}>
                    <Image
                        className={styles.navbar_logo_img}
                        src={logo}
                        alt='Logo'
                        width={62.56}
                        height={16.02}
                    />
                </div>
                <div className={styles.navbar_links_container}>
                    <Menu />
                </div>
            </div>
            <div className={styles.navbar_sign}>
                <p>Sign in</p>
                <button type='button'>Sign Up</button>
            </div>

            <div className={styles.navbar_menu}>
                {toggleMenu ? (
                    <RiCloseLine
                        color='#fff'
                        size={27}
                        onClick={() => setToggleMenu(false)}
                    />
                ) : (
                    <RiMenu3Line
                        color='#fff'
                        size={27}
                        onClick={() => setToggleMenu(true)}
                    />
                )}
                {toggleMenu && (
                    <div
                        className={`${styles.navbar_menu_container} scale-up-center`}
                    >
                        <div className={styles.navbar_menu_container_links}>
                            <Menu />
                            <div
                                className={
                                    styles.navbar_menu_container_links_sign
                                }
                            >
                                <p>Sign in</p>
                                <button type='button'>Sign Up</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
