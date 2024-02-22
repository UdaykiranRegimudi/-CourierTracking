

const Tracking = () =>{
    return(
    <div class="container px-1 px-md-4 py-5 mx-auto w-1/2">
    <div class="card">
    <h1 className="text-center mt-20 font-bold">Order Tracking</h1>
        <div class="card card-timeline px-2 border-none">
            <ul class="bs4-order-tracking">
            <li className="step active">
                <div><i class="fas fa-user fa-lg"></i></div>
                Order Placed
            </li>
            <li className="step">
                <div><i class="fas fa-bread-slice fa-lg"></i></div>
                In transit
            </li>
            <li class="step">
                <div><i class="fas fa-truck fa-lg"></i></div>
                Out for delivery
            </li>
            <li className="step">
                <div className=""><i class="fas fa-birthday-cake fa-lg"></i></div>
                Delivered
            </li>
            </ul>
    
        </div>
    </div>
    </div>
    )
}
export default Tracking