import React ,{useState}from 'react'
import { Link, useNavigate, useParams,useLocation } from 'react-router-dom'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import copy from "copy-to-clipboard";

import "./Questions.css"
import voteUp from "../../assets/sort-up.svg"
import voteDown from "../../assets/sort-down.svg"
import Avatar from "../../components/Avatar/Avatar"
import DisplayAnswer from './DisplayAnswer'
import {postAnswer,deleteQuestion,voteQuestion} from "../../actions/question"


const QuestionsDetails = () => {

  const {id} = useParams();
  const questionsList = useSelector(state=>state.questionsReducer)
  const [answer,setAnswer] = useState('');
  const User = useSelector((state)=>(state.currentUserReducer))
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const location = useLocation();
  const url = "http://localhost:8000"

  const handlePosAns =(e,answerLength)=>{
      e.preventDefault();
      if(User === null){
        alert('Login or Signup');
        navigate('/Auth')
      }else{
        if(answer === ''){
          alert("Enter Answer before Submit")
        }else{
          dispatch(postAnswer({id, noOfAnswers:answerLength + 1,answerBody:answer , userAnswered:User.result.name, userId: User.result._id}))
        }
      }
  }
  const handleShare = ()=>{
    copy(url+location.pathname)
    alert('Url copied')
  }

  const handleDelete = () =>{
    dispatch(deleteQuestion(id,navigate))
 }


 const handleUpVote=()=>{
  dispatch(voteQuestion(id,'upVote',User.result._id))
 }
 const handleDownVote=()=>{
  dispatch(voteQuestion(id,'downVote',User.result._id))
 }
 return (
    <div className='question-details-page'>
      {
        questionsList.data === null ?
        <h1>Loading.....</h1> :
        <>
          {
            questionsList.data.filter(question => question._id === id).map(question => (
              <div key={question._id}>
                <section className="question-details-container">
                  <h1>{question.questionTitle}</h1>
                  <div className='question-details-container-2'>
                      <div className="question-votes">
                        <img src={voteUp} alt="" width="18" className='votes-icon' onClick={handleUpVote}/>
                        <p>{question.upVote.length - question.downVote.length}</p>
                        <img src={voteDown} alt="" width="18" className='votes-icon'onClick={handleDownVote}/>
                      </div>
                      <div style={{width:"100%"}}>
                          <p className="question-body">{question.questionBody}</p>
                          <div className="question-details-tags">
                            {
                              question.questionTags.map((tag)=>(
                                <p key={tag}>{tag}</p>
                              ))
                            }
                          </div>
                          <div className="question-actions-user">
                            <div>
                                <button type='button' onClick={handleShare}>Share</button>
                                {
                                  User?.result?._id === question?.userId && (
                                    <button type='button' onClick={handleDelete}>Delete</button>
                                  )
                                }
                            </div>
                            <div>
                              <p>Asked {moment(question.askedOn).fromNow()}</p>
                              <Link to={`/Users/${question.userId}`} className='user-link' style={{color:'#0086d8'}}>
                                <Avatar backgroundColor="orange" px="8px" py="5px">{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                <div>
                                  {question.userPosted}
                                </div>
                              </Link>
                            </div>
                          </div>
                      </div>
                  </div>
                </section>
                {
                  question.noOfAnswers !== 0 && (
                    <section>
                      <h3>{question.noOfAnswers} Answers</h3>
                      <DisplayAnswer key={question._id} question={question} handleShare={handleShare}/>
                    </section>
                  )
                }
                <section className="post-ans-container">
                  <h3>Your Answers</h3>
                  <form onSubmit={(e)=>{handlePosAns(e,question.noOfAnswers)}}>
                    <textarea name=""  cols="100" rows="10" onChange={e=>setAnswer(e.target.value)}></textarea><br />
                    <input type="submit" className='post-ans-btn' value="Post Your Answer" />
                  </form>
                  <p>
                    Browse other question tagged
                    {
                      question.questionTags.map((tag)=>(
                        <Link to="/Tags" key={tag} className='ans-tags'>{tag}</Link>
                      ))
                    } or {
                      <Link to='/AskQuestion' style={{textDecoration:"none", color:"#009dff"}}>Ask your own question</Link>
                    }
                  </p>
                </section>
              </div>
            ))
          }
        </>
      }
      
    </div>
  )
}

export default QuestionsDetails
