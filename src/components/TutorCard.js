import React from 'react';
import DummyBackground from '../static/images/dummy_background.jpeg';
import RatingStarRed from '../static/images/ratingStarRed.png';

export function TutorCard() {
    return (
        <div className="p-2 rounded-xl" style={{ boxShadow: " 0 0 4px rgba(0,0,0,0.3)" }}>
            <div className="cursor-pointer flex flex-row flex-auto">
                <div className="flex">
                    <img alt="dummyBackground" src={DummyBackground} className="w-24 //h-24 rounded-xl" />
                </div>
                <div className="w-full pl-2" >
                    <div className="font-bold text-base line-clamp line-clamp-1 text-blue-900">Dummy Title Text</div>
                    <div className="font-normal text-xs line-clamp line-clamp-1 text-gray-800">SubTitle Text</div>
                    <div className="hidden">
                        <p className="font-normal text-xs line-clamp line-clamp-3 text-gray-500">Dummy Content Dummy ContentDummy ContentDummy ContentDummy ContentDummy ContentDummy ContentDummy ContentDummy ContentDummy ContentDummy ContentDummy ContentDummy ContentDummy ContentDummy ContentDummy ContentDummy ContentDummy ContentDummy Content</p>
                    </div>
                    <div className="flex gap-2 overflow-hidden">
                        <p className="text-blue-900 text-sm font-bold">Maths</p>
                        <p className="text-blue-900 text-sm font-bold">Physics</p>
                        <p className="text-blue-900 text-sm font-bold">Computer</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="font-bold text-base text-blue-800">600 <span className="font-normal"> / Hr </span></div>
                        <div className="flex items-center gap-x-1">
                            <img alt="rating" src={RatingStarRed} className="w-4 h-4" />
                            <div className="text-xs leading-none">4.3</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}