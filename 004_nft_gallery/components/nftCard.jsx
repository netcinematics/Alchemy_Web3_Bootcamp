export const NFTCard = ({ nft }) => {

    return (

        <div class="flex flex-col h-screen justify-between">
            <header class="h-10 bg-red-500">Header</header>
            <main class="mb-auto h-10 bg-green-500">Content:
                <div className="md:w-1/4 flex flex-col bg-indigo-500 rounded-md ">
                <div className="rounded-md">
                    <img className="object-cover h-128 w-full rounded-t-md" src={nft.media[0].gateway} ></img>
                </div>
                <div className="flex flex-col y-gap-2 px-2 py-3 bg-slate-100 rounded-b-md h-110 ">
                    <div className="bg-sky-500 rounded-md overflow-hidden ">
                        <h2 className="text-xl text-gray-800">{nft.title}</h2>
                        <p className="text-gray-600">Id: {nft.id.tokenId}</p>
                        <p className="text-gray-600" >{nft.contract.address}</p>
                    </div>

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