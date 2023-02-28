
const Modal = ({onCloseModal, modalObj}) => {
    return(
        <div className="modalBackground">
            <div className="modal">
            <p>Id: {modalObj.id}</p>
            <p>Title: {modalObj.title}</p>
            <p>Description: {modalObj.task}</p>
            <p>Status: {modalObj.done ? "done" : "not done"}</p>
            <button className="button" onClick={onCloseModal}>Close</button>
            </div>
        </div>
    )
}
export default Modal