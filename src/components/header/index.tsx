import { FC } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

const Header: FC = () => {
    return (
        <div className="container max-w-[1400px] mx-auto my-[30px]">
            <header className="flex justify-between items-center">
                <div className="flex items-center gap-[170px] rounded-xl bg-[#065056] px-[41px] py-[17px] ">
                    <div>{/* <img className="w-[120px]" src={Logo} alt="Logo" /> */}</div>
                    <div>
                        <ul className="flex items-center gap-[43px]">
                            <li className="text-[#e0e9ea] cursor-pointer">
                                <Link to={"/"}>Bosh menyu</Link>
                            </li>
                            <li className="text-[#e0e9ea] cursor-pointer">
                                <Link to={"/vacancy"}>Vakansiyalar</Link>
                            </li>
                            <li className="text-[#e0e9ea] cursor-pointer">
                                <Link to={"/news"}> Stajyorlar uchun</Link>
                            </li>
                            <li className="text-[#e0e9ea] cursor-pointer">
                                <Link to={"/contact"}> Aloqa</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <button className="flex items-center gap-[10px] text-white   rounded-xl bg-[#065056] px-[20px] py-[17px]">
                    {/* <img className="w-[31px]" src={Profil} alt="login" /> */}
                    <p className="">Kirish</p>
                </button>
                <div className="flex items-center gap-[25px] text-white   rounded-xl bg-[#065056] px-[15px] py-[18px]">
                    <div className="flex gap-[10px] text-lg items-center">
                        <BsFillTelephoneFill />
                        <p>1106</p>
                    </div>
                    <button className="flex gap-[10px] items-center">
                        <p>TIL</p>
                        <MdOutlineKeyboardArrowDown size={24} />
                    </button>
                    <div className="flex gap-[20px] items-center">
                        <p className="textxl">|</p>
                        <IoIosSearch size={24} />
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
