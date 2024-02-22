const Login = () =>{
    return(
    <div className="mt-32 flex justify-around items-center">  
        <img className="w-1/3 image1"  src="https://prod-nandan.s3.ap-south-1.amazonaws.com/website/home/images/growthImg.svg"/>
        <form className="p-10 border-2 rounded-md w-1/3" style={{height:"link-opacity-50-hover "}}>
            <label for="email" className="text-white text-lg mb-2">Email</label>
            <input id="email" type="email" className="form-control h-12"  placeholder="Enter your email"/>
            <label for="password" className="text-white mt-3 text-lg mb-2">Password</label>
            <input id="password" type="password" className="form-control h-12" placeholder="Enter your email"/>
            <div className="flex justify-center mt-8">
                <button type="submit" className="btn btn-primary mt-2 w-96 bg-primary h-12">Login</button>
            </div>
        </form>
    </div>
    )
}

export default Login