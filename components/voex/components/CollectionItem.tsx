import React from "react";
import { user } from "@assets";
interface Props {
  img: string;
  collectionName: string;
  name: string;
  eth: string;
  usd: string;
  artistName: string;
  endTime?: string;
  userListed?: string;
}
export const CollectionItem = ({
  img,
  collectionName,
  name,
  eth,
  usd,
  artistName,
  endTime,
  userListed,
}: Props) => {
  return (
    <div className="collection_item  mt-3 ">
      <div>
        <div>
          <div className=" thankYouUser position-absolute m-2 mt-2 ">
            <img src={user.src} />
            <strong className="">@artistname</strong>
          </div>
          <img className="collection_item_img" src={img} />
        </div>

        <div className="px-3">
          <div className="  mt-3 bg-transparent d-flex ">
            <img className="buy_nft_collection_img me-2" src={user.src} />
            <strong className="text-dark">{collectionName}</strong>
          </div>
          <h3 className="mt-2 mb-0 text-dark font_family_primary">{name}</h3>
        </div>
      </div>

      <div className="p-3 d-flex mt-3 bg-secondary-light text-dark ">
        <div className="col-6 p-1 text-dark">
          <div>
            <strong className="text-dark">Current Bid</strong>
          </div>
          <div className="d-flex flex-column">
            <strong className="text-purple fs-5">{eth}</strong>
            <small className="text-dark">{usd}</small>
          </div>
        </div>
        <div className="col-6 p-1 text-dark">
          <div className="d-flex flex-column">
            {endTime ? (
              <>
                <strong className="text-dark">Ending in </strong>
                <strong className="text-purple fs-5">{endTime}</strong>
              </>
            ) : (
             <>
             <strong className="text-dark">Listed by </strong>
             <div className="  mt-3 bg-transparent d-flex ">
              <img
                className="buy_nft_collection_img me-2"
                src={user.src}
              />
              <strong className="text-dark">{userListed}</strong>
            </div>
             </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
