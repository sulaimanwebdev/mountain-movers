import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <div className="mainCont mt-14">
       <div className="max-w-[1000px] mx-auto flex items-start sm:justify-between gap-10 sm:gap-0 flex-col sm:flex-row">
         <div>
          <Link to="/"><img src="/images/logo.svg" alt="logo" /></Link>
          <div className="mt-2">Making Your Move Stress-Free</div>
          <div className="flex items-center gap-3 mt-10">
            <a href="#" className="transition hover:scale-[1.3]"><svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.1667 1.6665H7.66667C6.5616 1.6665 5.50179 2.10549 4.72039 2.88689C3.93899 3.66829 3.5 4.7281 3.5 5.83317V8.33317H1V11.6665H3.5V18.3332H6.83333V11.6665H9.33333L10.1667 8.33317H6.83333V5.83317C6.83333 5.61216 6.92113 5.4002 7.07741 5.24391C7.23369 5.08763 7.44565 4.99984 7.66667 4.99984H10.1667V1.6665Z" stroke="#08AC85" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
            <a href="#" className="transition hover:scale-[1.3]"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.99999 13.3332C10.884 13.3332 11.7319 12.982 12.357 12.3569C12.9821 11.7317 13.3333 10.8839 13.3333 9.99984C13.3333 9.11578 12.9821 8.26794 12.357 7.64281C11.7319 7.01769 10.884 6.6665 9.99999 6.6665C9.11593 6.6665 8.26809 7.01769 7.64297 7.64281C7.01785 8.26794 6.66666 9.11578 6.66666 9.99984C6.66666 10.8839 7.01785 11.7317 7.64297 12.3569C8.26809 12.982 9.11593 13.3332 9.99999 13.3332Z" stroke="#08AC85" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.5 13.3333V6.66667C2.5 5.5616 2.93899 4.50179 3.72039 3.72039C4.50179 2.93899 5.5616 2.5 6.66667 2.5H13.3333C14.4384 2.5 15.4982 2.93899 16.2796 3.72039C17.061 4.50179 17.5 5.5616 17.5 6.66667V13.3333C17.5 14.4384 17.061 15.4982 16.2796 16.2796C15.4982 17.061 14.4384 17.5 13.3333 17.5H6.66667C5.5616 17.5 4.50179 17.061 3.72039 16.2796C2.93899 15.4982 2.5 14.4384 2.5 13.3333Z" stroke="#08AC85" stroke-width="1.5"/><path d="M14.5833 5.42518L14.5917 5.41602" stroke="#08AC85" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
            <a href="#" className="transition hover:scale-[1.3]"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.6667 10.0002L8.75 11.6668V8.3335L11.6667 10.0002Z" fill="#08AC85" stroke="#08AC85" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M1.66666 10.5893V9.41016C1.66666 6.99766 1.66666 5.791 2.42082 5.01516C3.17582 4.2385 4.36416 4.20516 6.73999 4.13766C7.86499 4.106 9.01499 4.0835 9.99999 4.0835C10.9842 4.0835 12.1342 4.106 13.26 4.13766C15.6358 4.20516 16.8242 4.2385 17.5783 5.01516C18.3333 5.791 18.3333 6.9985 18.3333 9.41016V10.5893C18.3333 13.0027 18.3333 14.2085 17.5792 14.9852C16.8242 15.761 15.6367 15.7952 13.26 15.8618C12.135 15.8943 10.985 15.9168 9.99999 15.9168C9.01582 15.9168 7.86582 15.8943 6.73999 15.8618C4.36416 15.7952 3.17582 15.7618 2.42082 14.9852C1.66666 14.2085 1.66666 13.0018 1.66666 10.5902V10.5893Z" stroke="#08AC85" stroke-width="1.5"/></svg></a>
          </div>
         </div>



         <div>
          <div className="text-[18px] font-[700] mb-2">Subscribe to our <br/> newsletter</div>

          <div className="flex items-center w-fit h-[50px]">
            <input type="email" placeholder="Email address" className="placeholder-[#A9A9B4] pr-1 bg-white h-full outline-none border-b border-not-black border-opacity-[0.12] w-full" />
            <button className="flex items-center justify-center rounded-tr-lg rounded-br-lg bg-main transition hover:bg-[#1f7a5a] w-[40px] h-full"><svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.428802 9.13333L3.66309 5.3125L0.428802 1.49167L1.42695 0.3125L5.65939 5.3125L1.42695 10.3125L0.428802 9.13333Z" fill="white"/></svg></button>
          </div>
            
         </div>
          
       </div>

       <div className="text-center py-4 mt-10">© 2023 Mountain Movers. All Rights Reserved.</div>   
      </div>
    </>
  )
}

export default Footer