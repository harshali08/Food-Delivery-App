import React, { Component } from "react";
import Slider from "react-slick";
import Category from "./Category";
import CategoryDiv from "./CategoryDiv";

export default class SwipeToSlide extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "100px",
      slidesToShow: 5,
      swipeToSlide: true,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: black`
        );
      }
    };
    return (
      <div className="mx-10 w-11/12">
        <h2>Swipe To Slide</h2>
        <Slider {...settings}>
        
     <CategoryDiv
 s={require("../assets/Home-img.jpg")}
  head="Donate Medicine"

></CategoryDiv>

<CategoryDiv
 s={require("../assets/Home-img.jpg")}
  head="Doctor’s Approval"
  
></CategoryDiv>

<CategoryDiv
 s={require("../assets/Home-img.jpg")}
  head="Donate Medicine"
 
></CategoryDiv>

<CategoryDiv
 s={require("../assets/Home-img.jpg")}
  head="Donate Medicine"
 
></CategoryDiv>

<CategoryDiv
 s={require("../assets/Home-img.jpg")}
  head="Donate Medicine"
 
></CategoryDiv>

<CategoryDiv
 s={require("../assets/Home-img.jpg")}
  head="Donate Medicine"
 
></CategoryDiv>

<CategoryDiv
 s={require("../assets/Home-img.jpg")}
  head="Donate Medicine"
 
></CategoryDiv>

<CategoryDiv
 s={require("../assets/Home-img.jpg")}
  head="Donate Medicine"
 
></CategoryDiv>

<CategoryDiv
 s={require("../assets/Home-img.jpg")}
  head="Donate Medicine"
 
></CategoryDiv>

<CategoryDiv
 s={require("../assets/Home-img.jpg")}
  head="Donate Medicine"
 
></CategoryDiv>
   
  
       </Slider>
      </div>
    );
  }
}