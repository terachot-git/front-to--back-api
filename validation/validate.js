
export const validate = (schema) => async(req,res,next) => {
try {
    await schema.validate(req.body,{abortEarly:false})
    console.log("This is validate",req.body,)
    next()
} catch (error) {
    const errMsg = error.errors.map((item)=>item)
    const errTxt = errMsg.join(",")
    const mergErr = new Error(errTxt)
    next(mergErr);
}
}