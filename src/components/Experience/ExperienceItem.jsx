import React from 'react'

const ExperienceItem = ({ companyName, date, description, title, imageLink, link }) => {
  return (
    <div class="flex items-center lg:w-full mx-auto pb-5 pt-5 mb-5 sm:flex-row flex-col">
      <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full text-red-500 flex-shrink-0">
        <img src={imageLink == "" ? "/img/company.png" : imageLink} width={150} height={150} />
      </div>
      <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 class="text-gray-900 text-lg title-font font-medium mb-1">{title}</h2>
        <h3 class="text-gray-900 text-lg title-font font-serif mb-1">{companyName}</h3>
        <h5 className='text-gray-900 text-base title-font font-mono mb-1'>{date}</h5>
        <p class="leading-relaxed text-base">{description}</p>
        {/* If you want to use link, give link as props.*/}
        { link &&
          <a class="mt-3 text-red-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        }
      </div>
    </div>
  )
}

export default ExperienceItem