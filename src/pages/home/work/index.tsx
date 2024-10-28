import { FC } from "react"


const Work :FC= () => {
  return (
    <div className='pt-[86px]'>

      <div className='text-center max-w-[940px] mx-auto'>
        <h1 className='text-[58px] text-primary font-normal' >Ishga kirish jarayoni</h1>
        <p className='text-[26px] text-third mt-[42px]'>Do you know what could beat the exciting feeling of having a new computer?
          Make your own. Making your own computer from scratch is not only fun to do
          but cheaper as well.</p>
      </div>

      <div>
        <ul className="flex-wrap relative gap-y-[66px] mt-[74px] grid grid-cols-3 justify-items-center jobInterview
">

          <li className="items-center flex flex-col  max-w-[350px] text-center">

            <h1 className="w-[102px] h-[102px] rounded-[50%] text-center  bg-primary text-[58px]  text-white">1</h1>

            <h1 className="text-[26px] text-btnColor font-semibold mt-7">Birlamchi test sinovilari</h1>
            <p className="text-[23px] text-secondary mt-3">Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Pharetra
              vitae quam integer semper aenean.</p>
          </li>

          <li className="items-center flex flex-col  max-w-[350px] text-center">

            <h1 className="w-[102px] h-[102px] rounded-[50%] text-center  bg-primary text-[58px]  text-white">2</h1>

            <h1 className="text-[26px] text-btnColor font-semibold mt-7 max-w-[250px]">HR departamenti bilan suhbat </h1>
            <p className="text-[23px] text-secondary mt-3">Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Pharetra
              vitae quam integer semper aenean.</p>
          </li>

          <li className="items-center flex flex-col  max-w-[350px] text-center">

            <h1 className="w-[102px] h-[102px] rounded-[50%] text-center  bg-primary text-[58px]  text-white">3</h1>

            <h1 className="text-[26px] text-btnColor font-semibold mt-7 max-w-[250px]">Tegishli departament bilan suhbat</h1>
            <p className="text-[23px] text-secondary mt-3">Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Pharetra
              vitae quam integer semper aenean.</p>
          </li>

          <li className="items-center flex flex-col  max-w-[350px] text-center">

            <h1 className="w-[102px] h-[102px] rounded-[50%] text-center  bg-primary text-[58px]  text-white">6</h1>

            <h1 className="text-[26px] text-btnColor font-semibold mt-7">Ishga marhamat</h1>
            <p className="text-[23px] text-secondary mt-3">Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Pharetra
              vitae quam integer semper aenean.</p>
          </li>

          <li className="items-center flex flex-col  max-w-[350px] text-center">

            <h1 className="w-[102px] h-[102px] rounded-[50%] text-center  bg-primary text-[58px]  text-white">5</h1>

            <h1 className="text-[26px] text-btnColor font-semibold mt-7 max-w-[210px]">Boshqaruv raisi bilan suhbat</h1>
            <p className="text-[23px] text-secondary mt-3">Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Pharetra
              vitae quam integer semper aenean.</p>
          </li>

          <li className="items-center flex flex-col  max-w-[350px] text-center">

            <h1 className="w-[102px] h-[102px] rounded-[50%] text-center  bg-primary text-[58px]  text-white">4</h1>

            <h1 className="text-[26px] text-btnColor font-semibold mt-7 max-w-[280px]">Boshqaruv raisi o’rinbosari bilan suhbat</h1>
            <p className="text-[23px] text-secondary mt-3">Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Pharetra
              vitae quam integer semper aenean.</p>
          </li>

        </ul>
      </div>
    </div>
  )
}

export default Work
