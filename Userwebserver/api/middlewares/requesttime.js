const requesttime = (req, res, next)=>{
    req.requesttime = Date.now()
    next()

}
module.exports=requesttime