import React from 'react'
import { GrServices } from 'react-icons/gr';

const ServiceItem = ({ name, description,icon}) => {
    return (
        <div class="p-4 md:w-1/3">
            <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div class="flex items-center mb-3">
                    <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    {!icon ? <GrServices  /> : icon }
                    </div>
                    <h2 class="text-gray-900 text-lg title-font font-medium">{name}</h2>
                </div>
                <div class="flex-grow">
                    <p class="leading-relaxed text-base">{description}</p>
                    {/* <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a> */}
                </div>
            </div>
        </div>
    )
}

export default ServiceItem
