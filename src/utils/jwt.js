const jwt = require('jsonwebtoken')
const secretKey = 'youhavetobecarefulwhilegivingthissecretkey'



const createToken = async(userID)=>{
    try{
        const token = await jwt.sign({id:userID},secretKey, {expiresIn:"1h"})
        return token
    }
    catch(error){
        console.log('Token has not created.')
    }
    
}


module.exports = {createToken,secretKey}