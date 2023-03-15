import { CollectionItem } from "@voex";
export const BuyExploreCollection = () => {
  return (
    <div className="d-flex flex-column  align-items-center justify-content-center py-5 mb-5 ">
      <div className="col-11 col-xl-8  d-flex justify-content-between align-items-center     d-flex flex-wrap  mt-4">
        <h2 className="text-white">Explore the collection</h2>
        <button className="btn-main-hover px-4">View all</button>
      </div>
      <div>

      </div>
      <div className="col-12 justify-content-center mt-5 d-flex flex-wrap">
        <div className=" d-flex mt-3 mx-2 py-3">
          <CollectionItem name="NFT NAME 123" collectionName="Collection Name" artistName="@artistname" eth="1.10ETH" usd="1,000.23 USD" endTime="8h 32m 54S" img="https://static01.nyt.com/images/2021/03/12/arts/11nft-auction-cryptopunks-print/11nft-auction-cryptopunks-print-mobileMasterAt3x.jpg" />
        </div>
        <div className=" d-flex mt-3 mx-2 py-3">
          <CollectionItem name="NFT NAME 123" collectionName="Collection Name" userListed="@username" artistName="@artistname" eth="1.10ETH" usd="1,000.23 USD" img="https://static01.nyt.com/images/2021/03/12/arts/11nft-auction-cryptopunks-print/11nft-auction-cryptopunks-print-mobileMasterAt3x.jpg" />
        </div>

        <div className=" d-flex mt-3 mx-2 py-3">
          <CollectionItem name="NFT NAME 123" collectionName="Collection Name" artistName="@artistname" eth="1.10ETH" usd="1,000.23 USD" endTime="8h 32m 54S" img="https://static01.nyt.com/images/2021/03/12/arts/11nft-auction-cryptopunks-print/11nft-auction-cryptopunks-print-mobileMasterAt3x.jpg" />
        </div>
        <div className=" d-flex mt-3 mx-2 py-3">
          <CollectionItem name="NFT NAME 123" collectionName="Collection Name" userListed="@username" artistName="@artistname" eth="1.10ETH" usd="1,000.23 USD" img="https://static01.nyt.com/images/2021/03/12/arts/11nft-auction-cryptopunks-print/11nft-auction-cryptopunks-print-mobileMasterAt3x.jpg" />
        </div>



      </div>


    </div>
  );
};
