import dynamic from "next/dynamic"

export const NFTCard = ({ nft }) => {
    const textToCopy = "0x134..skj"
    const CC = dynamic(() => import("../components/copyClipboard").then(mod => mod.CopyClipboard), { ssr: false })
   
    return (

        <div class="flex flex-1 flex-col h-screen justify-between bg-zinc-800">{/*CARD-FRAME*/}
            <header class="flex justify-between h-200 bg-sky-500 rounded-lg p-2">
                    <h2 className="text-xl align-left rounded-md text-gray-800">{nft.title}</h2>
                    <p className="text-gray-600 align-center ">&nbsp;</p>
                    <div>{/*icon*/}
                        <CC content={textToCopy} />
                    </div>
                    {/* <p className="text-gray-600" >{nft.contract.address}</p> */}
            </header>
            <main class="flex grow-0 mb-auto h-10 bg-green-500 ">{/*CARD-CONTENT-FRAME*/}{/* overflow-auto */}
                <div className="md:w-1/4 flex flex-col bg-indigo-500 rounded-md"> {/*  self-stretch */}
                <div className="rounded-md">
                    <img className="object-cover h-128 w-full rounded-t-md" src={nft.media[0].gateway} ></img>
                </div>
                <div className="flex flex-col y-gap-2 px-2 py-3 bg-slate-100 rounded-b-md h-110 ">
                    {/* <div className="bg-sky-500 rounded-md overflow-hidden ">
                        <h2 className="text-xl text-gray-800">{nft.title}</h2>
                        <p className="text-gray-600">Id: {nft.id.tokenId}</p>
                        <p className="text-gray-600" >{nft.contract.address}</p>
                    </div> */}

                    <div className="flex-grow mt-2">
                        <p className="text-gray-600 rounded-md scroll-smooth overflow-hidden">{nft.description}</p>
                    </div>
                </div>

            </div>
        </main>
        <footer class="h-10 bg-blue-500">Footer</footer>
    </div>

    )
}


export default NFTCard