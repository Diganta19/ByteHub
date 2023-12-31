import mongoose from"mongoose"
import User from "../models/auth.js"


export const getAllUsers = async (req,res)=>{
    try {
        const allUsers = await User.find();
        const allUserDetails = [];
        allUsers.forEach(user => {
            allUserDetails.push({_id:user._id, name:user.name, about:user.about, tags:user.tags, joinedOn:user.joinedOn,points:user.points,subscription:user.subscription})
        });
        res.status(200).json(allUserDetails)
    } catch (error) {
        console.log(error);
        res.status(400).json({messgage:error.messgage}); 
    }

}

export const updateProfile =  async(req,res) =>{
    const {id:_id} = req.params;
    const {name,about,tags} = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('Answer unavliabe....')
    }
    try {
        const updatedProfile = await User.findByIdAndUpdate(_id,{$set:{'name':name,'about':about,'tags':tags}},{new:true})
        res.status(200).json(updatedProfile)
    } catch (error) {
        console.log(error);
        res.status(405).json({message:error.message})
    }
}
