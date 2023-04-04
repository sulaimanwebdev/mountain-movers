import Header from "../components/Header"

const Home = () => {
  return (
    <>
      <div>

      <div className="relative">
         <div className="relative z-50">
         <div className="py-4"><Header/></div>

         <div className="mainCont w-full flex items-start justify-end">

           <div className="boxShadow bg-white rounded-lg p-4 my-8 w-[500px]">

              <div>
                 <div className="mb-2">Name</div>
                 <input type="text" placeholder="Enter your name" className="boxShadow w-full rounded-lg placeholder-[#A9A9B4] bg-white px-2.5 py-2 outline-none border border-not-black border-opacity-[0.12]" />
              </div>

              <div className="mt-5">
                 <div className="mb-2">Move from</div>
                 <select style={{backgroundImage: "url(/images/arrow.svg)"}} className="cursor-pointer text-[#A9A9B4] boxShadow w-full rounded-lg bg-white px-2.5 py-2 outline-none border border-not-black border-opacity-[0.12]">
                  <option>Choose location</option>
                  <option>New York</option>
                  <option>Ohio</option>
                 </select>
              </div>

              <div className="mt-5">
                 <div className="mb-2">Email</div>
                 <input type="email" placeholder="Enter your email" className="boxShadow w-full rounded-lg placeholder-[#A9A9B4] bg-white px-2.5 py-2 outline-none border border-not-black border-opacity-[0.12]" />
              </div>

              <div className="mt-5">
                 <div className="mb-2">Move to</div>
                 <select style={{backgroundImage: "url(/images/arrow.svg)"}} className="cursor-pointer text-[#A9A9B4] boxShadow w-full rounded-lg bg-white px-2.5 py-2 outline-none border border-not-black border-opacity-[0.12]">
                  <option>Choose location</option>
                  <option>New York</option>
                  <option>Ohio</option>
                 </select>
              </div>


              <div className="mt-5">
                 <div className="mb-2">Phone</div>
                 <input type="text" placeholder="Enter your phone number" className="boxShadow w-full rounded-lg placeholder-[#A9A9B4] bg-white px-2.5 py-2 outline-none border border-not-black border-opacity-[0.12]" />
              </div>


              <div className="mt-5">
                 <div className="mb-2">Move to</div>
                 <select style={{backgroundImage: "url(/images/arrow.svg)"}} className="cursor-pointer text-[#A9A9B4] boxShadow w-full rounded-lg bg-white px-2.5 py-2 outline-none border border-not-black border-opacity-[0.12]">
                  <option>Choose type</option>
                  <option>Big Products</option>
                  <option>Small Products</option>
                 </select>
              </div>



           </div>


         </div>
         </div>

         <img src="/images/hero.svg" alt="hero" className="absolute top-0 left-0 w-full h-full object-cover" />
      </div>

      
      </div>
    </>
  )
}

export default Home