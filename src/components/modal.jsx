import { useEffect } from "react";

const Modal = (props, closeModal) => {
    useEffect(() => {
        setTimeout(() => {
            props.closeModal()
        }, 3000)
    })
    return (
        <div className="modal-dark">
            just a modal
            <h3>{props.modalContent}</h3>
        </div>
    )
}

export default Modal;