import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm">
          <h2 className="mb-4 text-4xl  font-extrabold text-gray-900 insane">Testimonials</h2>
          <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl">
            Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind
          </p>
        </div>
        <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500">
              <h3 className="text-lg font-semibold text-gray-900">Speechless with how easy this was to integrate</h3>
              <p className="my-4">
                I recently got my hands on Flowbite Pro, and holy crap, I&apos;m speechless with how easy this was to integrate within my application. Most templates are a pain, code is scattered, and near impossible to theme.
              </p>
              <p className="my-4">
                Flowbite has code in one place and I&apos;m not joking when I say it took me a matter of minutes to copy the code, customise it and integrate within a Laravel + Vue application.
              </p>
              <p className="my-4">If you care for your time, I hands down would go with this.</p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <img
                className="w-9 h-9 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium text-left">
                <div className='font-semibold'>Bonnie Green</div>
                <div className="text-sm font-light text-gray-500">Developer at Open AI</div>
              </div>
            </figcaption>
          </figure>

          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500">
              <h3 className="text-lg font-semibold text-gray-900">Solid foundation for any project</h3>
              <p className="my-4">
                FlowBite provides a robust set of design tokens and components based on the popular Tailwind CSS framework. From the most used UI components like forms and navigation bars to the whole app screens designed both for desktop and mobile, this UI kit provides a solid foundation for any project.
              </p>
              <p className="my-4">
                Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <img
                className="w-9 h-9 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium text-left">
                <div className='font-semibold'>Roberta Casas</div>
                <div className="text-sm font-light text-gray-500">Lead designer at Dropbox</div>
              </div>
            </figcaption>
          </figure>

          
        </div>
      
    
      </div>
    </section>
  );
};

export default Testimonials;