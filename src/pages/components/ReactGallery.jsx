import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";
import img5 from "./images/img5.jpg";
import img6 from "./images/img6.jpg";
import img7 from "./images/img7.jpg";
import img8 from "./images/img8.jpg";
import img9 from "./images/img9.jpg";
import img10 from "./images/img10.jpg";
import img11 from "./images/img11.jpg";

import './ReactGallery.css';

const ReactGallery = () => {
    return (
        <div className="gallery-wrapper flex flex-col justify-center items-center mt-10 mb-10">

            <h1 class="heading">Our Gallery</h1>

            <div class="container">
                <div class="box"><img class="image" src={img1} alt="" /></div>
                <div class="box"><img class="image" src={img3} alt="" /></div>
                <div class="box"><img class="image" src={img5} alt="" /></div>
                <div class="box"><img class="image" src={img11} alt="" /></div>
                <div class="box"><img class="image" src={img2} alt="" /></div>
                <div class="box"><img class="image" src={img4} alt="" /></div>
                <div class="box"><img class="image" src={img6} alt="" /></div>
                <div class="box"><img class="image" src={img7} alt="" /></div>
                <div class="box"><img class="image" src={img8} alt="" /></div>
                <div class="box"><img class="image" src={img9} alt="" /></div>
                <div class="box"><img class="image" src={img10} alt="" /></div>
            </div>

        </div>
    )
}

export default ReactGallery