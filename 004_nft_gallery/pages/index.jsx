// import type { NextPage } from 'next'
// import Head from 'next/head'
// import Image from 'next/image'
import { NFTCard } from "../components/nftCard"
import { useState } from 'react'
// import GalleryBook from '../components/NFTBookGallery';
import NavBooks from '../components/NavBooks';


// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more






const Home = (foo) => {
  console.log("init",foo)
  const [wallet, setWalletAddress] = useState("");
  const [collection, setCollectionAddress] = useState("");
  const [NFTs, setNFTs] = useState([]);
  // let NFTs = []; 
  // const setNFTs = (nftz) => {
  //   NFTs = nftz;
  // }
  const [fetchForCollection, setFetchForCollection]=useState(false);

  //Pagination Variables.
  let viewNum = 3; //number of items in view screen.
  let viewIndex = 0; //first item in view
  const [viewPage, setPage] = useState([]); //items to view

  const updateViewSet = (newIndex) => {
    if(!NFTs.length){ return }
    if(newIndex<0){viewIndex = 0}
    else if (newIndex >= NFTs.length){ 
      if(NFTs.length>=viewNum){ viewIndex = NFTs.length-viewNum;} 
      else {viewIndex = 0}
    } else {viewIndex = newIndex} //error trap

    const newView = [];
    if(NFTs[viewIndex]){newView.push(new Object(NFTs[viewIndex]))}else{newView.push({})}
    if(NFTs[viewIndex+1]){newView.push(new Object(NFTs[viewIndex+1]))}else{newView.push({})}
    if(NFTs[viewIndex+2]){newView.push(new Object(NFTs[viewIndex+2]))}else{newView.push({})}
    // setPage(newView);
    // return [NFTs[newIndex],NFTs[newIndex+1],NFTs[newIndex+2]]

  }


  const fetchNFTsPolygon = async() => {
    // const aKey = process.env.NEXT_PUBLIC_ANALYTICS_ID;
    // const PRIVATE_KEY = process.env.PRIVATE_KEY;
    // networks: {
    //   mumbai: {
    //     url: process.env.TESTNET_RPC,
    //     accounts: [process.env.PRIVATE_KEY]
    //   },
    // },
    // etherscan: {
    //   apiKey: process.env.POLYGONSCAN_API_KEY
    // }
    let nfts; 
    console.log("fetching nfts");
    // const api_key = process.env.PRIVATE_KEY; //"A8A1Oo_UTB9IN5oNHfAc2tAxdR4UVwfM"
    //const baseURL = 'https://eth-mainnet.g.alchemy.com/v2/A8A1Oo_UTB9IN5oNHfAc2tAxdR4UVwfM/getNFTs/?owner=0x46f3397433384F2E31262596642C811929d6c069';
    // const baseURL = `https://eth-mainnet.g.alchemy.com/v2/${api_key}/getNFTs/`;
    // const baseURL = `${process.env.TESTNET_RPC}/getNFTs/`;
    const fetchURL = `${process.env.POLYGON_MAIN_NFTS}`;
    var requestOptions = {
        method: 'GET'
      };
     
    // if (!collection.length) {
    //   console.log('fetch by owner')
      // const fetchURL = `${baseURL}?owner=${wallet}`;
      // const fetchURL = `${baseURL}?owner=0x46f3397433384F2E31262596642C811929d6c069`;
  
      nfts = await fetch(fetchURL, requestOptions).then(data => data.json())
    // } else {
    //   console.log("fetching nfts for collection owned by address")
    //   const fetchURL = `${baseURL}?owner=${wallet}&contractAddresses%5B%5D=${collection}`;
    //   nfts= await fetch(fetchURL, requestOptions).then(data => data.json())
    // }
  
    if (nfts) {
      console.log("nfts:", nfts)
      setNFTs(nfts.ownedNfts);
      setTimeout(function(){ updateViewSet(0)},100);
    }


  }

  const fetchNFTs = async() => {
    let nfts; 
    console.log("fetching nfts");
    const api_key = "A8A1Oo_UTB9IN5oNHfAc2tAxdR4UVwfM" //au publickey
    //const baseURL = 'https://eth-mainnet.g.alchemy.com/v2/A8A1Oo_UTB9IN5oNHfAc2tAxdR4UVwfM/getNFTs/?owner=0x46f3397433384F2E31262596642C811929d6c069';
    const baseURL = `https://eth-mainnet.g.alchemy.com/v2/${api_key}/getNFTs/`;
    var requestOptions = {
        method: 'GET'
      };
     
    if (!collection.length) {
      console.log('fetch by owner')
      // const fetchURL = `${baseURL}?owner=${wallet}`;
      const fetchURL = `${baseURL}?owner=0x46f3397433384F2E31262596642C811929d6c069`;
  
      nfts = await fetch(fetchURL, requestOptions).then(data => data.json())
    } else {
      console.log("fetching nfts for collection owned by address")
      const fetchURL = `${baseURL}?owner=${wallet}&contractAddresses%5B%5D=${collection}`;
      nfts= await fetch(fetchURL, requestOptions).then(data => data.json())
    }
  
    if (nfts) {
      console.log("nfts:", nfts)
      setNFTs(nfts.ownedNfts)
      console.log("teststate1",NFTs.length)
      setTimeout(function(){ updateViewSet(0)},100);
    }
  }

  const fetchNFTsForCollection = async () => {
    // if (collection.length) {
      // const collection = '0xd90d4db4966ecb520847e0723908427c2a7a4622';//polygon rarbl sonic
      // const collection = '0x495f947276749Ce646f68AC8c248420045cb7b5e'; //OS cozmo
      const collection = '0xe52a031e3d5b0dcb086a30e533cf6a71c77f6c27'; //AU cozmo 
      var requestOptions = {
        method: 'GET'
      };
      const api_key = "A8A1Oo_UTB9IN5oNHfAc2tAxdR4UVwfM"
      const baseURL = `https://eth-mainnet.g.alchemy.com/v2/${api_key}/getNFTsForCollection/`;
      const fetchURL = `${baseURL}?contractAddress=${collection}&withMetadata=${"true"}`;
      console.log('Fetch collection',fetchURL)
      const nfts = await fetch(fetchURL, requestOptions).then(data => data.json())
      if (nfts) {
        console.log("NFTs in collection:", nfts)
        setNFTs(nfts.nfts)
        // updateViewSet(0);
      }
    // }
  }
  

  return (
    <div className="flex flex-col h-screen overflow-hidden justify-between bg-black">



      {/* <NavBooks /> */}
      {/* <GalleryBook /> */}

      {/* // <div style={{color: 'steelblue'}}>
        // <ul> 
        // <li>
        // <Link href="/">Home</Link>
        // </li>
        // <li>
        // <Link href="/book1">BOOK 1</Link>
        // </li>
        // <li>
        // <Link href="/blog/hello-world">...</Link>
        // </li>
        // </ul>
        // </div> */}
        <header className="h-15 bg-black ">{/* PAGE Header */}
        <div className="flex w-full justify-center sm:items-center gap-x-2">{/*BUTTON-FRAME*/}
 
           <button className={"disabled:bg-slate-500 w-44 rounded-md text-blue bg-blue-400 px-4 py-2 mt-4 rounded-sm w-1/5"} onClick={
             () => { fetchNFTsForCollection(); }
           }>NFT~BOOKS</button>
 
           <button className={"disabled:bg-slate-500 w-44 rounded-md text-blue bg-blue-400 px-4 py-2 mt-4 rounded-sm w-1/5"} 
           onClick={ ()=>{ fetchNFTs(); }
           }>LAST~BOOK</button>
 
           <button className={"disabled:bg-slate-500 w-44 rounded-md text-blue bg-blue-400 px-4 py-2 mt-4 rounded-sm w-1/5"} 
           onClick={ ()=>{ fetchNFTsPolygon(); }
           }>NEXT~BOOK</button>
 
           <input className={"rounded-md pl-4 h-10 mt-4"} disabled={true} type={"text"} placeholder="load wallet or collection"></input>
 
           <button className={"disabled:bg-slate-500 w-44 rounded-md text-blue bg-blue-400 px-4 py-2 mt-4 rounded-sm w-1/5"} 
           onClick={ ()=>{  }
           }>LOAD~BOOK</button>
 
         </div>
     </header>




    <main className="mb-auto bg-black h-full overflow-auto">{/*Content:*/}
      
      <div className="flex flex-col h-full items-center justify-center gap-y-3 bg-black">
             {/*CARD-FRAME*/} {/*overflow-x-scroll*/}
        <div className='flex sm:flex-col h-full sm:items-center gap-y-8 mt-6 gap-x-2 '>
          {
            // (viewPage.length>0) ?
            //   viewPage.map( (nft,i) => {
            //   return (
            //     <NFTCard nft={nft} key={'nftpage'+i}></NFTCard>
            //   )
            // })
            (viewIndex>0) ?
              
              viewPage.map( (nft,i) => {
                if(i<viewIndex || i >= viewIndex+viewNum){ return }
                else {
                  return (
                    <NFTCard nft={nft} key={'nftpage'+i}></NFTCard>
                  )
                }
              })            


            :
              NFTs.length && NFTs.map( (nft,i) => {
                return (
                  <NFTCard nft={nft} key={'nftcard'+i}></NFTCard>
                )
              })
            
          }
        </div>


      </div>
      </main>
      <footer className="h-12 bg-blue-500 flex justify-center py-2 border-t-4 border-t-black">{/*Footer*/}
        <div className="flex items-center space-x-1">
          {/* <a href="#" className="px-4 py-2 text-gray-500 bg-gray-300 rounded-md  hover:bg-blue-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
              </svg>
          </a> */}

          <button className={"disabled:bg-slate-500 px-4 py-2 text-gray-500 bg-gray-300 rounded-md  hover:bg-blue-400 hover:text-white"} 
          onClick={ ()=>{ 
            updateViewSet(viewIndex+=viewNum) 
          }
          }>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
              </svg>
          </button>

          {/* <a href="#" class="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white">
              1
          </a>
          <a href="#" className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white">
              2
          </a>
          <a href="#" className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white">
              3
          </a> */}
          <a href="#" className="px-4 py-2 text-gray-500 bg-gray-300 rounded-md hover:bg-blue-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
          </a>
        </div>
      </footer>
    </div>      
  )


}

Home.getInitialProps = async (ctx) => {
  // FRONT-LOAD with CONTENT.
  const data = "hullowurld"; //await User.findOne(ctx.query.id)
  console.log('init index')
  // return props
  return {
      data
  }
}
export default Home

