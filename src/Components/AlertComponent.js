import React from 'react'

function AlertComponent(props) {

    const Capitalize = (word) => {
        const lower = word.toLowerCase(); 
        return lower.charAt(0).toUpperCase() + lower.slice(1); 
    }
    return (
        props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
     {Capitalize(props.alert.type) } : {props.alert.msg}
            </div>
    )
}
export default AlertComponent
