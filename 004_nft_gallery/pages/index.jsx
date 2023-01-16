// import type { NextPage } from 'next'
// import Head from 'next/head'
// import Image from 'next/image'
import { NFTCard } from "../components/nftCard"
import { useState } from 'react'


// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more



const Home = (foo) => {
  console.log("init",foo)
  const [wallet, setWalletAddress] = useState("");
  const [collection, setCollectionAddress] = useState("");
  const [NFTs, setNFTs] = useState([]);
  const [fetchForCollection, setFetchForCollection]=useState(false);
  const [cardView, setView] = useState("default");

  const fetchNFTs = async() => {
    
    // const PRIVATE_KEY = process.env.PRIVATE_KEY;
 
    let nfts; 
    console.log("fetching nfts");
    const api_key = "A8A1Oo_UTB9IN5oNHfAc2tAxdR4UVwfM"
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
      }
    // }
  }
  

  return (
    <div class="flex flex-col h-screen overflow-hidden justify-between bg-black">
    <header class="h-15 bg-black ">{/* PAGE Header */}
    <div className="flex w-full justify-center sm:items-center gap-x-2">{/*BUTTON-FRAME*/}
          {/* <input disabled={fetchForCollection} type={"text"} placeholder="Add your wallet address"></input>
          <input type={"text"} placeholder="Add the collection address"></input>
          <label className="text-gray-600 "><input onChange={(e)=>{setFetchForCollection(e.target.checked)}} type={"checkbox"} className="mr-2"></input>Fetch for collection</label>
          <button className={"disabled:bg-slate-500 text-blue bg-blue-400 px-4 py-2 mt-3 rounded-sm w-1/5"} onClick={
            () => {
              console.log("click",fetchForCollection)
              if (fetchForCollection) {
                fetchNFTsForCollection()
              } else { fetchNFTs() }
            }
          }>Let's go! </button> */}
          <button className={"disabled:bg-slate-500 w-44 rounded-md text-blue bg-blue-400 px-4 py-2 mt-4 rounded-sm w-1/5"} onClick={
            () => { fetchNFTsForCollection() }
          }>NFT~BOOK</button>

          <button className={"disabled:bg-slate-500 w-44 rounded-md text-blue bg-blue-400 px-4 py-2 mt-4 rounded-sm w-1/5"} 
          onClick={ ()=>{ fetchNFTs() }
          }>LAST~BOOK</button>

          <button className={"disabled:bg-slate-500 w-44 rounded-md text-blue bg-blue-400 px-4 py-2 mt-4 rounded-sm w-1/5"} 
          onClick={ ()=>{ fetchNFTs() }
          }>NEXT~BOOK</button>

          <input className={"rounded-md pl-4 h-10 mt-4"} disabled={fetchForCollection} type={"text"} placeholder="load wallet or collection"></input>

          <button className={"disabled:bg-slate-500 w-44 rounded-md text-blue bg-blue-400 px-4 py-2 mt-4 rounded-sm w-1/5"} 
          onClick={ ()=>{ fetchNFTs() }
          }>LOAD~BOOK</button>

        </div>

    </header>
    <main class="mb-auto h-10 bg-green-500 h-full">{/*Content:*/}
      
      <div className="flex flex-col h-full items-center justify-center gap-y-3 bg-black">
             {/*CARD-FRAME*/} {/*overflow-x-scroll*/}
        <div className='flex sm:flex-col h-full sm:items-center items-stretch gap-y-12 mt-6 gap-x-2 justify-center'>
          {
            NFTs.length && NFTs.map(nft => {
              return (
                <NFTCard nft={nft} cardView={cardView}></NFTCard>
              )
            })
          }
        </div>


      </div>
      </main>
      <footer class="h-12 bg-blue-500 flex justify-center py-2 border-t-4 border-t-black">{/*Footer*/}
        <div class="flex items-center space-x-1">
          <a href="#" class="flex items-center px-4 py-2 text-gray-500 bg-gray-300 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
              </svg>
          </a>

          <a href="#" class="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white">
              1
          </a>
          <a href="#" class="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white">
              2
          </a>
          <a href="#" class="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white">
              3
          </a>
          <a href="#" class="px-4 py-2 text-gray-500 bg-gray-300 rounded-md hover:bg-blue-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
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
  console.log('init1')
  // return props
  return {
      data
  }
}
export default Home

