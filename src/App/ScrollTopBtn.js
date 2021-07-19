import React from 'react';


class ScrollTopBtn extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
       imgSrc: 'images/back-to-top.svg'
    };
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }
  handleMouseOver() {
    this.setState({
      imgSrc: 'images/tap-back-to-top.svg'
    });
  }

  handleMouseOut() {
    this.setState({
      imgSrc: 'images/back-to-top.svg'
    });
  }

  render(){
    return(
      <section className="container section1 mb-5 pt-100" id="ScrollTopBtn">
        <div className="row ">
          <div className="col-lg-12">
            <div 
              className="ScrollTopBtn"
            >
              <img 
              onMouseOver={this.handleMouseOver} 
              onMouseOut={this.handleMouseOut} 
              src={this.state.imgSrc}
              alt="" 

              />
              <p>Back top</p>
            </div>
            
          </div>
        </div>
      </section>
    )
  }
}
export default ScrollTopBtn