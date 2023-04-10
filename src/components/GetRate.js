
const GetRate = () => {
  return (
    <>
    <div>
                 <div className="mb-2 font-[500]">Name</div>
                 <input type="text" placeholder="Enter your name" className="boxShadow w-full rounded-lg placeholder-[#A9A9B4] bg-white px-2.5 py-2 outline-none border border-not-black border-opacity-[0.12]" />
              </div>

              <div className="mt-5">
                 <div className="mb-2 font-[500]">Move from</div>
                 <select style={{backgroundImage: "url(/images/arrow.svg)"}} className="cursor-pointer text-[#A9A9B4] boxShadow w-full rounded-lg bg-white px-2.5 py-2 outline-none border border-not-black border-opacity-[0.12]">
                  <option>Choose location</option>
                  <option>New York</option>
                  <option>Ohio</option>
                 </select>
              </div>

              <div className="mt-5">
                 <div className="mb-2 font-[500]">Email</div>
                 <input type="email" placeholder="Enter your email" className="boxShadow w-full rounded-lg placeholder-[#A9A9B4] bg-white px-2.5 py-2 outline-none border border-not-black border-opacity-[0.12]" />
              </div>

              <div className="mt-5">
                 <div className="mb-2 font-[500]">Move to</div>
                 <select style={{backgroundImage: "url(/images/arrow.svg)"}} className="cursor-pointer text-[#A9A9B4] boxShadow w-full rounded-lg bg-white px-2.5 py-2 outline-none border border-not-black border-opacity-[0.12]">
                  <option>Choose location</option>
                  <option>New York</option>
                  <option>Ohio</option>
                 </select>
              </div>


              <div className="mt-5">
                 <div className="mb-2 font-[500]">Phone</div>
                 <input type="text" placeholder="Enter your phone number" className="boxShadow w-full rounded-lg placeholder-[#A9A9B4] bg-white px-2.5 py-2 outline-none border border-not-black border-opacity-[0.12]" />
              </div>


              <div className="mt-5">
                 <div className="mb-2 font-[500]">Move to</div>
                 <select style={{backgroundImage: "url(/images/arrow.svg)"}} className="cursor-pointer text-[#A9A9B4] boxShadow w-full rounded-lg bg-white px-2.5 py-2 outline-none border border-not-black border-opacity-[0.12]">
                  <option>Choose type</option>
                  <option>Big Products</option>
                  <option>Small Products</option>
                 </select>
              </div>


             <button className="bg-[#FF8A2C] transition hover:bg-[#f27d1f] w-full rounded-lg py-3 flex items-center justify-center gap-3 text-white mt-5">Get rate <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 7.5H13.5M13.5 7.5L7.5 1.5M13.5 7.5L7.5 13.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>

    </>
  )
}

export default GetRate