import "./Section.css"

const Section=()=>{
    return(
        <div className="container">

            <div className="section-content">
                <h1>YOUR TUMMY DESERVES BEST</h1>
                <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex optio praesentium quibusdam maiores aperiam sunt iusto iste earum laudantium accusamus.</p>

                <div className="section-btn">
                    <button>Buy Now</button>
                    <button> More </button>
                </div>

            </div>


            <div className="section-image">
                <img src="/food.jpg" alt="" />
            </div>


        
        </div>
    

    );

    
}
export default Section