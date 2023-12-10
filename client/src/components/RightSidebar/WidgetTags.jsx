import React from 'react'

const WidgetTags = () => {
  const tags= ["HTML","CSS","JavaScript","React","Angular","Node.JS","Express","MongoDB","SQL"]
  return (
    <div className='widget-tags'>
      <h4>Watched Tags</h4>
      <div className="widget-tags-div">
        {
          tags.map((tag)=>(
            <p key={tag}>{tag}</p>
          ))
        }
      </div>
      
    </div>
  )
}

export default WidgetTags
