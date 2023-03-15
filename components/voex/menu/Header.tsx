import React, {
  useContext,
  useEffect,
  useState,
  FunctionComponent,
} from "react";
import { useRouter } from "next/router";
import Breakpoint, {
  BreakpointProvider,
  setDefaultBreakpoints,
} from "react-socks";

import Link from "next/link";
import useOnclickOutside from "react-cool-onclickoutside";

import { WalletContext } from "../../../context/WalletContext";
import { useMoralis } from "react-moralis";
import { logoVoex } from "@assets";
// import Moralis from 'moralis';

setDefaultBreakpoints([{ xs: 0 }, { l: 1199 }, { xl: 1200 }]);
const navigation = [
  { name: "Marketplace", href: "/", current: true },
  { name: "Create", href: "/nft/create", current: false },
  { name: "CreateNFT", href: "/voex/CreateNFT", current: false },
];

const NavLink: FunctionComponent = () => <>dasd</>;

const Header = () => {
  const context = useContext(WalletContext);
  const router = useRouter();
  // const [isConnect, setIsConnect] = useState(userWallet ? true : false);

  const [isConnect, setIsConnect] = useState(false);

  const { authenticate, isAuthenticated, user, logout, Moralis } = useMoralis();

  const serverUrl = "https://sg2o7rhpognq.usemoralis.com:2053/server";
  const appId = "KZBokkkRUmXO7IUiPEsyNtTeRR25AOL6aBZXJZPN";
  (async () => await Moralis.start({ serverUrl, appId }))();

  const login = async () => {
    try {
      console.clear();
      console.log("entroo");
      console.log(isAuthenticated);

      if (!isAuthenticated) {
        console.log("entroo2");
        await authenticate()
          .then(function (user) {
            console.log(user);
            // console.log(!user.get('ethAddress'));
          })
          .catch(function (error) {
            console.log("ocurrio un error !!!!!!!");
            console.log(error.message);
          });
      } else {
        logout();
      }
    } catch (error) {
      console.log("ocurrio un error no tan granve3");
      // console.log(error.message);
    }
  };

  const [openMenu, setOpenMenu] = useState(false);
  const [openMenu1, setOpenMenu1] = useState(false);
  const [openMenu2, setOpenMenu2] = useState(false);
  const [openMenu3, setOpenMenu3] = useState(false);
  const handleBtnClick = () => {
    setOpenMenu(!openMenu);
  };
  const handleBtnClick1 = () => {
    setOpenMenu1(!openMenu1);
  };
  const handleBtnClick2 = () => {
    setOpenMenu2(!openMenu2);
  };
  const handleBtnClick3 = () => {
    setOpenMenu3(!openMenu3);
  };
  const closeMenu = () => {
    setOpenMenu(false);
  };
  const closeMenu1 = () => {
    setOpenMenu1(false);
  };
  const closeMenu2 = () => {
    setOpenMenu2(false);
  };
  const closeMenu3 = () => {
    setOpenMenu3(false);
  };
  const ref = useOnclickOutside(() => {
    closeMenu();
  });
  const ref1 = useOnclickOutside(() => {
    closeMenu1();
  });
  const ref2 = useOnclickOutside(() => {
    closeMenu2();
  });
  const ref3 = useOnclickOutside(() => {
    closeMenu3();
  });

  const handleSearch = (e: any) => {
    if (e.keyCode === 13) {
      const query = e.target.value;
      router.push("/search?search=" + query);
    }
  };

  const redirectHome = () => {
    router.push("/");
  };

  const [showmenu, btn_icon] = useState(false);
  // useEffect(() => {
  //   const header = document.getElementById("myHeader");
  //   const totop = document.getElementById("scroll-to-top");
  //   const sticky = header.offsetTop;
  //   const scrollCallBack = window.addEventListener("scroll", () => {
  //     btn_icon(false);
  //     if (window.pageYOffset > sticky) {
  //       header?.classList.add("sticky");
  //       totop?.classList.add("show");
  //     } else {
  //       header?.classList.remove("sticky");
  //       totop?.classList.remove("show");
  //     }
  //     if (window.pageYOffset > sticky) {
  //       closeMenu();
  //     }
  //   });
  //   return () => {
  //     window.removeEventListener("scroll", scrollCallBack);
  //   };
  // }, []);

  return (
    <div id="myHeader" className="navbar position-relative ">
      <div className="container">
        <div className="row w-100-nav">
          <div className="logo px-0">
            <div className="navbar-title navbar-item">
              <Link href="/">
                <>
                  <img
                    onClick={redirectHome}
                    src={logoVoex.src}
                    className="img-fluid d-block"
                    alt="#"
                    role="button"
                  />
                </>
              </Link>
            </div>
          </div>
          <div className="search">
            <input
              id="quick_search"
              className="xs-hide text-white"
              name="quick_search"
              placeholder="Search VOEX..."
              type="text"
              onKeyUp={handleSearch}
            />
          </div>{" "}
          <div className=" d-block d-xl-none  breakpoint__l-down ">
            {showmenu && (
              <div className="menu d-flex flex-column align-items-center bg-red ">
                <div className="navbar-item">
                  <a href="/marketplace">MarketPlace</a>
                </div>

                <div className="navbar-item">
                  <a href="/about">About</a>
                </div>
                <div className="navbar-item">
                  <a href="/contact">Contact</a>
                </div>
                {/* <div className='navbar-item'>
										<a href='/blog'>Blog</a>
									</div> */}
              </div>
            )}
          </div>
          <div className="d-none d-xl-block breakpoint__xl-only">
            <div className="menu">
              <div className="navbar-item">
                <a href="marketplace">Marketplace</a>
              </div>

              <div className="navbar-item">
                <a href="/about">About</a>
              </div>
              <div className="navbar-item">
                <a href="/contact">Contact</a>
              </div>
            </div>
          </div>
          <div className="mainside ms-5">
            <button onClick={login} className="btn-main">
              {isAuthenticated ? "Disconect Wallet" : "Connect Wallet"}
            </button>
          </div>
        </div>

        <div
          className="nav-icon text-white"
          onClick={() => btn_icon(!showmenu)}
        >
          <div className="menu-line white bg-white"></div>
          <div className="menu-line1 white bg-white"></div>
          <div className="menu-line2 white bg-white"></div>
        </div>
      </div>
      <div className="bg-danger col-12 text-white text-center">
        This site is currently in beta....{" "}
      </div>
    </div>
  );
};
export default Header;
