import React from 'react'
import '../styles/notification.css'
export const Notification = ({message}) => {
    
    if (message === null){
        return null
    }
    
    return (
        <div className="sucessMessage">
            {message}
        </div>
    )
}

