import './Modal.css';

import React, { useContext } from 'react';

import { PageContext } from '../../App.js';

function Modal() {

    const setSearchClicked = useContext(PageContext);

    return (
        <div id="modal">
            <div id="modal-content">
                <div id="modal-close-container">
                    <span id="modal-close" onClick={() => setSearchClicked(false)}>&times;</span>
                </div>
                <h2 id="modal-title">Search</h2>
                <p id="modal-body">Search Box</p>
            </div>
        </div>
    );
};

export default Modal;