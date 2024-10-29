import Telephone from "../../assets/images/Telephone.svg";
import Youtube from "../../assets/images/Youtube.svg";
import Instagram from "../../assets/images/Instagram.svg";
import Telegram from "../../assets/images/Telegram.svg";
import Facebook from "../../assets/images/Facebook.svg";
import GooglePlay from "../../assets/images/GooglePlay.svg";
import AppStore from "../../assets/images/AppStore.svg";
import HR_logo from "../../assets/images/HR_logo.svg";
import FooterLogo from "../../assets/images/FooterLogo.svg";
import FooterBgImage from "../../assets/images/FooterBgImage.svg";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      className="max-w-[1940.42px] max-h-[702.75px] relative bg-cover bg-left bg-no-repeat bg-[#065056] text-white mt-[101.11px] mb-[30px] py-[37.6px] px-[85px]"
      style={{ backgroundImage: `url(${FooterBgImage})` }}
    >
      <div className="container mx-auto relative z-10">
        <div>
          <img
            src={FooterLogo}
            alt="FooterLogo.svg"
            className="w-[232px] h-[68.47px] mt-[5%] ml-[1%]"
          />
        </div>

        <hr className="w-full border-[0.98px] border-solid border-[rgba(255, 255, 255, 1)] my-8" />

        <div className="flex">
          <ul className="space-y-2 ml-[1%] mr-[2%]">
            <li>
              <h3 className="font-poppins text-[23.54px] font-bold leading-[32.96px] text-left">
                Bank Tarixi
              </h3>
            </li>
            <li>
              <a
                href="#"
                className="font-poppins text-[23.54px] leading-[32.96px] text-left hover:text-teal-400 transition duration-300"
              >
                Bank haqida
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-poppins text-[23.54px] leading-[32.96px] text-left hover:text-teal-400 transition duration-300"
              >
                Qadriyatlarimiz
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-poppins text-[23.54px] leading-[32.96px] text-left hover:text-teal-400 transition duration-300"
              >
                Rahbariyat - Xodimlar
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-poppins text-[23.54px] leading-[32.96px] text-left hover:text-teal-400 transition duration-300"
              >
                Aloqa
              </a>
            </li>
          </ul>

          <div className="mr-[3%]">
            <h3 className="font-poppins text-[23.54px] font-bold leading-[32.96px] text-left mb-4">
              HR
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="font-poppins text-[23.54px] leading-[32.96px] text-left hover:text-teal-400 transition duration-300"
                >
                  Vakansiyalar
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-poppins text-[23.54px] leading-[32.96px] text-left hover:text-teal-400 transition duration-300"
                >
                  Stajyorlar Uchun
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-poppins text-[23.54px] leading-[32.96px] text-left hover:text-teal-400 transition duration-300"
                >
                  Yo'riqnoma
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-poppins text-[23.54px] leading-[32.96px] text-left hover:text-teal-400 transition duration-300"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div className="mr-[5%]">
            <h3 className="font-poppins text-[23.54px] font-bold leading-[32.96px] text-left mb-4">
              Qo'shimcha
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="font-poppins text-[23.54px] leading-[32.96px] text-left hover:text-teal-400 transition duration-300"
                >
                  Savol-Takliflar Uchun
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-poppins text-[23.54px] leading-[32.96px] text-left hover:text-teal-400 transition duration-300"
                >
                  Yangiliklar
                </a>
              </li>
            </ul>

            <div>
              <a
                href="https://xb.uz/"
                className="font-poppins text-[22.2px] font-bold leading-[28.86px] text-left mr-8 hover:text-teal-400 transition duration-300"
              >
                hr@xb.uz
              </a>
              <button className="border-[0.83px] rounded-[4.17px] w-[140.27px] h-[40.08px] font-poppins text-[16.7px] font-normal leading-[28.05px] text-white hover:bg-teal-700 hover:text-white transition duration-300 text-center">
                CV Topshirish
              </button>
            </div>

            <ul className="flex space-x-[15%] space-y-[5%]">
              <li>
                <a href="https://www.facebook.com/">
                  <img src={Facebook} alt="Facebook.svg" className="w-[20.09px] h-[39.14px] mt-3"/>
                </a>
              </li>

              <li>
                <a href="https://www.telegram.com/">
                  <img src={Telegram} alt="Telegram.svg" className="w-[39.25px] h-[34.3px]"/>
                </a>
              </li>

              <li>
                <a href="https://www.instagram.com/">
                  <img src={Instagram} alt="Instagram.svg" className="w-[36.76px] h-[38.32px]"/>
                </a>
              </li>
            
              <li>
                <a href="https://www.youtube.com/">
                  <img src={Youtube} alt="Youtube.svg" className="w-[52.61px] h-[34.23px]"/>
                </a>
              </li>
            </ul>
          </div>

          <div className=" space-y-2">
            <img
              src={HR_logo}
              alt="HR logo.svg"
              className="w-[197.59px] h-[70.96px] ml-4"
            />
            <div className=" flex">
              <button>
                <a href="https://apps.apple.com/uz/app/xazna/id1642489915">
                  <img
                    src={GooglePlay}
                    alt="Get it on Google Play.svg"
                    className="w-[235.5px] h-[88.41px]"
                  />
                </a>
              </button>
              <button>
                <a href="https://play.google.com/store/apps/details?id=uz.tune.xazna&hl=ru">
                  <img
                    src={AppStore}
                    alt="Download on the App Store.svg"
                    className="w-[235.5px] h-[88.31px] mb-4"
                  />
                </a>
              </button>
            </div>
              <div className="flex mt-[426.79px]">
                <p className="w-[227.13px] h-[126.04px] ml-6 font-poppins text-[17.47px] font-normal leading-[32.95px] text-left">Xodimlarimiz Bank <br />
                   Farovonligi Va Barqaror <br />
                   Rivojlanishining Asosidir
                </p>
                <div className="flex mt-7 ml-8">
                  <img src={Telephone} alt="Telephone.svg" className="w-[50.23px] h-[52.6px] mt-3 mr-3"/>
                  <p className=" w-[129.83px] h-[56.91px] font-poppins text-[50.59px] font-bold leading-[75.88px] tracking-[5.0587px] text-left text-white">1106</p>
                </div>
              </div>
          </div>
        </div>

<hr className="w-full border-[0.98px] border-solid border-[rgba(255, 255, 255, 1)] my-8" />

            <span className="flex gap-[3.2%]">
              <p className="font-poppins text-[16.72px] font-normal leading-[32.86px]">100096, Toshkent sh., Chilonzor tumani, Qatortol ko‘chasi, 46-uy. Barcha huquqlar himoyalangan. Saytdan olingan <br /> ma'lumotlardan foydalanganda veb-saytga havola ko‘rsatish shart. Oxirgi yangilangan sana 09.22.2024 yil.</p>

              <p className="font-poppins text-[17.97px] font-normal leading-[29.95px]">Copyright © 2024 - Xalq bank HR portal</p>
            </span>

      </div>

      {/*   
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between mt-12 space-y-6 md:space-y-0">
        <p className="text-center md:text-left text-sm max-w-md">
          100096, Toshkent Sh., Chilonzor Tumani, Qatortol Ko‘chasi, 46-Uy. Barcha Huquqlar Himoyalangan. Saytdan
          Olingan Ma’lumotlardan Foydalanganda Veb-Saytga Havola Ko‘rsatish Shart. Oxirgi Yangilangan Sana 09.22.2024 Yil.
        </p>

        <div className="flex space-x-4">
          <a href="#" className="text-xl hover:text-teal-400 transition duration-300">🔗 Facebook</a>
          <a href="#" className="text-xl hover:text-teal-400 transition duration-300">🔗 Telegram</a>
          <a href="#" className="text-xl hover:text-teal-400 transition duration-300">🔗 Instagram</a>
          <a href="#" className="text-xl hover:text-teal-400 transition duration-300">🔗 YouTube</a>
        </div>

        <div className="flex items-center space-x-4">
          <a href="#" className="bg-white text-black px-4 py-2 rounded hover:bg-teal-700 hover:text-white transition duration-300">App Store</a>
          <a href="#" className="bg-white text-black px-4 py-2 rounded hover:bg-teal-700 hover:text-white transition duration-300">Google Play</a>
        </div>
      </div>

      <div className="container mx-auto mt-10 text-center border-t border-teal-800 pt-5">
        <p>Copyright © 2024 - Xalq bank HR portal</p>
      </div> */}
    </footer>
  );
};

export default Footer;
