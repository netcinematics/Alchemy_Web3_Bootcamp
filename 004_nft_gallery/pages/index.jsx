// import type { NextPage } from 'next'
// import Head from 'next/head'
// import Image from 'next/image'
import { NFTCard } from "../components/nftCard"
import { useState } from 'react'


// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more



const Home = () => {
  
  const [wallet, setWalletAddress] = useState("");
  const [collection, setCollectionAddress] = useState("");
  const [NFTs, setNFTs] = useState([]);
  const [fetchForCollection, setFetchForCollection]=useState(false);

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
    <div className="flex flex-col items-center min-h-screen  justify-center py-8 gap-y-3 bg-black">
      <div className="flex flex-col w-full justify-center items-center gap-y-2">
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
      </div>
      <div className='flex flex-wrap gap-y-12 mt-4 w-5/6 gap-x-2 justify-center'>
        {
          NFTs.length && NFTs.map(nft => {
            return (
              <NFTCard nft={nft}></NFTCard>
            )
          })
        }
      </div>


    </div>
  )
}

export default Home

