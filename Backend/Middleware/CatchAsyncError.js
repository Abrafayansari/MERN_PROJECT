const CatchAsyncError=(callback)=>{
    return (req,res,errorcallback)=>{
        return Promise.resolve(callback(req,res,errorcallback)).catch(errorcallback)
    }
}
module.exports =CatchAsyncError;
