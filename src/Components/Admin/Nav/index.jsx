const Nav = () =>{
    return(
        <nav class="navbar navbar-light">
            <div class="container-fluid">
            <a href="/"><div className='font-bold text-2xl text-white'>Online Courier</div></a>
                <form class="d-flex justify-between w-1/5">
                    <h1 className='text-white font-bold cursor-pointer'>Help</h1>
                    <h1 className='text-white font-bold cursor-pointer'>About</h1>
                    <a href="/courier"><h1 className='text-white font-bold cursor-pointer' >Courier</h1></a>
                    <a href="/login"><h1 className='text-white font-bold cursor-pointer' >Login</h1></a>
          
                </form> 
            </div>
        </nav>
    )
}

export default Nav