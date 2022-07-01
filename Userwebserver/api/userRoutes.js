const users = require('./users.json')
const express = require('express')

const router = express.Router()

router.get('/', (req,res)=>{
   
    res.status(200).json(users)
})

router.get('/user/:user_id', (req,res)=>{
    console.log(req.params)
    if(req.params.user_id > users.length){
        res.status(404).json('User does not exists')
    }
    res.status(200).json(users[req.params.user_id-1])
})

router.patch('/user/:user_id', (req,res)=>{
    console.log(req.params)
    try
    {
        if(req.params.user_id > users.length){
            res.status(404).json('User does not exists')
        }
        else
        {
            const {last_name, email}= req.body
            users[req.params.user_id-1].last_name = last_name
            users[req.params.user_id-1].email = email
            res.status(200).json(users[req.params.user_id-1])
        }
    }
    catch(err)
    {
        res.status(500).json({Error:err})
    }    
})

router.post('/adduser',(req,res)=>{
    console.log('rquest body' , req.body)
    try{
        const {first_name, last_name, email, gender, ipaddress}=req.body
        
        if(!first_name) throw new Error('First name is empty')
        if(!last_name) throw new Error('Last name is empty')
        if(!email) throw new Error('email name is empty')
        if(!gender) throw new Error('Gemder is empty')
        if(!ipaddress) throw new Error('IPAddress is empty')
        const newuser = {
            id: users.length+1,
            first_name, last_name, email, gender, ipaddress
        }
        users.push(newuser)
        res.status(201).json(newuser)
    }
    catch(err)
    {
        res.status(500).json({Error:err})
    }
})

router.delete('/user/:user_id',(req,res)=>{
    try{
        console.log('uid', req.params.user_id)  
       
        let deleteuser = users[req.params.user_id-1]
            console.log('deleted user',deleteuser)
            if(deleteuser)
            {
                let index = users.map((u)=>{
                    return u.id
                }).indexOf(Number(req.params.user_id))
                users.splice(index,1)
                return res.status(200).json({Deleted:deleteuser})
            }
            else
            {
                res.status(404).json('User does not exists')
            }

    }
    catch(err)
    {

        return res.status(500).json(err)
    }
}
)

module.exports = router