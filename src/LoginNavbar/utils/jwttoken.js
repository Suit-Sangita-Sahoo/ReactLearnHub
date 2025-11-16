const generateToken=(payload)=>{
    const {username,age}=payload
    const randomnumber=Math.round(Math.random()*1000000000)
    return age+username.slice(0,3)+randomnumber
}