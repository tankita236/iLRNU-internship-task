import { Logo } from './Logo';
import { TutorButton } from './TutorButton';
import { Profile } from './Profile';

export function Header() {
    return (
        <div className="flex items-center justify-between w-full px-2 pb-4 md:px-8 lg:px-16">
            <Logo />
            <div className="flex justify-end items-center">
                <TutorButton />
                <Profile />
            </div>
        </div>
    )
}