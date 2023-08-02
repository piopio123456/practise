import Quote from "@/components/Quote";
import Navbar from "@/components/Navbar";

const getRandomQuote = () => {
    return (
        <div id="bg-syle" className="relative h-full w-full bg-gray-900 bg-no-repeat bg-center bg-fixed bg-cover">
            <header>
                <i><Navbar /></i>  
            </header>
            <div id="quote-box" className="flex justify-center items-center h-screen ">
                <div className="bg-white bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 ls:max-w-md rounded-md w-full">
                    <h2 className="text-purple-900 text-4xl mb-8 font-semibold text-center p-8 ...">
                       RandomQuote
                    </h2>
                    <div className="flex flex-col gap-4 ">
                        <i><Quote /></i>    
                    </div>
                </div>
            </div>
        </div>
    );
}


export default getRandomQuote;