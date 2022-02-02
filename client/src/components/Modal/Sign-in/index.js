import React from "react";
const SignIn = props => {
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
                <form className="modal-body">
                    Username
                </form>
                <div className="modal-body">
                    Password
                </div>
                <div className="modal-footer">
                    <button className="button">
                        Sign In 
                    </button>
                    <button onClick={props.onClose} className="button">
                        Close
                    </button>
                </div>
            </div>
        </div>
    )
}
export default SignIn