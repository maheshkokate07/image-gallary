import axios from "axios";
import { useEffect, useState } from "react"
import ImageCard from "../ImageCard/ImageCard";
import { PulseLoader } from "react-spinners";
import "./GallaryList.css";

export default function GallaryList() {

    const [offset, setOffset] = useState(0);
    const limit = 20;

    const [maxResults, setMaxResults] = useState(0);

    const [gallaryList, setGallaryList] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    async function getPhotos(offset) {
        setIsLoading(true);

        const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos?offset=${offset}&limit=${limit}`);
 
        setMaxResults(response.data.total_photos);
        // console.log(response);

        const imageResults = response.data.photos;
        // console.log(imageResults);

        const imgListResult = imageResults.map((image) => {
            return {
                id: image.id,
                image: image.url
            }
        })

        // console.log(imgListResult);

        setGallaryList(imgListResult);
        // console.log(gallaryList);

        setIsLoading(false);
    }
    
    const handlePrevious = () => {
        setOffset(offset - limit);
    };

    const handleNext = () => {
        setOffset(offset + limit);
    };

    useEffect(() => {
        getPhotos(offset);
    }, [offset])

    return (
        <div className="image-list-wrapper">
            <div className="image-wrapper">
                {
                    (isLoading) ?
                        <PulseLoader className="loader" color="#b2b2b2" /> :
                        gallaryList.map((i) => <ImageCard image={i.image} key={i.id} id={i.id} />)
                }
            </div>
            <div className="controls">
                <button disabled={offset === 0} onClick={handlePrevious}>
                    Prev
                </button>
                <button disabled={offset > maxResults-20} onClick={handleNext}>
                    Next
                </button>
                
            </div>
        </div>
    )
}