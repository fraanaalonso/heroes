import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

export const LoginScreen = ({history}) => {

    const { dispatch } = useContext(AuthContext)

    const handleClick = () => {
        //history.replace('/'); //cant go back. We avoid seeing the login page while logged in
        history.replace('/');
        dispatch({
            type: types.login,
            payload: {
                name: 'Francisco'
            }
        })
    }
    return (
        <div className="container mt-5">
            <h1>Login</h1>

            <hr />

            <button
                className="btn btn-primary"
                onClick={ handleClick }
            >
                Login

            </button>
        </div>
    )
}
