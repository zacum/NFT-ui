import React, { useState } from "react";
import {etherscan,eye,cube,shareWhite}from '@assets'
export const BuyNftDetail = () => {
  const [selectedOption, setSelectedObtion] = useState("Description");
  const handleSelectedOption = (e: any) => {
    setSelectedObtion(e.target.name);
  };
  return (
    <div className="bg-white-text-dark py-5 ">
      <div className="d-flex flex-column align-items-center">
        <div className="col-11 col-xl-8  px-1 ">
          <ul className="d-flex flex-wrap justify-content-between">
            <li>
              <button
                onClick={handleSelectedOption}
                name="Description"
                className={`fw-bold m-2 mt-3 fs-4 ${
                  selectedOption == "Description" ? "text-purple" : "text-muted"
                }`}
              >
                Description
              </button>
            </li>
            <li>
              <button
                onClick={handleSelectedOption}
                name="Properties"
                className={`fw-bold m-2 mt-3 fs-4 ${
                  selectedOption == "Properties" ? "text-purple" : "text-muted"
                }`}
              >
                Properties
              </button>
            </li>
            <li>
              <button
                onClick={handleSelectedOption}
                name="Price"
                className={`fw-bold m-2 mt-3 fs-4 ${
                  selectedOption == "Price" ? "text-purple" : "text-muted"
                }`}
              >
                Price history
              </button>
            </li>
            <li>
              <button
                onClick={handleSelectedOption}
                name="Trade"
                className={`fw-bold m-2  mt-3 fs-4 ${
                  selectedOption == "Trade" ? "text-purple" : "text-muted"
                }`}
              >
                Trade history
              </button>
            </li>
          </ul>
        </div>
        {selectedOption == "Description" && (
          <>
          <div className="col-11 col-xl-8 mt-4  bg-secondary-light p-4 overflow-hidden ">
            <p className="text-dark p-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              semper tincidunt dignissim. Phasellus iaculis consectetur purus
              vel ornare. Vivamus aliquam orci eget leo imperdiet varius. In
              lacinia non est vitae rhoncus. Etiam rhoncus, libero eu interdum
              convallis, massa ligula mattis sem, volutpat malesuada dolor dolor
              sit amet lectus. Proin non iaculis dui, quis consequat dui.
              Curabitur lorem arcu, blandit quis nunc eget, fringilla pharetra
              augue. Mauris nulla dolor, laoreet id metus sed, molestie
              hendrerit urna. Nunc dictum tincidunt scelerisque. Proin lobortis
              augue eget lectus gravida, eget tincidunt quam consectetur. Donec
              elementum est ligula, at sodales dui dignissim in. Donec luctus
              ante sit amet tellus accumsan, ut mollis odio gravida. In finibus
              libero sagittis elit consectetur aliquam. Phasellus convallis
              finibus metus vitae vulputate. Quisque orci turpis, sodales at
              eleifend sit amet, aliquet a eros. Nulla vel tempus est.
              Vestibulum posuere mattis eleifend. Vivamus bibendum gravida
              augue. Consectetur aliquam. Phasellus convallis finibus metus
              vitae vulputate. Quisque orci turpis, sodales at eleifend sit
              amet, aliquet a eros. Nulla vel tempus est. Vestibulum posuere
              mattis eleifend. Vivamus bibendum gravida augue
            </p>
          </div>

          <div className="col-11 col-xl-8 justify-content-between d-flex flex-wrap row mt-4">
             <div className="col-12  col-xl-4 p-5  m-1  bg-secondary-light">
               <span className="text-purple fs-5 fw-bold">Details</span> 
               <div className="d-flex align-items-center mt-3">
                 <img  className="buy_detail_icon me-2 p" src={etherscan.src}/>
                 <a href="#" className="text-dark fw-bold">View on Etherscan</a>
               </div>

               <div className="d-flex align-items-center mt-2">
                 <img  className="buy_detail_icon me-2" src={eye.src}/>
                 <a href="#" className="text-dark fw-bold">View metadata</a>
               </div>

               <div className="d-flex align-items-center mt-2">
                 <img  className="buy_detail_icon me-2 p-1" src={cube.src}/>
                 <a href="#" className="text-dark fw-bold">View on IPFS</a>
               </div>
             </div>

             <div className="col m-1 text-dark bg-secondary-light p-5">
             <span className="text- fs-5 fw-bold text-purple">Tags</span> 
             <div className="mt-2 d-flex flex-wrap">
               <button  className="nft_tag text-dark m-1 p-1 fw-bold  bg-white  text-center rounded-5 border">Tag 1</button>
               <button  className="nft_tag text-dark m-1 p-1 fw-bold  bg-white  text-center rounded-5 border">Tag 2</button>
               <button  className="nft_tag text-dark m-1 p-1 fw-bold  bg-white  text-center rounded-5 border">Tag 3</button>
               <button  className="nft_tag text-dark m-1 p-1 fw-bold  bg-white  text-center rounded-5 border">Tag 4</button>
               <button  className="nft_tag text-dark m-1 p-1 fw-bold  bg-white  text-center rounded-5 border">Tag 5</button>
               <button  className="nft_tag text-dark m-1 p-1 fw-bold  bg-white  text-center rounded-5 border">Tag 6</button>
             </div>
             <button className="btn-main fs-5 fw-normal d-flex mt-4"> <img className="buy_detail_icon me-1" src={shareWhite.src} alt="share" /> Share</button>
             </div>
          </div>
          </>
          
        )}

        {selectedOption !== "Description" &&  <div className="col-11 col-xl-8 mt-4  bg-secondary-light p-4 overflow-hidden ">
            <p className="text-dark">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              semper tincidunt dignissim. Phasellus iaculis consectetur purus
              vel ornare. Vivamus aliquam orci eget leo imperdiet varius. In
              lacinia non est vitae rhoncus. Etiam rhoncus, libero eu interdum
              convallis, massa ligula mattis sem, volutpat malesuada dolor dolor
              sit amet lectus. Proin non iaculis dui, quis consequat dui.
              Curabitur lorem arcu, blandit quis nunc eget, fringilla pharetra
              augue. Mauris nulla dolor, laoreet id metus sed, molestie
              hendrerit urna. Nunc dictum tincidunt scelerisque. Proin lobortis
              augue eget lectus gravida, eget tincidunt quam consectetur. Donec
              elementum est ligula, at sodales dui dignissim in. Donec luctus
              ante sit amet tellus accumsan, ut mollis odio gravida. In finibus
              libero sagittis elit consectetur aliquam. Phasellus convallis
              finibus metus vitae vulputate. Quisque orci turpis, sodales at
              eleifend sit amet, aliquet a eros. Nulla vel tempus est.
              Vestibulum posuere mattis eleifend. Vivamus bibendum gravida
              augue. Consectetur aliquam. Phasellus convallis finibus metus
              vitae vulputate. Quisque orci turpis, sodales at eleifend sit
              amet, aliquet a eros. Nulla vel tempus est. Vestibulum posuere
              mattis eleifend. Vivamus bibendum gravida augue
            </p>
          </div>}
      </div>
    </div>
  );
};
