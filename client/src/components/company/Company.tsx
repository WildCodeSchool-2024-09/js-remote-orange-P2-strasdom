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
    <div className="containerAboutUS company-container">
      <div className="company-text company-card">
        <div className="company-logo">
          <img
            src="/pictures/logo.jpg"
            id="logo"
            alt="logo"
            className="company-logo"
          />
        </div>
        {!showMore && (
          <div className="company-text">
            <h2 className="company-title" id="ourCompany">
              Présentation
            </h2>
            <p className="company-description">
              Découvrez une entreprise dédiée à votre bien-être au quotidien. De
              l’aide à domicile à l’accompagnement personnalisé, nous vous
              offrons des services sur mesure, réalisés avec respect, discrétion
              et bienveillance.
            </p>
            <button
              type="button"
              onClick={handleToggle}
              className="button company-button"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              onFocus={handleMouseOver}
              onBlur={handleMouseOut}
            >
              En savoir plus
            </button>
          </div>
        )}
        {showMore && (
          <div className="company-text">
            <h2 className="company-title">À propos de nous</h2>
            <p className="company-description">
              Bienvenue chez <strong>&nbsp;StrasDom</strong>, votre allié pour
              un quotidien plus serein.
            </p>
            <p className="company-description">
              Nous proposons une&nbsp;{" "}
              <strong>gamme complète de services à domicile&nbsp;</strong>{" "}
              adaptés à vos besoins, qu’il s’agisse de :
            </p>
            <ul className="company-description centered-text">
              <li className="company-list-item">
                <strong>Entretien du foyer :</strong> ménage, nettoyage de
                printemps, aide au jardinage, petits travaux de bricolage.
              </li>
              <li className="company-list-item">
                <strong>Accompagnement personnalisé :</strong> rendez-vous
                médicaux, loisirs, aide administrative, soutien informatique.
              </li>
              <li className="company-list-item">
                <strong>Soutien à la personne :</strong> soin et hygiène, aide
                au lever et au coucher, assistance mobilité, prise de
                médicaments.
              </li>
              <li className="company-list-item">
                <strong>Aide familiale :</strong> garde d’enfants, soutien
                scolaire, garde animalière.
              </li>
              <li className="company-list-item">
                <strong>Bien-être :</strong> méditation, soins des pieds et des
                mains.
              </li>
            </ul>
            <p className="company-description">
              Nos services sont pensés pour&nbsp;{" "}
              <strong>simplifier votre quotidien</strong> tout en respectant
              votre environnement, vos habitudes et votre intimité.
            </p>
            <p className="company-description">
              Avec un engagement fort pour la{" "}
              <strong>&nbsp;confiance, la discrétion et la sérénité,</strong>{" "}
              nos équipes bienveillantes et qualifiées vous accompagnent dans
              une démarche humaine et chaleureuse.
            </p>
            <p className="company-description">
              Nous vous
              <strong>&nbsp;remercions&nbsp;</strong> pour votre confiance.
            </p>
            <button
              type="button"
              onClick={handleToggle}
              className="button centered-text"
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
