import React from 'react';


//props- Props are arguments passed into React components
function Card(props){
  console.log(props)
  return(
    <>
      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
      <img className="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/15838266/pexels-photo-15838266/free-photo-of-camping-among-trees-with-city-behind-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width="384" height="512"/>
      <div className="pt-6 space-y-4">
      <blockquote>
      <p className="text-lg font-me">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
      </blockquote>
      <figcaption>
      <div>
        {props.username}
      </div>
      <div>
        Staff Engineer, Algolia
      </div>
      </figcaption>
      </div>
      </figure>
    </>
  )
}
export default Card