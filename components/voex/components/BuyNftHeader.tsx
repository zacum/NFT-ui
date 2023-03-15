import React from "react";

import { mask, user } from "@assets";

export const BuyNftHeader = () => {
  return (
    <div className="degradd" style={{marginTop:"50px"}}>
   
      <div className="container_thankYou d-flex justify-content-center  me-5 ">
        <div className="d-flex flex-wrap-reverse ms-5 p-3 col-12 justify-content-center">
          <div className="col-12  d-flex  justify-content-start   col-xl-6  ">
            <div>
              <h1 className="text-start text-white m-0 title_detail_nft  ">
                NFT NAME 123
              </h1>
              <div>
                <small className="fs-6">Minted on Jan 19, 2022</small>
              </div>

              <div className=" d-flex flex-wrap justify-content-between mt-5  col-12 col-md-11 col-lg-10 col-xl-8 ">
                <div className="mt-2 col-12 col-md-6">
                  <span>Created by</span>
                  <div className=" thankYouUser mt-2 ">
                    <img src={user.src} />
                    <strong className="">@artistname</strong>
                  </div>
                </div>

                <div className="mt-2 col-12 col-md-6">
                  <span>Collection</span>
                  <div className="  mt-3 bg-transparent d-flex ">
                    <img
                      className="buy_nft_collection_img me-2"
                      src={user.src}
                    />
                    <strong className="">Collection Name</strong>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <h4 className="text-white m-0">Current price</h4>
                <div className=" d-flex align-items-center ">
                  <i className="fa-brands fa-ethereum fs-2 me-3"></i>
                  <span className="fs-1 fw-bold">3.22 ETH</span>
                </div>
                <small>8,801.39 USD</small>
              </div>

              <div className="d-flex  justify-content-between flex-wrap   col-12 col-md-11 col-lg-11 col-xl-12 ">
                <button className="btn-main mt-5  px-5 me-3">
                  <i className="fa-brands fa-ethereum fs-4 me-2"></i>
                  <span className="fs-5">Buy Now</span>
                </button>

                <button className="btn-main-hover mt-5  px-3">
                  <span className="fs-4">Buy with Credit Card</span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-12  d-flex   justify-content-start justify-content-xl-center  justify-content-xl-start  col-xl-6">
            <img className=" img_detail_nft" src={mask.src} />
          </div>
        </div>
      </div>
    </div>
  );
};
