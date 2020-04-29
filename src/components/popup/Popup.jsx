import React, { useState } from 'react';
import Modal from 'react-modal';
import './Popup.css';

Modal.setAppElement('#root');
function Popup () {
    const [modalIsOpen, setModalOpen] = useState(false);

    return (
        <div>
            <div>
                <button type="button" onClick={() => setModalOpen(true)}>
                    REJOUER
                </button>
            </div>
            <Modal 
            className="Modal" 
            overlayClassName="Overlay"
            isOpen={modalIsOpen} 
            onRequestClose={() => setModalOpen(false)}
            >
                <div>
                    <div  className="ModalQuote">
                        <span>C'est le jeu ma pauvre Lucette</span>
                    </div>
                    <button 
                    className="ModalButton"
                    type="button" 
                    onClick={() => setModalOpen(false)} 
                    >
                        You Loose
                    </button>
                </div>
            </Modal>
        </div>
    )
}

export default Popup;