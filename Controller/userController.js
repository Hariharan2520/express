import Crud from '../Models/userModel.js'
export const create=async(req,res)=>{
    try{
    const userDetails=new Crud(req.json);
    const {email}=userDetails;
    const isExist=Crud.findOne({email})
    if(isExist)
    {
        res.status(400).json({message:"User already exists"})
    }
    const newUser=await userDetails.save();
    res.send(200).json(newUser);
}
catch
{
    res.status(500).json({message:"Internal servor error"});
}
}
