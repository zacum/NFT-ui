import { BaseLayout } from "@ui";
import { mask, user } from "@assets";
import { CollectionItem } from "@voex";

const MyProfile = () => {
    return (
        <BaseLayout>
            <div className="d-flex myProfile">
                <img src={user.src} alt="user profile" style={style.image} />
                <div className="ms-md-5 person-info">
                    <h1>Full Name</h1>
                    <button style={style.btn_nickname} className="btn-main-hover">@artistname</button>
                </div>
            </div>
            <div className="d-flex row main">
                <div className="col-12 col-md-2 person-info">
                    <div className="d-flex d-flex">
                        <div className="" >
                            <h2 className="text-white mb-0">120</h2>
                            <p>Following</p>
                        </div>
                        <div className="" style={style.marginFollow}>
                            <h2 className="text-white mb-0">140</h2>
                            <p>Followers</p>
                        </div>
                    </div>
                    <button style={{width:'50%',height:'40px'}} className="btn-main mb-3 mt-3">Follow</button>
                    <div>
                        <h3 className="text-white mb-3">Follow on</h3>
                        <div className="d-flex align-items-center">
                            <i className="fa-brands fa-instagram"></i>
                            <p className="ms-2">@Intagram_username</p>
                        </div>
                        <div className="d-flex align-items-center">
                            <i className="fa-brands fa-twitter"></i>
                            <p className="ms-2">@Twiterusername</p>
                        </div>
                        <div className="d-flex align-items-center">
                            <i className="fa-solid fa-thermometer"></i>
                            <p className="ms-2">@EtH.username</p>
                        </div>
                    </div>

                    <div className="mt-5 person-info">
                        <h3 className="text-white mb-3">Bio</h3>
                        <p className="text-white">
                            Nulla varius ac risus at commodo. Vestibulum nec nibh massa. Praesent commodo odio sem, a efficitur tellus vestibulum eu. Vivamus vel faucibus risus, ac euismod elit. Duis efficitur blandit lectus sit amet pulvinar.
                        </p>

                    </div>
                    <div className="mt-5 person-info mb-5 mb-md-0">
                        <h3 className="text-white mb-3">Joined</h3>
                        <p className="text-white">
                            December 2021
                        </p>

                    </div>
                </div>
                <div className="col-12 col-md-10">
                    <div className="nav d-flex row m-3" style={style.nav}>
                        <div className="col-12 col-md-3 d-flex  ps-5 align-items-center" style={style.created}>
                            <div className="d-flex align-items-center">
                                <i className="fa-solid fa-image"></i>
                                <p className="text-white ms-3 fs-5">Created</p>
                            </div>
                        </div>

                        <div className="col-12 col-md-9 d-flex ps-5 align-items-center" style={style.owned}>
                            <div className="d-flex align-items-center">
                                <i className="fa-solid fa-table-cells-large"></i>
                                <p className="text-white ms-3 fs-5">Owned</p>
                            </div>
                        </div>
                    </div>
                    <div className="justify-content-center justify-content-lg-start d-flex flex-wrap m-3">
                        <div className=" d-flex mt-3 mx-2 py-3">
                            <CollectionItem name="NFT Name 123" collectionName="Collection Name" artistName="@artistname" eth="1.10ETH" usd="1,000.23 USD" endTime="8h 32m 54S" img="https://static01.nyt.com/images/2021/03/12/arts/11nft-auction-cryptopunks-print/11nft-auction-cryptopunks-print-mobileMasterAt3x.jpg" />
                        </div>
                        <div className=" d-flex mt-3 mx-2 py-3">
                            <CollectionItem name="NFT Name 123" collectionName="Collection Name" artistName="@artistname" eth="1.10ETH" usd="1,000.23 USD" endTime="8h 32m 54S" img="https://static01.nyt.com/images/2021/03/12/arts/11nft-auction-cryptopunks-print/11nft-auction-cryptopunks-print-mobileMasterAt3x.jpg" />
                        </div>
                        <div className=" d-flex mt-3 mx-2 py-3">
                            <CollectionItem name="NFT Name 123" collectionName="Collection Name" artistName="@artistname" eth="1.10ETH" usd="1,000.23 USD" endTime="8h 32m 54S" img="https://static01.nyt.com/images/2021/03/12/arts/11nft-auction-cryptopunks-print/11nft-auction-cryptopunks-print-mobileMasterAt3x.jpg" />
                        </div>
                        <div className=" d-flex mt-3 mx-2 py-3">
                            <CollectionItem name="NFT Name 123" collectionName="Collection Name" artistName="@artistname" eth="1.10ETH" usd="1,000.23 USD" endTime="8h 32m 54S" img="https://static01.nyt.com/images/2021/03/12/arts/11nft-auction-cryptopunks-print/11nft-auction-cryptopunks-print-mobileMasterAt3x.jpg" />
                        </div>
                        <div className=" d-flex mt-3 mx-2 py-3">
                            <CollectionItem name="NFT Name 123" collectionName="Collection Name" artistName="@artistname" eth="1.10ETH" usd="1,000.23 USD" endTime="8h 32m 54S" img="https://static01.nyt.com/images/2021/03/12/arts/11nft-auction-cryptopunks-print/11nft-auction-cryptopunks-print-mobileMasterAt3x.jpg" />
                        </div>
                        <div className=" d-flex mt-3 mx-2 py-3">
                            <CollectionItem name="NFT Name 123" collectionName="Collection Name" artistName="@artistname" eth="1.10ETH" usd="1,000.23 USD" endTime="8h 32m 54S" img="https://static01.nyt.com/images/2021/03/12/arts/11nft-auction-cryptopunks-print/11nft-auction-cryptopunks-print-mobileMasterAt3x.jpg" />
                        </div>
                    </div>
                </div>
                <div className='mt-6 mb-5 px-4 pagination d-flex justify-content-center'>
					<button className=' me-4'>
						{' '}
						<i className='fa-solid fa-chevron-left'></i> Prev page{' '}
					</button>
					<button className='pagination_page pagination_selected '> 1 </button>
					<button className='pagination_page'> 2 </button>
					<button className='pagination_page'> 3 </button>
					<button className='pagination_page'> 4 </button>
					<button className='pagination_page'> 5 </button>
					<button className='pagination_page'> 6 </button>

					<button className='ms-4'>
						{' '}
						Next page <i className='fa-solid fa-chevron-right'></i>{' '}
					</button>
				</div>
            </div>
        </BaseLayout>
    );
};

const style = {
    image: {
        width: 250,
        height: 250,
    },
    marginFollow: {
        marginLeft: "5em"
    },
    btnFollow: {
        width: "35%",
        height: "4em",
        marginTop: "1em",
        marginBottom: "2em",
        fontSize: "0.95em",
        fontWeight: "bold",
    },
    created: {
        backgroundColor: "#5217B5",
    },
    owned: {
        backgroundColor: "#401091",
    },
    nav: {
        height: "95px",
    },
    btn_nickname: {
        fontSize: "0.9em",
        height: "50px",
    }
}



export default MyProfile;
