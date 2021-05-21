import React from 'react';
import DummyBackground from '../static/images/dummy_background.jpeg';
import RatingStarRed from '../static/images/ratingStarRed.png';

export function CourseCard() {
    return (
        <div className="border border-transparent hover:border-gray-300 p-2 rounded-xl">
            <div className="cursor-pointer">
                <div className="rounded-xl overflow-hidden mb-1">
                    <img alt="dummyBackground" src={DummyBackground} className="w-full h-52" />
                </div>
                <div className="w-full" >
                    <div className="font-bold text-base line-clamp line-clamp-1">Dummy Title Text</div>
                    <div className="flex justify-between items-center">
                        <div className="font-bold text-base text-blue-800">42,000/-</div>
                        <div className="flex items-center gap-x-1">
                            <img alt="rating" src={RatingStarRed} className="w-4 h-4"/>
                            <span className="text-xs" style={{lineHeight:"0"}}>4.3</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}