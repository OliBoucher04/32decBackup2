
import { Link } from "react-router-dom";
import { GrLogout } from "react-icons/gr";
import { BlueWin, Cloppie, CloppieWin } from "../assets";

const Win = () => {
    return (
        <div>
            <img src={BlueWin} alt="" className="fixed -z-[50] h-screen object-fill w-screen"/>
            
            {/*Logout*/}
            <Link
                to="/login"
                className="flex justify-center items-center absolute top-10 right-10"
            >
                <div className="bg-white w-24 h-24 bg-opacity-30 rounded-full"></div>
                <GrLogout className="p-10 text-9xl text-white cursor-pointer absolute -right-[20px] text-center" />
            </Link>

            <div className="w-screen h-screen">
                <img src={CloppieWin} alt="Cloppie Win" className="max-w-48 ml-[45%] pt-48"/>
                <img src={Cloppie} alt="Cloppie" className="max-w-48 ml-[50%]" />
            </div>
        </div>
    );
}

export default Win;