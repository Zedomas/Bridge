import React,{ useState } from 'react'
import Modal from 'react-modal'




export default function Modals() {
    const [modalIsOpen , setModalIsOpen] = useState(false)
    return (
        <div className="modal">  
            <button onClick={()=> setModalIsOpen(true)}>leave comment</button>
            <Modal isOpen={modalIsOpen}>
                <div className='models'>
                <textarea></textarea>
                <button>send</button>
                <div>
                    <button onClick={()=> setModalIsOpen(false)}>close</button>
                </div> 
                </div>
                <h6>comments:</h6>
                
                
            </Modal>
        </div>
    )
}
