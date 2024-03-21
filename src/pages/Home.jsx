import React, { useState } from "react";
import { Link } from "react-router-dom";
import Draggable from "react-draggable";
import dataElements from "../data/elements.json";
import { GrLogout } from "react-icons/gr";
import {
  windowsXp,
  imgVideo,
  imgX,
  imgCadenas,
  imgDossier,
  imgPage,
  imgPhoto,
  testSVG,
  video01,
} from "../assets";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedElement, setSelectedElement] = useState(null);
  // const [password, setPassword] = useState("");
  const [openContext, setOpenContext] = useState(true);
  const [folders, setFolders] = useState(dataElements);
  const [isOpenVideo, setIsOpenVideo] = useState(false);
  const [isOpenPhoto, setIsOpenPhoto] = useState(false);

  // const handleInputChange = (e) => {
  //   setPassword(e.target.value);
  // };

  // const handleVerification = () => {
  //   if (password === selectedElement.code) {
  //     setPassword("");
  //     const updatedFolders = folders.map((element) => {
  //       if (element.id === selectedElement.id) {
  //         const newSelectedElement = { ...element, unlocked: true };
  //         setSelectedElement(newSelectedElement);
  //         return newSelectedElement;
  //       }
  //       return element;
  //     });
  //     setFolders(updatedFolders);
  //     setIsOpen(false);
  //     setIsOpenVideo(true);
  //   }
  // };

  const handleVerification = () => {
    const selectedAnswer = document.querySelector(
      'input[name="choix"]:checked'
    ).value;

    if (selectedAnswer === selectedElement.reponse) {
      // setPassword("");
      const updatedFolders = folders.map((element) => {
        if (element.id === selectedElement.id) {
          const newSelectedElement = { ...element, unlocked: true };
          setSelectedElement(newSelectedElement);
          return newSelectedElement;
        }
        return element;
      });
      setFolders(updatedFolders);
      setIsOpen(false);
      setIsOpenVideo(true);
      handleCadenas(selectedElement);
      handleThumnail(selectedElement);
    }
  };

  const handleThumnail = (element) => {
    const updatedFolders = folders.map((item) => {
      if (item.id === element.id) {
        return { ...item, visible: true }; // Mettre à jour la propriété visible à true pour l'élément sélectionné
      }
      return item;
    });
    setFolders(updatedFolders);
  };

  const openPopup = (element) => {
    setSelectedElement(element);
    setIsOpen(!element.unlocked);
    setIsOpenVideo(element.unlocked);
    if (element.unlocked) {
      handleCadenas(element);
    }
  };

  const openPhoto = (element) => {
    setSelectedElement(element);
    setIsOpenPhoto(!isOpenPhoto);
  };

  const handleCadenas = (element) => {
    const index = element.id - 1;
    const nextIndex = index + 1;
    if (nextIndex < folders.length) {
      const updatedFolders = [...folders];
      updatedFolders[nextIndex].cadenas = false;
      setFolders(updatedFolders);
    }
  };

  return (
    <section className="w-screen overflow-hidden h-screen flex flex-row-reverse justify-between items-start relative">
      <img
        src={windowsXp}
        alt="fondEcran"
        className="fixed -z-[50] h-screen object-cover w-screen"
      />
      <Link
        to="/login"
        className="flex justify-center items-center absolute bottom-10 right-10"
      >
        <div className="bg-white w-24 h-24 bg-opacity-30 rounded-full"></div>
        <GrLogout className="p-10 text-9xl text-white cursor-pointer absolute -right-[20px] text-center" />
      </Link>
      {/*FOLDERS*/}
      <div className="w-full h-full p-10">
        {folders.map((element, index) => (
          <div className="flex">
            <Draggable
              key={index}
              axis="both"
              handle=".handle"
              defaultPosition={{ x: 0, y: 0 }}
              position={null}
              grid={[25, 25]}
              scale={1}
            >
              <div className="max-w-16 h-16 flex m-2">
                <div
                  className={`handle ${
                    element.cadenas ? "cursor-not-allowed" : "cursor-pointer"
                  }`}
                >
                  <img
                    onDoubleClick={() => !element.cadenas && openPopup(element)}
                    src={imgDossier}
                    alt="dossier"
                    draggable="false"
                    className="text-6xl folder"
                  />
                  {/* {element.visible && (
                  <div>
                    <p
                      className="text-9xl"
                      onDoubleClick={() => setIsOpenPhoto(true)}
                    >
                      {element.photoSM}
                    </p>
                  </div>
                )} */}
                  {element.cadenas && (
                    <img
                      src={imgCadenas}
                      alt="cadenas"
                      className="z-[100] w-full h-full absolute top-0 left-0"
                    />
                  )}
                </div>
              </div>
            </Draggable>
            {element.visible && (
              <div
                className="text-xl cursor-pointer w-24 h-full"
                onDoubleClick={() => {
                  openPhoto(element);
                  setSelectedElement(element);
                }}
              >
                <p>{element.photoSM}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/*POP-UP*/}
      {isOpen && selectedElement && (
        <div className="w-screen h-screen top-0 flex justify-center items-center absolute">
          <div className="relative max-w-64">
            <img
              src={imgPage}
              alt="iconPage"
              draggable="false"
              className="max-w-6 absolute left-1"
            />
            <img
              src={imgX}
              alt="iconX"
              onClick={() => setIsOpen(false)}
              draggable="false"
              className="max-w-6 absolute right-0 cursor-pointer"
            />
            <div className="size-64 bg-amber-50 border-4 border-t-[24px] border-blue-700 rounded">
              <div className="input-container mb-8 mt-12">
                {/* <input
                  onChange={handleInputChange}
                  value={password}
                  type="text"
                  name="text"
                  className="input"
                  placeholder="***************"
                /> */}
                <input
                  type="radio"
                  id="choix1"
                  name="choix"
                  value={selectedElement.valeur1}
                />
                <label htmlFor="choix1">
                  <img
                    src={"/src/assets/img/" + selectedElement.choix1}
                    alt=""
                    className="w-24 h-24"
                  />
                </label>
                <input
                  type="radio"
                  id="choix2"
                  name="choix"
                  value={selectedElement.valeur2}
                />
                <label htmlFor="choix2">
                  <img
                    src={"/src/assets/img/" + selectedElement.choix2}
                    alt=""
                    className="w-24 h-24"
                  />
                </label>
                <input
                  type="radio"
                  id="choix3"
                  name="choix"
                  value={selectedElement.valeur3}
                />
                <label htmlFor="choix3">
                  <img
                    src={"/src/assets/img/" + selectedElement.choix3}
                    alt=""
                    className="w-24 h-24"
                  />
                </label>
              </div>
              <button onClick={handleVerification}>Verifier</button>
            </div>
          </div>
        </div>
      )}

      {/* FenêtreVidéo */}
      {selectedElement && selectedElement.unlocked && isOpenVideo && (
        <div className="w-screen h-screen top-0 flex justify-center items-center absolute">
          <div className="relative">
            <img
              src={imgPage}
              alt="iconPage"
              draggable="false"
              className="max-w-6 absolute left-1"
            />
            <img
              src={imgX}
              alt="iconX"
              onClick={() => setIsOpenVideo(false)}
              draggable="false"
              className="max-w-6 absolute right-0 cursor-pointer"
            />
            <div className="w-96 bg-amber-50 border-4 border-t-[24px] border-blue-700 rounded">
              <video src={selectedElement.video} autoPlay></video>
            </div>
          </div>
        </div>
      )}

      {/* FenêtrePhoto */}
      {isOpenPhoto && (
        <div className="w-screen h-screen top-0 flex justify-center items-center absolute">
          <div className="relative">
            <img
              src={imgPage}
              alt="iconPage"
              draggable="false"
              className="max-w-6 absolute left-1"
            />
            <img
              src={imgX}
              alt="iconX"
              onClick={openPhoto}
              draggable="false"
              className="max-w-6 absolute right-0 cursor-pointer"
            />
            <div className="w-96 bg-amber-50 border-4 border-t-[24px] border-blue-700 rounded">
              <p>{selectedElement.photoSM}</p>
            </div>
          </div>
        </div>
      )}

      {/* CONTEXTE */}
      {openContext && (
        <div className="w-screen h-screen bg-black bg-opacity-50 top-0 flex justify-center items-center absolute">
          <div className="relative max-full">
            <img
              src={imgPage}
              alt="iconPage"
              draggable="false"
              className="max-w-6 absolute left-1"
            />
            <img
              src={imgX}
              alt="iconX"
              onClick={() => setOpenContext(false)}
              draggable="false"
              className="max-w-6 absolute right-0 cursor-pointer"
            />
            <div className="w-[60vw] bg-amber-50 border-4 border-t-[24px] border-blue-700 rounded">
              <video src={video01} autoPlay controls></video>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
