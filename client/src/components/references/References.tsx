// import React from "react";
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'

import "../../App.css";

const ReferenceProps = [
  {
    client_id: 1,
    name: "Albedo N.",
    image: "/pictures/avatars/albedo.png",
    commentaire: "Ponctuel et professionnel mais pas suffisant pour Nazarick.",
    avis: "3.5/5",
  },
  {
    client_id: 2,
    name: "Ludo M.",
    image: "/pictures/avatars/001.jpeg",
    commentaire: "Service impeccable, personnel très aimable.",
    avis: "4.8/5",
  },
  {
    client_id: 3,
    name: "Simon B.",
    image: "/pictures/avatars/002.jpeg",
    commentaire: "Très bon service, personne sympathique et ponctuelle.",
    avis: "4.3/5",
  },
  {
    client_id: 4,
    name: "Clément C.",
    image: "/pictures/avatars/003.jpeg",
    commentaire: "Professionnel et efficace, recommande fortement.",
    avis: "5/5",
  },
  {
    client_id: 5,
    name: "Yavuz L.",
    image: "/pictures/avatars/004.jpeg",
    commentaire: "Service de qualité, très bon contact avec le personnel.",
    avis: "4.6/5",
  },
  {
    client_id: 6,
    name: "Giovanni R.",
    image: "/pictures/avatars/005.jpeg",
    commentaire: "Très bon service, très satisfait.",
    avis: "4.6/5",
  },
  {
    client_id: 7,
    name: "Claire L.",
    image: "/pictures/avatars/006.jpeg",
    commentaire: "Le personnel est agréable et très à l'écoute.",
    avis: "4.9/5",
  },
  {
    client_id: 8,
    name: "Bernard P.",
    image: "/pictures/avatars/007.jpeg",
    commentaire: "Personnel courtois et efficace, bon travail.",
    avis: "4.7/5",
  },
  {
    client_id: 9,
    name: "Camille R.",
    image: "/pictures/avatars/008.png",
    commentaire: "Excellente expérience, services de qualité.",
    avis: "5/5",
  },
  {
    client_id: 10,
    name: "Julie B.",
    image: "/pictures/avatars/009.png",
    commentaire: "Très professionnel et courtois, je recommande.",
    avis: "4.7/5",
  },
];

function ReferencesCustomer() {
  return (
    <div className="containerReference">
      <div className="containerCard">
        <h1 className="title">Références clients</h1>
        <ul>
          {ReferenceProps.map((reference) => (
            <div key={reference.client_id} className="containerCard">
              <li className="card">
                <img src={reference.image} alt="avatar" className="avatar" />
                <h2>{reference.name}</h2>
                <p>{reference.commentaire}</p>
                <p>{reference.avis}</p>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ReferencesCustomer;
