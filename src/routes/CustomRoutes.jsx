import { Route, Routes } from "react-router-dom";
import Gallary from "../components/Gallary/Gallary";
import ImageDetails from "../components/ImageDetails/ImageDetails";

export default function CustomRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Gallary />}/>\
            <Route path="/image/:id" element={<ImageDetails />} />
        </Routes>
    )
}