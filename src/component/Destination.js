import React from "react";
import "./Destination.css";
import mahal1 from "../Asserts/mahal1.jpg";
import mahal2 from "../Asserts/mahal2.jpg";
import christ1 from "../Asserts/christ1.jpg";
import christ2 from "../Asserts/christ2.jpg";
import DestinationData from "./DestinationData";
const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the oppertunity</p>
      <DestinationData
        heading="Taj Mahal"
        text="Construction of the mausoleum was essentially completed in 1643, but
        work continued on other phases of the project for another 10 years. The
        Taj Mahal complex is believed to have been completed in its entirety in
        1653 at a cost estimated at the time to be around ₹32 million, which in
        2020 would be approximately ₹70 billion (about US $1 billion).The
        construction project employed some 20,000 artisans under the guidance of
        a board of architects led by Ustad Ahmad Lahori, the emperor’s court
        architect. Various types of symbolism have been employed in the Taj to
        reflect natural beauty and divinity."
        img1={mahal1}
        img2={mahal2}
        className="first-destination"
      />
      <DestinationData
        heading="Christ the Redeemer"
        text="Christ the Redeemer, a colossal statue of Jesus, stands atop Mount Corcovado in Rio de Janeiro. Its origins date to just after World War I, when some Brazilians feared a “tide of godlessness.” They proposed a statue, which was ultimately designed by Heitor da Silva Costa, Carlos Oswald, and Paul Landowski. Construction began in 1926 and was completed five years later. The resulting monument stands 98 feet (30 meters) tall—not including its base, which is about 26 feet (8 meters) high—and its outstretched arms span 92 feet (28 meters). It is the largest Art Deco sculpture in the world. Christ the Redeemer is made of reinforced concrete and is covered in approximately six million tiles. Somewhat disconcertingly, the statue has often been struck by lightning, and in 2014 the tip of Jesus’s right thumb was damaged during a storm."
        img1={christ1}
        img2={christ2}
        className="first-destination-reverse"
      />
    </div>
  );
};

export default Destination;
