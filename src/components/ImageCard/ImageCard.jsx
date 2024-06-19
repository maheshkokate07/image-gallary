import { Link } from "react-router-dom";
import "./ImageCard.css";


export default function ImageCard({ image, id }) {
    return (
        <div className="image-card">
            <Link to={`/image/${id}`}>
                <img id="img" src={image} alt="" />
            </Link>
        </div>
    )
}