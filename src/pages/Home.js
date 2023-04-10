import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { Link } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Slider from "../components/Slider"
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import CountUp, { useCountUp } from 'react-countup';
import Slider3 from "../components/Slider3";
import GetRate from '../components/GetRate'

const Home = () => {

   let [isOpen, setIsOpen] = useState(false)

   function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }

   useCountUp({
      ref: 'counter',
      enableScrollSpy: true,
    });


    

  return (
    <>
      <div className="text-not-black">

      <div id="home" className="relative">
         <div className="relative z-50">
         <div className="py-7"><Header/></div>
         <img src="/images/hero2.svg" alt="hero" className="flex sm:hidden w-full" />

         <div className="mainCont relative w-full flex items-start sm:justify-end bg-main sm:bg-transparent">

           <div className="boxShadow relative bg-white rounded-lg p-4 -mt-12 sm:mt-8 sm:mb-12 w-full sm:w-[500px] z-50">

              <GetRate/>
 
           </div>


         </div>
         </div>

         <img src="/images/hero.svg" alt="hero" className="hidden sm:flex absolute top-0 left-0 w-full h-full object-cover" />
      </div>


      <div id="services" className="w-full bg-main py-10 lg3:py-20">
         <div className="mainCont flex flex-col-reverse lg3:grid grid-cols-2 gap-10 lg3:gap-12">
         <Fade left>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
               <div className="bg-white rounded-lg p-7">
                   <img src="/images/icon1.svg" alt="icon" />
                   <div className="font-semibold text-[20px] mt-5 mb-2">Residential Moving</div>
                   <div className="text-[#1A1A1A] text-opacity-50">Designed to make your move to a new home as smooth and stress-free.</div>
               </div>

               <div className="bg-white rounded-lg p-7">
                   <img src="/images/icon2.svg" alt="icon" />
                   <div className="font-semibold text-[20px] mt-5 mb-2">Commercial Moving</div>
                   <div className="text-[#1A1A1A] text-opacity-50">Designed to help businesses of all sizes and industries relocate their offices.</div>
               </div>

               <div className="bg-white rounded-lg p-7">
                   <img src="/images/icon3.svg" alt="icon" />
                   <div className="font-semibold text-[20px] mt-5 mb-2">Junk Removal</div>
                   <div className="text-[#1A1A1A] text-opacity-50">We help you get rid of unwanted items in a quick and hassle-free manner.</div>
               </div>


               <div className="bg-white rounded-lg p-7">
                   <img src="/images/icon4.svg" alt="icon" />
                   <div className="font-semibold text-[20px] mt-5 mb-2">Packing/Unpacking</div>
                   <div className="text-[#1A1A1A] text-opacity-50">Make your move stress-free by taking care of the packing and unpacking.</div>
               </div>

          </div>
          </Fade>


          <Fade right>
          <div className="flex justify-center flex-col text-white mt-3 lg3:mt-0">
              <div className="text-[#F4FAF4] uppercase text-[17px]">Our Services</div>
              <div className="text-[35px] sm:text-[40px] font-[600] leading-[45px] sm:leading-[56px] mt-3">Your move, our responsibility. We've got you covered inside and out.</div>
              <div className="text-[#F6FAFF] text-[18px] leading-[30px] mt-3">We've been in the business for 5 years and have found that our customers love the services featured on the right side of our website the most.</div>
             <button onClick={openModal} className="bg-[#FF8A2C] transition hover:bg-[#f27d1f] w-fit rounded-lg py-3 flex items-center justify-center gap-3 text-white px-6 mt-8 lg3:mt-7">Choose a Package <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 7.5H13.5M13.5 7.5L7.5 1.5M13.5 7.5L7.5 13.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
          </div>
          </Fade>

         </div>
      </div>



     <div id="about" className="md:bg-[#F9FAFA] w-full py-10">
      <div className="mainCont">
        <div className="max-w-[1000px] mx-auto flex items-start md:items-center md:justify-between flex-col-reverse md:flex-row gap-5">
        <Fade left>
        <div className="max-w-[600px]">
            <div className="text-[35px] font-[700]">About us</div>
            <div className="text-[18px] opacity-[0.5] mt-3">We are a full-service moving company dedicated to providing exceptional service to our customers. Our team are professionals that trained to handle all aspects of your move, from packing and loading to transportation and unloading.</div>
            <button className="flex items-center gap-2 text-[#1C7B5A] mt-4 group">Learn more <svg width="8" height="12" className="transition group-hover:translate-x-1" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L1 9" stroke="#1C7B5A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
         </div>
         </Fade>
         <Fade right>
         <div className="flex items-center justify-center md:items-start md:justify-start w-full md:w-auto">
            <img src="/images/about.svg" alt="about" className="w-[200px] md:w-auto md:min-w-[250px] md:max-w-[250px]" />
         </div>
         </Fade>
        </div>
      </div>
     </div>



      <div id="values" className="mainCont bg-[#F9FAFA] md:bg-transparent py-10">
           <div className="text-center mb-10 md:mb-20">
            <div className="text-[17px] text-[#34AD82] uppercase font-[700]">Our Values</div>
            <div className="text-[35px] font-[600] mt-2">Your Satisfaction is <span className="text-[#34AD82]">Our Priority</span></div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-5 max-w-[1000px] mx-auto bg-white md:bg-transparent rounded-xl md:rounded-none px-4 md-px-0 py-8 md-py-0">
              <div>
                  <div className="flex items-start gap-7 border-solid border-b border-[#E9ECF2] pb-4">
                   <Flip left>
                   <img src="/images/icon5.svg" alt="icon" />
                  </Flip>
                     <div>
                        <div className="text-[22px] font-semibold">Security</div>
                        <div className="text-[17px] opacity-50">We pay attention to every detail to ensure a safe move.</div>
                     </div>
                  </div>


                  <div className="flex items-start gap-7 border-solid border-b border-[#E9ECF2] mt-7 pb-4">
                   <Flip left>
                        
                        <img src="/images/icon6.svg" alt="icon" />
                        </Flip>
                     <div>
                        <div className="text-[22px] font-semibold">Skills</div>
                        <div className="text-[17px] opacity-50">We have the experience in loading and moving packages using a simple and effective strategy.</div>
                     </div>
                  </div>


                  <div className="flex items-start gap-7 border-solid border-b border-[#E9ECF2] mt-7 pb-4">
                   <Flip left>
                       
                        <img src="/images/icon7.svg" alt="icon" />
                        </Flip>
                     <div>
                        <div className="text-[22px] font-semibold">Positivity</div>
                        <div className="text-[17px] opacity-50">We value having a great relationship with our customers.</div>
                     </div>
                  </div>


                  <div className="flex items-start gap-7 border-solid border-b border-[#E9ECF2] mt-7 pb-4">
                   <Flip left>
                        
                        <img src="/images/icon8.svg" alt="icon" />
                        </Flip>
                     <div>
                        <div className="text-[22px] font-semibold">Punctual</div>
                        <div className="text-[17px] opacity-50">We make sure to value yours and ours by managing it efficiently.</div>
                     </div>
                  </div>

              </div>
              <Fade right>
              <div className="flex justify-center md:justify-end">
               <img src="/images/values.svg" alt="values" />
              </div>
              </Fade>
           </div>
      </div>






      <div className="mainCont py-10 mt-10">
          <div className="text-center mb-10">
            <div className="text-[35px] font-[600] mt-2">Trusted by <span className="text-[#34AD82]">50+</span> Customers</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[1000px] mx-auto">

             <div className="rounded-lg border-solid border border-[#F5F6F6] p-5">
                <div className="text-[35px] font-semibold mb-2"><CountUp end={25000} enableScrollSpy />+</div>
                <div className="text-[18px] opacity-50">Join our community of over 25,000+ satisfied customers.</div>
             </div>

             <div className="rounded-lg border-solid border border-[#F5F6F6] p-5">
                <div className="text-[35px] font-semibold mb-2"><CountUp end={150} enableScrollSpy /></div>
                <div className="text-[18px] opacity-50">We are one of the top 150 highly reviewed moving companies.</div>
             </div>

             <div className="rounded-lg border-solid border border-[#F5F6F6] p-5">
                <div className="text-[35px] font-semibold mb-2"><CountUp end={5} enableScrollSpy />.0</div>
                <div className="text-[18px] opacity-50">Our commitment to excellence has earned us a perfect 5.0 Google rating.</div>
             </div>

          </div>

      </div>


      <div className="mainCont py-10">
         <div className="relative max-w-[1000px] mx-auto overflow-hidden">
         <Fade bottom>
          <Slider/>
          </Fade>
         </div>
      </div>



      <div className="mainCont py-10 lg5:py-20">
      <Fade bottom>
         <div className="max-w-[1000px] grid grid-cols-1 lg5:grid-cols-2 gap-5 mx-auto">
          
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
             <a href="#contact" className="flex items-start justify-between flex-col rounded-xl h-full bg-[#F7F7F8] transition hover:scale-95 p-6">
                 <div className="opacity-50 mb-10 sm:mb-0">Get to know the experts behind our exceptional service by contacting us.</div>
                 <div className="flex items-end justify-between gap-3 text-[24px] font-[700] w-fit text-left leading-[35px]">Contact our team <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 17L17 7" stroke="#070713" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 7H17V17" stroke="#070713" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
             </a>

             <div className="grid grid-row-2 gap-5">
                <Link to="/blog" className="flex items-start justify-between flex-col rounded-xl h-full bg-[#EBFFF8] transition hover:scale-95 p-6">
                 <div className="opacity-50 mb-10">Stay up-to-date with the latest news and insights from us.</div>
                 <div className="flex items-end justify-between gap-3 text-[24px] font-[700] w-fit text-left leading-[35px]">Read our blog <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 17L17 7" stroke="#070713" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 7H17V17" stroke="#070713" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
                </Link>

                <a href="#contact" className="flex items-start justify-between flex-col rounded-xl h-full bg-[#FCF1ED] transition hover:scale-95 p-6">
                 <div className="opacity-50 mb-10">Discover how we plan and execute each move with a commitment to excellence.</div>
                 <div className="flex items-end justify-between gap-3 text-[24px] font-[700] w-fit text-left leading-[35px]">See how it works <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 17L17 7" stroke="#070713" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 7H17V17" stroke="#070713" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
                </a>

             </div>
           </div>


           <div className="relative group flex items-start justify-between flex-col rounded-xl h-[300px] lg5:h-full p-6 overflow-hidden">
             <div className="relative z-20 flex items-start justify-between flex-col h-full">
                <div>
                <div className="text-[#FF8A2C]">MOVING TIPS</div>
                <div className="text-white text-[30px] sm:text-[35px] font-[700] leading-[44px] mt-3">5 Tips for Planning a Long-Distance Move</div>
                </div>

             <button className="bg-[#FF8A2C] transition hover:bg-[#f27d1f] w-fit rounded-lg py-3 flex items-center justify-center gap-3 text-white px-6 mt-10">Read more <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 7.5H13.5M13.5 7.5L7.5 1.5M13.5 7.5L7.5 13.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
                
             </div>
 
            <img src="/images/man.png" alt="man" className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-110 transition" />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>
           </div>
         </div>

         </Fade>
      </div>





      <div id="contact" className="md:bg-[#F9FAFA] w-full py-10">
      <div className="mainCont">
         <div className="max-w-[1000px] mx-auto flex items-start md:items-center md:justify-between flex-col-reverse md:flex-row gap-10">
         <Fade left>
         <div className="md:max-w-[500px]">
            <div className="text-[35px] font-[700]">Contact us</div>
            <div className="text-[18px] opacity-[0.5] mt-3">We are always here to answer any questions you may have or to provide you with more information about our services.</div>
            
            <div className="mt-7">
            <div>
              <div className="mb-2 font-[500]">Name</div>
              <input type="text" placeholder="Enter your name" className="boxShadow w-full rounded-lg placeholder-[#A9A9B4] bg-white px-2.5 py-2 outline-none border border-not-black border-opacity-[0.12]" />
            </div>

            <div className="mt-5">
              <div className="mb-2 font-[500]">Email</div>
              <input type="email" placeholder="Enter your email" className="boxShadow w-full rounded-lg placeholder-[#A9A9B4] bg-white px-2.5 py-2 outline-none border border-not-black border-opacity-[0.12]" />
            </div>


            <div className="mt-5">
              <div className="mb-2 font-[500]">Write a message</div>
              <textarea placeholder="Enter your message" className="boxShadow resize-none h-[150px] w-full rounded-lg placeholder-[#A9A9B4] bg-white px-2.5 py-2 outline-none border border-not-black border-opacity-[0.12]"></textarea>
            </div>

            <button className="bg-main transition hover:bg-[#1f7a5a] px-5 py-3 rounded-lg text-white flex items-center gap-3 w-fit mt-3">Send message</button>

            </div>

         </div>
         </Fade>
         <Fade right>
            <img src="/images/contact.svg" alt="contact" className="hidden md:flex w-[250px] md:w-auto md:min-w-[300px] md:max-w-[300px] mx-auto md:mx-0" />
            <img src="/images/contact2.svg" alt="contact" className="flex md:hidden w-[250px] md:w-auto md:min-w-[300px] md:max-w-[300px] mx-auto md:mx-0" />
            </Fade>
         </div>
      </div>
     </div>






     <div className="mainCont py-10">
       <div className="text-center mb-10">
         <div className="text-[17px] text-[#34AD82] uppercase font-[700]">Our PARTNERS</div>
         <div className="text-[35px] font-[600] mt-2">Learn About <span className="text-[#34AD82]">our Partners</span></div>
       </div>
       <Fade bottom>

       <div className="hidden md:flex items-center justify-center flex-wrap gap-12">
          <img src="/images/partner1.svg" alt="partner logo" />
          <img src="/images/partner2.svg" alt="partner logo" />
          <img src="/images/partner3.svg" alt="partner logo" />
          <img src="/images/partner5.svg" alt="partner logo" />
       </div>

       <div className="flex md:hidden">
       <Slider3/>
       </div>

       </Fade>

      </div>
      
        <Footer/>
      
      </div>




   {/* Popup */}

   <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-main bg-opacity-80" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-4 text-left align-middle shadow-xl transition-all">
                  
                 <div className="flex items-center justify-end">
                  <button onClick={closeModal}><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#32AB80" className="bi bi-x" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg></button>
                 </div>                  
                  
                  <GetRate/>
               
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default Home