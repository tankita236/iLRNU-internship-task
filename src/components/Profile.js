import React from 'react';
import { HomeContext } from './Home';
import HamburgerLogo from '../static/images/humberger.svg';
import UserProfileLogo from '../static/images/user-profile.svg';
import ProfileLogo from '../static/images/profile.svg';

export function Profile() {
    const { handleProfileClick, userLoggedIn } = React.useContext(HomeContext);
    return (
        <div>
            {
                userLoggedIn ?
                    (
                        <div className="flex items-center rounded-xl bg-white py-2 px-4">
                            <button className="w-9 h-9 mr-4 cursor-pointer" onClick={handleProfileClick}>
                                <img alt="hamburger" src={HamburgerLogo} />
                            </button>
                            <div className="w-9 h-9">
                                <img alt="profile" src={UserProfileLogo} />
                            </div>
                        </div>
                    ) :
                    (<button className="w-9 h-9" onClick={handleProfileClick}>
                        <img alt="profile" src={ProfileLogo} />
                    </button>)

            }
        </div>

    )
}