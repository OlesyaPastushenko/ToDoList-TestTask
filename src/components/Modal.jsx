
const Modal = ({onCloseModal, modalObj}) => {
    return(
        <div className="modalBackground">
            <div className="modal">
            <h2>{modalObj.title}</h2>
            <div className="modalInfoWrap">
            <br></br>
            <h3>Description:</h3>
            <p> {modalObj.task}</p>
            <div>Status: <p className={modalObj.done ? "doneTrue" : "btnDone"}>&#10003;</p></div>
            </div>
            <button className="button" onClick={onCloseModal}>Close</button>
            </div>
        </div>
    )
}
export default Modal