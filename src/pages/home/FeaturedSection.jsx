import React from 'react'

const featuredArray = {
    title: "עוגת גבינה לשבועותת",
    description: "עוגת גבינה קלאסית, עשירה וקטיפתית, עם מרקם אוורירי וטעם עדין שמזכיר את חג השבועות בכל ביס. שילוב מושלם של גבינות איכותיות, מתיקות מאוזנת וניחוח וניל מפנק הופך אותה לקינוח מרשים שמתאים לאירוח חגיגי, לארוחה משפחתית או לפינוק לצד כוס קפה. עוגה חגיגית שקל להתאהב בה – בדיוק כמו ששבועות צריך להיות.",
    img: "/cheese_cake.jpg",
    link: "https://all-recipes-in-one-place.netlify.app/items/12"
}

const FeaturedSection = () => {
    return (
        <div className='overflow-hidden flex lg:flex-row flex-col justify-between items-center
            sm:my-20 my-4 lg:gap-20 gap-12 px-5 lg:px-10'>
            <div className='relative'>
                <div className='absolute top-4 right-5 bg-white text-secondary px-3 py-1
                rounded-md uppercase tracking-wider'>מתכון שבועי</div>
                <img src={featuredArray.img} alt='Featured Image' className='rounded-xl w-fit md:max-w-2xl' />
            </div>

            <div className='text-start md:w-3/4 lg:w-1/2'>
                <h2 className='text-3xl font-semibold text-secondary sm:text-5xl 
                sm:leading-relaxed'>{featuredArray?.title}</h2>
                <p className='text-l lg:text-xl mt-4 text-[#5c5f5c]'>{featuredArray?.description}</p>

                <div className='lg:mt-0 lg:flex-shrink-0'>
                    <a className='mt-12 inline-flex' href={featuredArray.link}>
                        <button className='py-4 px-8 hover:bg-btnColor text-secondary hover:text-white
                        w-full transition ease-in duration-200 text-center text-base font-semibold 
                        border border-[#9c702a] focus:outline-none rounded-lg hover:cursor-pointer'>לצפייה במתכון</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default FeaturedSection