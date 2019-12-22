import React from 'react'

const ErrorMessage = ( {touched, message }) => {
    if (!touched) {
        return <div className="form-message"></div>
    }

    if (message) {
        return <div className="form-message messageInvalid">{message}</div>
    }
    return <div className="form-message messageValid">Hợp lệ</div>
}

export default ErrorMessage;