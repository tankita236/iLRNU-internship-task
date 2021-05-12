import { Home } from './Home';

export function LoggedInHomePage() {
    return (
        <Home userLoggedIn={true}/>
    )
}