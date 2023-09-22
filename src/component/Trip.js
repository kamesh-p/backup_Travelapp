import React from "react";
import "./Trips.css";
import TripData from "./TripData";
import trip1 from "../Asserts/trip1.jpg";
import trip2 from "../Asserts/trip2.jpeg";
import trip3 from "../Asserts/trip3.jpg";
const Trip = () => {
  return (
    <div className="trip">
      <h1>recent trip</h1>
      <p>you can discover unique destination using maps</p>
      <div className="tripcard">
        <TripData
          image={trip1}
          heading="Trip in Maldives"
          text="Comprising a territory spanning roughly 90,000 square kilometres (35,000 sq mi) including the sea, land area of all the islands comprises 298 square kilometres (115 sq mi), the Maldives is one of the world's most geographically dispersed sovereign states and the smallest Asian country as well as one of the smallest Muslim-majority countries by land area and, with around 557,751 inhabitants, the 2nd least populous country in Asia. Malé is the capital and the most populated city."
        />
        <TripData
          image={trip2}
          heading="Trip in goa"
          text="Baga Beach, Calangute Beach, Grand Island, Dudhsagar Waterfalls, Fort Aguada, Candolim Beach, Tito's Street, Arambol Beach,  Bom Jesus Basilica, Palolem Beach, Curlies, Club Cubana, Anjuna Flea Market, Chapora Fort, Mapusa Friday Market, Divar Island, Salim Ali Bird Sanctuary and many more.Deck up your itinerary list with the spectacular places in Goa and get ready to be awe-struck with its surprises. "
        />
        <TripData
          image={trip3}
          heading="Trip in Manali"
          text="Manali is a high-altitude Himalayan resort town in India’s northern Himachal Pradesh state. It has a reputation as a backpacking center and honeymoon destination. Set on the Beas River, it’s a gateway for skiing in the Solang Valley and trekking in Parvati Valley."
        />
      </div>
    </div>
  );
};

export default Trip;
