
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PlanCard from "../components/PlanCard";

function Plans() {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(false);

  // Features constant
  const features = [
    {
      title: "Basic",
      features: [
        "Access to gym",
        "Free water",
        "Standard equipment",
        "Locker room access",
        "Group classes (limited)",
        "No contract required",
      ],
    },
    {
      title: "Premium",
      features: [
        "All Basic features",
        "Premium equipment",
        "Personal trainer",
        "Unlimited group classes",
        "Sauna and steam room access",
        "Priority support",
      ],
    },
    {
      title: "Elite",
      features: [
        "All Premium features",
        "Access to VIP lounge",
        "Specialized training programs",
        "Nutrition plan consultation",
        "Complimentary fitness gear",
        "Exclusive events and workshops",
      ],
    },
  ];

  // Fetch plans from the backend API
  const fetchPlans = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3000/api/plan");
      const fetchedPlans = response.data;

      // Map fetched plans to include features
      const plansWithFeatures = fetchedPlans.map((plan) => {

        const featureData = features.find((f) => f.title === plan.title);
        return {
          ...plan,
          features: featureData ? featureData.features : [],
        };
      });

      setPlans(plansWithFeatures);
    } catch (error) {
      console.error("Error fetching plans:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlans(); // Fetch plans once on component load
  }, []);

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center py-12">
        <h1 className="text-4xl font-bold text-white mb-12">
          Choose Your Plan
        </h1>
        <div className="flex justify-center">
          {loading && <div>Loading...</div>} {/* Show loading if data is being fetched */}
          {!loading && plans.length === 0 && (
            <div>No plans available at the moment</div>
          )}
          {plans.map((plan, index) => (
            <PlanCard
              id={plan.id}
              key={index}
              title={plan.title}
              price={plan.price}
              features={plan.features}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Plans;
