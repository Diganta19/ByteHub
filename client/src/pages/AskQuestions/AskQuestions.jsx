import React from 'react'
import "./AskQuestions.css"

const AskQuestions = () => {
    
  return (
    <div className='ask-question'>
        <div className="ask-ques-container">
            <h1>Ask a Question</h1>
                <form >
                <div className="ask-form-container">
                    <lable className="ask-ques-title">
                        <h4>Title</h4>
                        <p>Be specific</p>
                        <input type="text"  placeholder = "e.g. What is a Fucntion?"  />
                    </lable>
                    <lable className="ask-ques-body">
                        <h4>Body</h4>
                        <p>Incluide all Details</p>
                        <textarea name="" cols="30" rows="10"></textarea>
                    </lable>
                    <lable className="ask-ques-tags">
                        <h4>Tags</h4>
                        <p>Add upto 5 tags to describe your Question</p>
                        <input type="text"  placeholder = "e.g. Java XML React"  />
                    </lable>
            </div>
                <input type="submit" value="Review Your Question" className='review-btn'/>
            </form>
        </div>
    </div>
    
      
    
  )
}

export default AskQuestions
