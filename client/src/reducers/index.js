import { combineReducers } from "redux";
import authReducer from "./auth";
import currentUserReducer from "./currentUser"
import questionsReducer from "./questions"
import usersReducer from "./users";
import subscriptionReducer from "./subscription";

export default combineReducers({
    authReducer, currentUserReducer, questionsReducer,usersReducer,subscriptionReducer
})