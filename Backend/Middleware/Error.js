exports.handler=(err,req,res,next)=>{
    // console.log("in Error", err)
    err.statusCode=err.statusCode || 500
    if (process.env.MOOD.toLocaleLowerCase() === "DEVELOPMENT".toLocaleLowerCase()) {
        res.status(err.statusCode).json({
            sucess:false,
            errmessage:err.message,
            stack:err.stack,
            error:err
        })
    }else{
        res.status(err.statusCode).json({
            sucess:false,
            message:err.message})
    }
}
