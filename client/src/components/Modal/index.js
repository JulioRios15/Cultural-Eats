import React from "react";
const Modal = props => {
    if (!props.show) {
        return null
    }
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 classname="modal-title">
                        Sign-in
                    </h4>
                </div>
                <div className="modal-body">
                    Username Password
                </div>
                <div className="modal-footer">
                    <button className="button">
                        Sign In
                    </button>
                    <button onClick={props.onClose} className="button">
                        close
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Modal