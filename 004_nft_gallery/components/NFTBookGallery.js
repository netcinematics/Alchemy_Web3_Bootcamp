import { useState } from 'react';
import { sculptureList } from '../data/data.js';

export default function GalleryBook({ nfts }) {
  console.log("test3",nfts);
    // sculptureList = nfts;
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);
  
    function handleLastClick() {
        console.log("TEST1",nfts.length,index)
      if(index<1){ setIndex(nfts.length-1)} //loop around index
      else { setIndex(index - 1); }
    }

    function handleNextClick() {
      console.log("TEST2",nfts.length,index)
      if(index >= nfts.length-1){ setIndex(0); } //loop around index        
      else { setIndex(index + 1); }
    }
  
    function handleMoreClick() {
      setShowMore(!showMore);
    }
    let nft = nfts[index];
    // let sculpture = sculptureList[index];
    return (
      <div style={{color:'steelblue'}}>        
      <button onClick={handleLastClick}>
      Last
    </button>
        <button onClick={handleNextClick}>
          Next
        </button>
{ nfts.length && 
<>
        <h2>
          <i>{nft.title} </i>
          {/* <i>{sculpture.name} </i> */}
          by {"spazefalcon"}
          {/* by {sculpture.artist} */}
        </h2>
        <h3>
          ({index + 1} of {nfts.length})
          {/* ({index + 1} of {sculptureList.length}) */}
        </h3>
        <button onClick={handleMoreClick}>
          {showMore ? 'Hide' : 'Show'} details
        </button>
        {showMore && <p>{nft.description}</p>}
        {/* {showMore && <p>{sculpture.description}</p>} */}
        <img
          src={nft.media[0].gateway}
          // src={sculpture.url}
          // alt={sculpture.alt}
          />
</>
}

      </div>
    );
  }