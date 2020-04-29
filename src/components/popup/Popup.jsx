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
            isOpen={modalIsOpen} 
            onRequestClose={() => setModalOpen(false)}
            style={{
                overlay: {
                    backgroundColor: '#e6ffff'
                }
            }}
            >
                <div>
                    <h2>C'est le jeu ma pauvre Lucette</h2>
                    <button 
                    type="button" 
                    onClick={() => setModalOpen(false)} 
                    style={{
                        width: '20%',
                        position: 'absolute',
                        bottom: '0',
                        right: '0'
                    }}
                    >
                        You Loose
                    </button>
                </div>
            </Modal>
        </div>
    )
}

export default Popup;