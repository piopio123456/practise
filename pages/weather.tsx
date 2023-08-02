import Weather from "@/components/Weather";
import Navbar from "@/components/Navbar";

const getWeather = () => {
    return (
        <div className="flex flex-col h-screen w-full bg-[url('/images/weather-bg.jpg')] bg-gray-900 bg-no-repeat bg-center bg-fixed bg-cover text-white">
            <header>
                <i><Navbar /></i>  
            </header>
            
            <div id="weather-box" className="flex justify-center items-center h-screen">
                <div className="backdrop-blur-xl">
                        <div className="h-center content-center">
                            <Weather />
                        </div>
                </div>                       
            </div>
        </div>

    );

}
    

export default getWeather;