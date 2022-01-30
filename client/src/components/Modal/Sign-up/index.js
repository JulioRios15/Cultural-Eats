import React from "react";
export default function SignUp (props) {
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
                    <form>
                    <input  className="input"
          type="text" />
                    </form>
                </div>
                <div className="modal-body">
                    Email
                </div>
                <div className="modal-body">
                    Password
                </div>
                <div className="modal-cult">
                <input type="checkbox" id="American"/>
                <label for="American">American</label><br/>
                <input type="checkbox" id="British"/>
                <label for="British">British</label><br/>
                <input type="checkbox" id="Canadian"/>
                <label for="Canadian">Canadian</label><br/>
                <input type="checkbox" id="Chinese"/>
                <label for="Chinese">Chinese</label><br/>
                <input type="checkbox" id="Croatian"/>
                <label for="Croatian">Croatian</label><br/>
                <input type="checkbox" id="Dutch"/>
                <label for="Dutch">Dutch</label><br/>
                <input type="checkbox" id="Egyptian"/>
                <label for="Egyptian">Egyptian</label><br/>
                <input type="checkbox" id="French"/>
                <label for="French">French</label><br/>
                <input type="checkbox" id="Greek"/>
                <label for="Greek">Greek</label><br/>
                <input type="checkbox" id="Indian"/>
                <label for="Indian">Indian</label><br/>
                <input type="checkbox" id="Irish"/>
                <label for="Irish">Irish</label><br/>
                <input type="checkbox" id="Italian"/>
                <label for="Italian">Italian</label><br/>
                <input type="checkbox" id="Japanese"/>
                <label for="Japanese">Indian</label><br/>
                <input type="checkbox" id="Kenyan"/>
                <label for="Kenyan">Kenyan</label><br/>
                <input type="checkbox" id="Malaysian"/>
                <label for="Malaysian">Malaysian</label><br/>
                <input type="checkbox" id="Mexican"/>
                <label for="Mexican">Mexican</label><br/>
                <input type="checkbox" id="Moroccan"/>
                <label for="Moroccan">Moroccan</label><br/>
                <input type="checkbox" id="Portuguese"/>
                <label for="Portuguese">Portuguese</label><br/>
                <input type="checkbox" id="Russian"/>
                <label for="Russian">Russian</label><br/>
                <input type="checkbox" id="Spanish"/>
                <label for="Spanish">Spanish</label><br/>
                <input type="checkbox" id="Thai"/>
                <label for="Thai">Thai</label><br/>
                <input type="checkbox" id="Tunisian"/>
                <label for="Tunisian">Tunisian</label><br/>
                <input type="checkbox" id="Turkish"/>
                <label for="Turkish">Turkish</label><br/>
                <input type="checkbox" id="Vietnamese"/>
                <label for="Vietnamese">Vietnamese</label><br/>
                </div>
                <div className="modal-footer">
                    <button className="button">
                        Sign Up
                    </button>
                    <button onClick={props.onClose} className="button">
                        close
                    </button>
                </div>
            </div>
        </div>
    )
}
