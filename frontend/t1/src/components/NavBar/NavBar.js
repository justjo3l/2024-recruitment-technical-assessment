import './NavBar.css';

import React from 'react';

import unilectivesLogo from '../../assets/unilectives.svg';

import bookIcon from '../../assets/book-open.svg';
import shieldIcon from '../../assets/shield-check.svg';

import barsArrowUpIcon from '../../assets/bars-arrow-up.svg';
import userIcon from '../../assets/user-circle.svg';
import moonIcon from '../../assets/moon.svg';
import arrowEndIcon from '../../assets/arrow-right-end-on-rectangle.svg';

function NavBar() {
    return (
        <div id="navbar">
            <nav id="navbar-main">
                <header>
                    <div>
                        <img src={unilectivesLogo} alt="Unilectives Logo"/>
                    </div>
                    <hr />
                </header>
                <main>
                    <section id="upper-links">
                        <ul>
                            <li><img src={bookIcon} alt="Open Book Icon" /></li>
                            <li><img src={shieldIcon} alt="Checked Shield Icon" /></li>
                        </ul>
                    </section>
                    <section id="lower-links">
                        <ul>
                            <li><img src={barsArrowUpIcon} alt="Bars Icon with an upwards pointing arrow" id="bars-arrow-icon"/></li>
                            <li><img src={userIcon} alt="Circled User Icon" /></li>
                            <li><img src={moonIcon} alt="Moon Icon"/></li>
                            <li><img src={arrowEndIcon} alt="Exit Arrow Icon"/></li>
                        </ul>
                    </section>
                </main>
            </nav>
        </div>
    );
}

export default NavBar;