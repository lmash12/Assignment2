import { Link } from "react-router-dom";

const FourOhFour = () => {
    return (
        <div className="four-page">
            <div className="message"><h1>Sorry <span>Page</span> Not <span>Found</span></h1></div> 
            <Link to="/"><span>Go</span> Back <span>To</span> Home <span>Page</span></Link>
        </div>
    )
}

export default FourOhFour;