import React from 'react';
import { EventCard } from './EventCard';

export function EventSection() {
    return (
        <div className="w-full px-4 mb-4">
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-base font-bold text-black">Event</h2>
                <div className="text-xs color-gray-400 hidden lg:block"> View All </div>
            </div>
            <EventCard />
        </div>
    )
}