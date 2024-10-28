import cvImg from "../../../assets/images/cv_img.png"
import cvIcon from "../../../assets/icons/sv_icon.svg"
import { FC } from "react"
const CurriculumVitae: FC = () => {
  return (
    <div>
      <div className='pt-[180px]  flex gap-[125px] ' >
        <div className="curriculumImg  items-center">
          <img className="mt-12 ml-10   " src={cvImg} alt="img" />
        </div>

        <div>

          <h2 className="text-[49px] w-[732px] text-primary font-normal">
            HR portal orqali <span className="text-diagramText">CV </span>topshirish ishga kirish imkonini oshiradi                </h2>
          <p className="mt-7 font-normal w-[650px] text-[22px] text-third">
            Bank o'z salohiyatini barqarorlashtirish, aholining ishonchini qozonish, mamlakat bank xizmatlari bozoridagi o'z mavqei va rolini mustahkamlash uchun barcha sa'y-harakatlarini
          </p>

          <div className="gap-[30px] flex mt-[150px]">
            <button className="group relative inline-block overflow-hidden border rounded-xl border-[#116c6f] px-5 py-4 focus:outline-none focus:ring">
              <span className="absolute inset-x-0 bottom-0 h-[2px] bg-btnColor transition-all group-hover:h-full group-active:bg-btnColor"></span>
              <span className="relative text-lg font-medium text-primary transition-colors group-hover:text-white uppercase">
                CV  yuborish
              </span>
            </button>

          </div>
        </div>

      </div>
      <div>

        <div className="pt-[171px] flex justify-between items-center">
          <div>   <h1 className="text-[39px] text-[#798194] font-bold">Qaysi filialda ishlamoqchisiz?</h1>
            <div className="flex gap-[27px] mt-[34px]">
              <button className="group relative inline-block overflow-hidden border rounded-xl border-[#116c6f] px-5 py-4 focus:outline-none focus:ring">
                <span className="absolute inset-x-0 bottom-0 h-[2px] bg-btnColor transition-all group-hover:h-full group-active:bg-btnColor"></span>
                <span className="relative text-lg font-medium text-primary transition-colors group-hover:text-white uppercase">


                  <select id="pet-select">
                    <option className="text-lg text-optionsText" >Viloyatni tanlang</option>
                    <option className="text-lg text-optionsText" > Andijon viloyati</option>
                    <option className="text-lg text-optionsText" > Buxoro viloyati</option>
                    <option className="text-lg text-optionsText" > Fargʻona viloyati</option>
                    <option className="text-lg text-optionsText" > Jizzax viloyati</option>
                    <option className="text-lg text-optionsText" > Xorazm viloyati</option>
                    <option className="text-lg text-optionsText" > Namangan viloyati</option>
                    <option className="text-lg text-optionsText" > Navoiy viloyati</option>
                    <option className="text-lg text-optionsText" > Qashqadaryo viloyati</option>
                    <option className="text-lg text-optionsText" > Samarqand viloyati</option>
                    <option className="text-lg text-optionsText" > Sirdaryo viloyati</option>
                    <option className="text-lg text-optionsText" > Surxondaryo viloyati</option>
                    <option className="text-lg text-optionsText" > Toshkent viloyati</option>

                  </select>


                </span>
              </button>
              <button className="group relative inline-block overflow-hidden border rounded-xl border-[#116c6f] px-5 py-4 focus:outline-none focus:ring">
                <span className="absolute inset-x-0 bottom-0 h-[2px] bg-btnColor transition-all group-hover:h-full group-active:bg-btnColor"></span>
                <span className="relative text-lg font-medium text-primary transition-colors group-hover:text-white uppercase">


                  <select id="pet-select">
                    <option className="text-lg text-optionsText" >Tumanni tanlang</option>
                    <option className="text-lg text-optionsText" > Andijon viloyati</option>
                    <option className="text-lg text-optionsText" > Buxoro viloyati</option>
                    <option className="text-lg text-optionsText" > Fargʻona viloyati</option>

                  </select>


                </span>
              </button>
              <button className="group relative inline-block overflow-hidden border rounded-xl border-[#116c6f] px-5 py-4 focus:outline-none focus:ring">
                <span className="absolute inset-x-0 bottom-0 h-[2px] bg-btnColor transition-all group-hover:h-full group-active:bg-btnColor"></span>
                <span className="relative text-lg font-medium text-primary transition-colors group-hover:text-white uppercase">


                  <select id="pet-select">
                    <option className="text-lg text-optionsText" >Vakansiyani izlash</option>
                    <option className="text-lg text-optionsText" > Andijon viloyati</option>
                    <option className="text-lg text-optionsText" > Buxoro viloyati</option>

                  </select>


                </span>
              </button>
            </div></div>
          <div className="rounded-[14px] customBorder">
            <div className="py-10 px-8 max-w-[530px]">
              <h2 className="text-lg text-optionsText font-bold mb-6">Chirchiq BXM</h2>
              <p className="text-lg text-optionsText font-normal mb-5">Birinchi toifali mutaxassis (Kichik biznes bo’limi)</p>
              <p className="text-lg text-optionsText font-normal mb-3"><span className="font-bold">Talab etiladi:</span> Rus/Ingliz tili, 3+ yil tajriba, Iqtisodiyot yo’nalishida oliy ma’lumot</p>
              <p className="text-lg text-optionsText font-normal mb-6"><span className="font-bold">Maosh:</span> 3.250.000 UZS</p>
              <img src={cvIcon} alt="icon" />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CurriculumVitae
