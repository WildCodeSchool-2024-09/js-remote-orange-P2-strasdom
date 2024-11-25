import { useState } from "react";
import type React from "react";
import Maps from "./maps";
import "./company.css";

const Company: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore((prev) => !prev);
  };

  const handleMouseOver = (
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.FocusEvent<HTMLButtonElement>,
  ) => {
    e.currentTarget.style.backgroundColor = "#2F4F4F";
  };

  const handleMouseOut = (
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.FocusEvent<HTMLButtonElement>,
  ) => {
    e.currentTarget.style.backgroundColor = "#526224";
  };

  return (
    <div
      className="containerAboutUS"
      style={{
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
        color: "#2F4F4F",
        textAlign: "center",
      }}
    >
      <div
        className="company__text"
        style={{ maxWidth: "800px", margin: "10%", border: "1px solid black" }}
      >
        <div className="company__logo">
          <img
            src="/pictures/logo.jpg"
            id="logo"
            alt="logo"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
        {!showMore && (
          <div>
            <h2 className="company__title">Présentation</h2>
            <p className="company__description">
              Découvrez une entreprise dédiée à votre bien-être au quotidien. De
              l’aide à domicile à l’accompagnement personnalisé, nous vous
              offrons des services sur mesure, réalisés avec respect, discrétion
              et bienveillance.
            </p>
            <button
              type="button"
              onClick={handleToggle}
              className="button"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              onFocus={handleMouseOver}
              onBlur={handleMouseOut}
              style={{
                backgroundColor: "#526224",
                color: "#FFF",
                border: "none",
                padding: "10px 20px",
                cursor: "pointer",
                borderRadius: "5px",
              }}
            >
              En savoir plus
            </button>
          </div>
        )}
        {showMore && (
          <div>
            <h2 className="company__title">À propos de nous</h2>
            <p className="company__description">
              Bienvenue chez <strong>&nbsp;StrasDom</strong>, votre allié pour
              un quotidien plus serein.
            </p>
            <p className="company__description">
              Nous proposons une&nbsp;{" "}
              <strong>gamme complète de services à domicile&nbsp;</strong>{" "}
              adaptés à vos besoins, qu’il s’agisse de :
            </p>
            <ul className="company__description centered-text">
              <li
                style={{
                  textAlign: "left",
                  margin: "0 2rem 0 15%",
                  width: "100%",
                }}
              >
                <strong>Entretien du foyer :</strong> ménage, nettoyage de
                printemps, aide au jardinage, petits travaux de bricolage.
              </li>
              <li
                style={{
                  textAlign: "left",
                  margin: "0 2rem 0 15%",
                  width: "100%",
                }}
              >
                <strong>Accompagnement personnalisé :</strong> rendez-vous
                médicaux, loisirs, aide administrative, soutien informatique.
              </li>
              <li
                style={{
                  textAlign: "left",
                  margin: "0 2rem 0 15%",
                  width: "100%",
                }}
              >
                <strong>Soutien à la personne :</strong> soin et hygiène, aide
                au lever et au coucher, assistance mobilité, prise de
                médicaments.
              </li>
              <li
                style={{
                  textAlign: "left",
                  margin: "0 2rem 0 15%",
                  width: "100%",
                }}
              >
                <strong>Aide familiale :</strong> garde d’enfants, soutien
                scolaire, garde animalière.
              </li>
              <li
                style={{
                  textAlign: "left",
                  margin: "0 2rem 0 15%",
                  width: "100%",
                }}
              >
                <strong>Bien-être :</strong> méditation, soins des pieds et des
                mains.
              </li>
            </ul>
            <p className="company__description centered-text">
              Nos services sont pensés pour&nbsp;{" "}
              <strong>simplifier votre quotidien</strong> tout en respectant
              votre environnement, vos habitudes et votre intimité.
            </p>
            <p className="company__description centered-text">
              Avec un engagement fort pour la{" "}
              <strong>&nbsp;confiance, la discrétion et la sérénité,</strong>{" "}
              nos équipes bienveillantes et qualifiées vous accompagnent dans
              une démarche humaine et chaleureuse.
            </p>
            <p className="company__description centered-text">
              Nous vous
              <strong>&nbsp;remercions&nbsp;</strong> pour votre confiance.
            </p>
            <button
              type="button"
              onClick={handleToggle}
              className="button centered-text"
              style={{
                backgroundColor: "#526224",
                color: "#FFF",
                border: "none",
                padding: "10px 20px",
                cursor: "pointer",
                borderRadius: "5px",
                marginTop: "20px",
              }}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              onFocus={handleMouseOver}
              onBlur={handleMouseOut}
            >
              Revenir
            </button>
            <div className="">
              <h1>Nous trouver sur Strasbourg</h1>
              <Maps />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Company;
