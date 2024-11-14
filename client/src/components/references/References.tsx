// import React from "react";
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'

import "./references.css";

const ReferenceProps = [
  {
    client_id: 1,
    name: "Albedo N.",
    commentaire:
      "Très satisfait des services rendus, ponctuel et professionnel.",
    avis: "4.5/5",
  },
  {
    client_id: 2,
    name: "Ludo M.",
    commentaire: "Service impeccable, personnel très aimable.",
    avis: "4.8/5",
  },
  {
    client_id: 3,
    name: "Simon B.",
    commentaire: "Très bon service, personne sympathique et ponctuelle.",
    avis: "4.3/5",
  },
  {
    client_id: 4,
    name: "Clément C.",
    commentaire: "Professionnel et efficace, recommande fortement.",
    avis: "5/5",
  },
  {
    client_id: 5,
    name: "Yavuz L.",
    commentaire: "Service de qualité, très bon contact avec le personnel.",
    avis: "4.6/5",
  },
  {
    client_id: 6,
    name: "Giovanni R.",
    commentaire: "Très bon service, très satisfait.",
    avis: "4.6/5",
  },
  {
    client_id: 7,
    name: "Claire L.",
    commentaire: "Le personnel est agréable et très à l'écoute.",
    avis: "4.9/5",
  },
  {
    client_id: 8,
    name: "Bernard P.",
    commentaire: "Personnel courtois et efficace, bon travail.",
    avis: "4.7/5",
  },
  {
    client_id: 9,
    name: "Camille R.",
    commentaire: "Excellente expérience, services de qualité.",
    avis: "5/5",
  },
  {
    client_id: 10,
    name: "Julie B.",
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
