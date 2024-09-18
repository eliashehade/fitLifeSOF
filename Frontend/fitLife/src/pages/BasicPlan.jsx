import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PlanDetails from "../components/planDetails";


function PlanDetail() {
  const title = "Basic"
  const desc = "The Basic Plan at Fitlife is perfect for anyone looking to start or maintain their fitness routine with essential amenities and the freedom to choose what's best for them. Whether you're a fitness novice or looking to stay active, this plan has everything you need to achieve your goals in a supportive and well-equipped environment."
  return (
    <div>
      <Navbar />
  <PlanDetails title={title} desc={desc}/>
      <Footer />
    </div>
  );
}

export default PlanDetail;
