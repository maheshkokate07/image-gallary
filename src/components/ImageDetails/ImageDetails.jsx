import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import "./ImageDetails.css";
import { FaAngleLeft } from "react-icons/fa6"

export default function ImageDetails() {
    const { id } = useParams();

    const [imageDetails, setImageDetails] = useState({});

    const [isLoading, setIsLoading] = useState(false);

    async function getImage() {
        setIsLoading(true);

        const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`);
        console.log(response);
        setImageDetails({
            image: response.data.photo.url,
            title: response.data.photo.title,
            description: response.data.photo.description,
            id: response.data.photo.id
        })
        setIsLoading(false);
    }

    useEffect(() => {
        getImage();
    }, [])

    return (
        <>
            <Link to={"/"}>
                <div className="go-back"><FaAngleLeft /></div>
            </Link>
            {
            (isLoading) ? 
                <div className="loader-wrapper"><PulseLoader color="#b2b2b2" /></div> :
                <div className="main-wrapper">
                    <div className="image-wrapper">
                        <img className="image" src={imageDetails.image} alt="" />
                    </div>
                    <div className="details-wrapper">
                        <div className="image-title">{imageDetails.title}</div>
                        <div className="image-description">{imageDetails.description}</div>
                    </div>
                </div>
            }
        </>
    )
}