import React from 'react'
import "../../App.css"
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import TagsList from "./TagsList"
import "./Tags.css"

const Tags = () => {
    const tagsList = [{
        id:1,
        tagName:"Java",
        tagDesc:"Programming Langauage"
    },{
        id:2,
        tagName:"C++",
        tagDesc:"Programming Langauage"
    }]
  return (
    <div className='home-container-1'>
      <LeftSidebar />
      <div className="home-container-2">
        <h1 className='tags-h1'>Tags</h1>
        <p className='tags-p'>A tag</p>
        <p className='tags-p'>Using</p>
        <div className="tags-list-container">
            {
                tagsList.map((tag)=>(
                    <TagsList tag={tag} key={tag.id}/>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default Tags
