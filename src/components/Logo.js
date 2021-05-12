import BrandLogo from '../static/images/Rectangle1.svg';

export function Logo() {
    return (
        <div className="inline-block w-24 overflow-hidden text-white  cursor-pointer sm:w-28 md:w-32">
            <img  alt="Logo" src={BrandLogo}/>
        </div>
    )
}