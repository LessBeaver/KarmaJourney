import React, { useState } from 'react';
import Modal from 'react-modal';
import './Popup.css';

Modal.setAppElement('#root');
function Popup () {
    const [modalIsOpen, setModalOpen] = useState(false);

    return (
        <div>
            <div className="resultDiv">
                <button type="button" className="resultButton" onClick={() => setModalOpen(true)}>
                    Rejouer !
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