import React from 'react';
class Instagram extends React.Component {
    state = {  } 
    render() { 
        return (
            <>
              <div className="instagram">
                  <div className="heading-instagram">
                  Best of Storygram
                  </div>

                  <div className="card">
                    <div className="card1">
                        <img src="images/51.6ba08029.jpg" alt="" />
                        <p>Life isn't all about the hustle and bustle. Sometimes taking a break can make you feel more alive than anything else. It's only when we slow down that we truly appreciate the</p>
                        <h4>29 JAN 2023</h4>
                    </div>

                    <div className="card2">
                        <img src="images/52.f331915b.jpg" alt="" />
                        <p>Life isn't all about the hustle and bustle. Sometimes taking a break can make you feel more alive than anything else. It's only when we slow down that we truly appreciate the</p>
                        <h4>29 JAN 2023</h4>
                    </div>
                  </div>
              </div>
            </>
        );
    }
}
 
export default Instagram;