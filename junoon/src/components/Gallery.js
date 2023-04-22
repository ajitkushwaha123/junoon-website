import React from 'react';
class Gallery extends React.Component {
    state = {  } 
    render() { 
        return (
            <>
            <div className="gallery">
            
            <div className="heading-gallery">
                <h3>Featured Shots</h3>
            </div>
                <div className="img-row-1">
                    <div className="img1">
                        <img src="images/h1.jpg" alt="" />
                    </div>

                    <div className="img2">
                        <img src="images/h2.jpg" alt="" />
                    </div>

                    <div className="img3">
                        <img src="images/h3.jpg" alt="" />
                    </div>
                </div>

                <div className="img-row-2">
                <div className="img4">
                        <img src="images/h4.jpg" alt="" />
                    </div>

                    <div className="img5">
                        <img src="images/h5.jpg" alt="" />
                    </div>

                    <div className="img6">
                        <img src="images/h6.jpg" alt="" />
                    </div>
                    
                </div>

                <div className="img-row-3">
                <div className="img7">
                        <img src="images/h7.jpg" alt="" />
                    </div>

                    <div className="img8">
                        <img src="images/h8.jpg" alt="" />
                    </div>

                    <div className="img9">
                        <img src="images/h9.jpg" alt="" />
                    </div>
                </div>
            </div>
            </>
        );
    }
}
 
export default Gallery;