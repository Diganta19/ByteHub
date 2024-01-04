const subscriptionReducer = (state = null, action) =>{
    switch(action.type){
        case "SUBSCRIPTION_DONE":
            console.log(action.payload);
            return action.payload;
        default:
            return state;
    }
}
export default subscriptionReducer; 