import React from 'react';
import { Header } from './Header';
import { DropDown } from './Dropdown';
import { Login } from './Login';

export const HomeContext = React.createContext()
export function Home({
    userLoggedIn
}) {
    const [dropDownOpen, setDropDownOpen] = React.useState(false);
    const [loginOpen, setLoginOpen] = React.useState(false);

    const dropDownListItems = [
        { name: 'Log in', handleClick: handleLoginClick },
        { name: 'Sign up' },
        { name: 'How online Tutoring works' },
        { name: 'Help center' }
    ];

    if (userLoggedIn) {
        dropDownListItems[0] = { name: 'Log in' }
    }

    function handleLoginClick() {
        setLoginOpen(loginOpen => !loginOpen);
        setDropDownOpen(false);
    }
    function handleProfileClick() {
        setDropDownOpen(dropDownOpen => !dropDownOpen);
    }
    function closeLoginModal() {
        setLoginOpen(false);
    }
    return (
        <HomeContext.Provider value={{
            userLoggedIn,
            handleProfileClick
        }}>
            <div className="relative w-full h-72 md:h-screen px-2 pt-3 bg-landing-image bg-center bg-no-repeat bg-cover overflow-hidden mb-4">
                <Header />
                {dropDownOpen ? <DropDown dropDownListItems={dropDownListItems} /> : null}
                {loginOpen ? <Login closeLoginModal={closeLoginModal} /> : null}
            </div>
        </HomeContext.Provider>
    )
}