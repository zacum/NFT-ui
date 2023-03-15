import { CollectionItem } from "./CollectionItem";

export const FeaturedNFTs = () => {
  return (
    <div className=" text-white d-flex justify-content-center py-5">
      <div className=" col-11 col-xl-9 col-xxl-9 py-5">
        <h3 className="title_detail_nft text-white ">
          Featured
          <br /> NFTs
        </h3>
        <div className="d-flex flex-wrap  justify-content-between">
          <p className="col-12 col-lg-7 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis
            mattis tortor. Cras aliquet nisi consequat lacus ultrices eleifend.
            In ultricies turpis non odio sodales nec tristique elit.
          </p>
          <div className="mt-2">
            <button className=" btn-main-hover">View All</button>
          </div>
        </div>

        <div className="d-flex flex-wrap  justify-content-center justify-content-md-evenly  justify-content-xxl-around mb-5 ">
          <div className="col-12 justify-content-start mt-5 d-flex flex-wrap">
            <div className=" d-flex mt-3 mx-2 py-3">
              <CollectionItem
                name="NFT NAME 123"
                collectionName="Collection Name"
                artistName="@artistname"
                eth="1.10ETH"
                usd="1,000.23 USD"
                endTime="8h 32m 54S"
                img="https://static01.nyt.com/images/2021/03/12/arts/11nft-auction-cryptopunks-print/11nft-auction-cryptopunks-print-mobileMasterAt3x.jpg"
              />
            </div>
            <div className=" d-flex mt-3 mx-2 py-3">
              <CollectionItem
                name="NFT NAME 123"
                collectionName="Collection Name"
                userListed="@username"
                artistName="@artistname"
                eth="1.10ETH"
                usd="1,000.23 USD"
                img="https://static01.nyt.com/images/2021/03/12/arts/11nft-auction-cryptopunks-print/11nft-auction-cryptopunks-print-mobileMasterAt3x.jpg"
              />
            </div>

            <div className=" d-flex mt-3 mx-2 py-3">
              <CollectionItem
                name="NFT NAME 123"
                collectionName="Collection Name"
                artistName="@artistname"
                eth="1.10ETH"
                usd="1,000.23 USD"
                endTime="8h 32m 54S"
                img="https://static01.nyt.com/images/2021/03/12/arts/11nft-auction-cryptopunks-print/11nft-auction-cryptopunks-print-mobileMasterAt3x.jpg"
              />
            </div>
            <div className=" d-flex mt-3 mx-2 py-3">
              <CollectionItem
                name="NFT NAME 123"
                collectionName="Collection Name"
                userListed="@username"
                artistName="@artistname"
                eth="1.10ETH"
                usd="1,000.23 USD"
                img="https://static01.nyt.com/images/2021/03/12/arts/11nft-auction-cryptopunks-print/11nft-auction-cryptopunks-print-mobileMasterAt3x.jpg"
              />
            </div>
            <div className=" d-flex mt-3 mx-2 py-3">
              <CollectionItem
                name="NFT NAME 123"
                collectionName="Collection Name"
                artistName="@artistname"
                eth="1.10ETH"
                usd="1,000.23 USD"
                endTime="8h 32m 54S"
                img="https://static01.nyt.com/images/2021/03/12/arts/11nft-auction-cryptopunks-print/11nft-auction-cryptopunks-print-mobileMasterAt3x.jpg"
              />
            </div>
            <div className=" d-flex mt-3 mx-2 py-3">
              <CollectionItem
                name="NFT NAME 123"
                collectionName="Collection Name"
                userListed="@username"
                artistName="@artistname"
                eth="1.10ETH"
                usd="1,000.23 USD"
                img="https://static01.nyt.com/images/2021/03/12/arts/11nft-auction-cryptopunks-print/11nft-auction-cryptopunks-print-mobileMasterAt3x.jpg"
              />
            </div>

            <div className=" d-flex mt-3 mx-2 py-3">
              <CollectionItem
                name="NFT NAME 123"
                collectionName="Collection Name"
                artistName="@artistname"
                eth="1.10ETH"
                usd="1,000.23 USD"
                endTime="8h 32m 54S"
                img="https://static01.nyt.com/images/2021/03/12/arts/11nft-auction-cryptopunks-print/11nft-auction-cryptopunks-print-mobileMasterAt3x.jpg"
              />
            </div>
            <div className=" d-flex mt-3 mx-2 py-3">
              <CollectionItem
                name="NFT NAME 123"
                collectionName="Collection Name"
                userListed="@username"
                artistName="@artistname"
                eth="1.10ETH"
                usd="1,000.23 USD"
                img="https://static01.nyt.com/images/2021/03/12/arts/11nft-auction-cryptopunks-print/11nft-auction-cryptopunks-print-mobileMasterAt3x.jpg"
              />
            </div>

          
          </div>
        </div>
      </div>
    </div>
  );
};
