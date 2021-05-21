import React from 'react';
import DummyBackground from '../static/images/dummy_background.jpeg';


export function EventCard() {
    return (
        <div>
            <div className="relative cursor-pointer rounded-xl overflow-hidden">
                <div>
                    <img alt="dummyBackground" src={DummyBackground} className="w-full h-52" />
                </div>
                <div className="absolute bottom-0 py-2 w-full" style={{backgroundColor:"rgba(0,0,0,0.5)"}} >
                    <div className="font-bold text-center text-white opacity-100">Dummy Text</div>
                </div>
            </div>
        </div>
    )
}
