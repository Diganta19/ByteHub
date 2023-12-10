import React from 'react'
import { Link, useParams } from 'react-router-dom'
import "./Questions.css"
import voteUp from "../../assets/sort-up.svg"
import voteDown from "../../assets/sort-down.svg"
import Avatar from "../../components/Avatar/Avatar"
import DisplayAnswer from './DisplayAnswer'

const QuestionsDetails = () => {

  const {id} = useParams();

  var questionsList = [{
    _id:'1',
    upVote:2,
    downVote:1,
    noOfAnswers:2,
    questionTitle:"What is a function?",
    questionBody:"It is meant to be",
    questionTags:["java","c++","python"],
    userPosted:"diggi",
    askedOn:"Dec 8",
    userId:1,
    answer:[{
      answerBody:"Answer",
      userAnswered:"Nayak",
      answeredOn:"Dec 9",
      userId: 2
    }]
},{
  _id:'2',
  upVote:2,
  downVote:1,
  noOfAnswers:2,
  questionTitle:"What is a function2?",
  questionBody:"It is meant to be2",
  questionTags:["java","c++","python"],
  userPosted:"diggi",
  askedOn:"Dec 9",
  userId:1,
  answer:[{
    answerBody:"Answer",
    userAnswered:"Nayak",
    answeredOn:"Dec 9",
    userId: 2
  }]
},{
_id:'3',
upVote:2,
  downVote:1,
noOfAnswers:2,
questionTitle:"What is a function3?",
questionBody:"It is meant to be3",
questionTags:["java","c++","python"],
userPosted:"diggi",
askedOn:"Dec 10",
userId:1, answer:[{
  answerBody:"Answer",
  userAnswered:"Nayak",
  answeredOn:"Dec 9",
  userId: 2
}]
}]

  return (
    <div className='question-details-page'>
      {
        questionsList === null ?
        <h1>Loading.....</h1> :
        <>
          {
            questionsList.filter(question => question._id === id).map(question => (
              <div key={question._id}>
                <section className="question-details-container">
                  <h1>{question.questionTitle}</h1>
                  <div className='question-details-container-2'>
                      <div className="question-votes">
                        <img src={voteUp} alt="" width="18" className='votes-icon'/>
                        <p>{question.upVote - question.downVote}</p>
                        <img src={voteDown} alt="" width="18" className='votes-icon'/>
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
                                <button type='button'>Share</button>
                                <button type='button'>Delete</button>
                            </div>
                            <div>
                              <p>asked {question.askedOn}</p>
                              <Link to={`User/${question.userId}`} className='user-link' style={{color:'#0086d8'}}>
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
                      <h3>{question.noOfAnswers} answers</h3>
                      <DisplayAnswer key={question._id} question={question}/>
                    </section>
                  )
                }
                <section className="post-ans-container">
                  <h3>Your Answers</h3>
                  <form >
                    <textarea name=""  cols="100" rows="10"></textarea><br />
                    <input type="submit" className='post-ans-btn' value="Post Your Answer" />
                  </form>
                  <p>
                    Browse other Question tagged
                    {
                      question.questionTags.map((tag)=>(
                        <Link to="/Tags" key={tag} className='ans-tags'>{tag}</Link>
                      ))
                    } or {
                      <Link to='AskQuestion' style={{textDecoration:"none", color:"#009dff"}}>ask your own question</Link>
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
