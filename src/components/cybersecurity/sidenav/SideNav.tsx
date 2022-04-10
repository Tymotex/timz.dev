import { Link } from 'gatsby';
import React from 'react';
import styles from './SideNav.module.scss';

interface Props {}

const SideNav: React.FC<Props> = () => {
    return (
        <nav className={styles.sidenav}>
            <menu className={styles.menu}>
                <li className={styles.logo}>
                    <Link to="/" className={styles.text}>
                        timz.dev
                    </Link>
                    <svg
                        className={styles.chevron}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                    >
                        {/*! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
                        <path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z" />
                    </svg>
                </li>
                <li className={styles.item}>
                    <Link to="/">
                        <svg
                            className={styles.image}
                            version="1.1"
                            id="home"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            width="212px"
                            height="206.25px"
                            viewBox="394.5 418.584 212 206.25"
                            enableBackground="new 394.5 418.584 212 206.25"
                            xmlSpace="preserve"
                        >
                            <path
                                d="M600.116,503.301l-88.955-77.062c-0.298-0.254-0.656-0.472-1.059-0.639c-5.693-4.32-13.557-4.119-19.049,0.639
                                l-88.956,77.053c-6.376,5.519-7.181,15.313-1.784,21.839c3.411,4.128,9.069,4.075,13.408,3.2v82.834
                                c0,6.253,5.02,11.344,11.195,11.344h53.586c2.414,0,4.374-1.96,4.374-4.373v-72.242h36.471v72.242c0,2.413,1.959,4.373,4.372,4.373
                                h53.587c6.175,0,11.195-5.091,11.195-11.344v-82.834c4.355,0.857,9.996,0.919,13.407-3.2
                                C607.297,518.606,606.492,508.802,600.116,503.301z M595.166,519.551c-0.9,1.058-5.563,0.48-9.288-1.146
                                c-1.355-0.595-2.93-0.454-4.146,0.351c-1.233,0.805-1.985,2.187-1.985,3.655v88.746c0,1.435-1.103,2.598-2.449,2.598h-49.214
                                v-72.242c0-2.414-1.959-4.373-4.373-4.373h-45.217c-2.414,0-4.373,1.959-4.373,4.373v72.242h-49.214
                                c-1.347,0-2.449-1.163-2.449-2.598V522.41c0-1.478-0.744-2.859-1.985-3.664c-1.233-0.796-2.799-0.919-4.155-0.342
                                c-3.306,1.461-8.334,2.283-9.279,1.138c-2.388-2.887-2.046-7.207,0.77-9.647l88.956-77.061c2.432-2.099,5.956-2.099,8.388,0
                                c0.314,0.28,0.674,0.507,1.05,0.674l88.186,76.405C597.213,512.344,597.553,516.664,595.166,519.551L595.166,519.551z"
                            />
                        </svg>
                        <span className={styles.text}>Home</span>
                    </Link>
                </li>
                <li className={`${styles.item} ${styles.active}`}>
                    <Link to="/cybersecurity">
                        <svg
                            className={`${styles.image} ${styles.active}`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                        >
                            {'{'}/*! Font Awesome Pro 6.1.1 by @fontawesome -
                            https://fontawesome.com License - https://fontawesome.com/license
                            (Commercial License) Copyright 2022 Fonticons, Inc. */{'}'}
                            <path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z" />
                        </svg>
                        <span className={styles.text}>Cybersecurity</span>
                    </Link>
                </li>

                <li className={styles.item}>
                    <a href="https://github.com/Tymotex/CTFs/" target="_blank">
                        <svg
                            className={styles.image}
                            viewBox="0 0 1024 1024"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                                transform="scale(64)"
                            />
                        </svg>
                        <span className={styles.text}>GitHub</span>
                    </a>
                </li>
            </menu>
        </nav>
    );
};

export default SideNav;
