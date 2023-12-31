import * as api from '../api'

export const subscription= (itemId,userId) => async(dispatch) =>{
    try {
        
        const {data} =  await api.subscription(itemId,userId);
        dispatch({type:"SUBSCRIPTION_DONE", payload:data})
        return data;
    } catch (error) {
        console.log(error);
    }
}