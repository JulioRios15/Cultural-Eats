import React, {useEffect} from "react";
import { QUERY_AREA } from "../../../utils/queries"
import { useQuery, useMutation } from '@apollo/react-hooks';

export default function SignUp (props) {
    const { loading, data } = useQuery(QUERY_AREA);
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
                <div className="modal-body">
                    Email
                </div>
                </div>
                <div className="modal-body">
                    Email
                </div>
                <div className="modal-body">
                    Password
                </div>
                <div className="modal-cult">
                {data.area.map((item) => {
                    return (
                    <div className="modal-cult-item">
                         <input type="checkbox" id={item.name}/>
                        <label for={item.name}>{item.name}</label>          
                    </div>
                    )
                })}
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
