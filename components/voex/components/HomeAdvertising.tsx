import { walletIcon, Group32, nutIcon, imageIcon } from "@assets";
import React from "react";
import { AdvertisingItem } from "./AdvertisingItem";

export const HomeAdvertising = () => {
  return (
    <div className=" bg-white-text-dark d-flex justify-content-center py-5">
      <div className=" col-11 col-xl-9 col-xxl-9 py-5">
        <h3 className="fs-1 text-center text-xl-start">Create and sell your NFTs</h3>

        <div className="d-flex flex-wrap  justify-content-center justify-content-xl-between">
          <div className="m-1 mt-2">
            <AdvertisingItem
              img={walletIcon.src}
              title="Set up your wallet"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices, metus vel mattis cursus, magna nunc varius mi, et consequat erat lacus a urna. Nulla varius ac risus at commodo."
            />
          </div>

          <div className="m-1 mt-2">
            <AdvertisingItem
              img={Group32.src}
              title="Create your collection"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices, metus vel mattis cursus, magna nunc varius mi, et consequat erat lacus a urna. Nulla varius ac risus at commodo."
            />
          </div>

          <div className="m-1 mt-2">
         
            <AdvertisingItem
              img={imageIcon.src}
              title="Create your collection"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices, metus vel mattis cursus, magna nunc varius mi, et consequat erat lacus a urna. Nulla varius ac risus at commodo."
            />
          </div>

          <div className="m-1 mt-2">
     
            <AdvertisingItem
              img={nutIcon.src}
              title="List them for sale"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices, metus vel mattis cursus, magna nunc varius mi, et consequat erat lacus a urna. Nulla varius ac risus at commodo."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
