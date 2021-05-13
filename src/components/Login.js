import React from 'react';
import { Link } from 'react-router-dom';
import CloseIcon from '../static/images/close.svg';

export function Login({
    closeLoginModal
}) {
    const [name, setName] = React.useState('');
    const [password, setPassword] = React.useState('');
    function handleNameChange(e) {
        setName(e.target.value);
    }
    function handlePasswordChange(e) {
        setPassword(e.target.value)
    }
    return (
        <div className="flex items-center content-center justify-center w-full h-full">
            <form className="absolute px-6 pt-4 pb-2 text-center bg-white border rounded-2xl shadow-md sm:w-1/2 lg:w-1/3">
                <div className="flex justify-end cursor-pointer" onClick={closeLoginModal}>
                    <img alt="Close" src={CloseIcon} />
                </div>
                <h3 className="text-center text-lg font-semibold mb-4">Login</h3>
                <input type="text" placeholder="Enter name" value={name} onChange={handleNameChange} className="w-full p-2 mb-3 text-gray-900 rounded-md bg-gray-100" />
                <input type="password" placeholder="Enter password" value={password} onChange={handlePasswordChange} className="w-full p-2 mb-3 text-gray-900 rounded-md bg-gray-100" />
                <p className="flex justify-end mb-3 text-sm text-gray-600 cursor-pointer">Forgot Password</p>
                <Link to="/loggedin-home-page">
                    <button className="w-full p-2 mb-3 text-white font-medium rounded-xl bg-blue-900">
                        Login
                    </button>
                </Link>
                <div className="w-full p-2 mb-3 text-white font-medium text-blue-900 rounded-xl border-2 border-blue-900">
                    Login with gmail
                </div>
                <p className="text-center my-4">Not a member of iLRNU? <Link to="/loggedin-home-page" className="text-sm font-semibold text-blue-900 cursor-pointer">Sign Up</Link></p>
            </form>
        </div>
    )
}