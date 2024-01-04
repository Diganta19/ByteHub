import React,{useEffect, useState} from 'react'
import {useDispatch,useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
import "./AskQuestions.css"
import {askQuestion} from "../../actions/question"
import moment from 'moment'

const AskQuestions = () => {
    const dispatch = useDispatch();
    const User = useSelector((state)=>(state.currentUserReducer));
    const question = useSelector((state)=>(state.questionsReducer));
    const navigate = useNavigate();
    const [questionTitle,setQuestionTitle] = useState('');
    const [questionBody,setQuestionBody] = useState('');
    const [questionTags,setQuestionTags] = useState('');

    const handleSubmit =  (e) =>{
        e.preventDefault();
             dispatch(askQuestion({questionTitle,questionBody,questionTags, userPosted: User.result.name,userId:User?.result?._id},navigate))
    }
    const handleEnter =(e) =>{
        if(e.key === 'Enter'){
            setQuestionBody(questionBody + "\n");
        }
    }

  return (
    <div className='ask-question'>
        <div className="ask-ques-container">
            <h1>Ask a Question</h1>
                <form onSubmit={handleSubmit}>
                <div className="ask-form-container">
                    <lable className="ask-ques-title">
                        <h4>Title</h4>
                        <p>Be specific</p>
                        <input type="text"  placeholder = "e.g. What is a Fucntion?"  onChange={(e)=>{setQuestionTitle(e.target.value)}}/>
                    </lable>
                    <lable className="ask-ques-body">
                        <h4>Body</h4>
                        <p>Incluide all Details</p>
                        <textarea name="" onKeyPress={handleEnter} cols="30" rows="10"onChange={(e)=>{setQuestionBody(e.target.value)}}></textarea>
                    </lable>
                    <lable className="ask-ques-tags">
                        <h4>Tags</h4>
                        <p>Add upto 5 tags to describe your Question</p>
                        <input type="text"  placeholder = "e.g. Java XML React"  onChange={(e)=>{setQuestionTags(e.target.value.split(" "))}}/>
                    </lable>
            </div>
                <input type="submit" value="Review Your Question" className='review-btn'/>
            </form>
        </div>
    </div>
    
      
    
  )
}

export default AskQuestions
