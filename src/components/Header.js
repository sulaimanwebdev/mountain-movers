import { useState } from "react"
import { Link } from "react-router-dom"

const Header = () => {

   const [menu, setmenu] = useState('translate-x-full')
  return (
    <>
    <div className="mainCont flex items-center justify-between gap-3 sm2:gap-0">
      <div className="flex items-center gap-12">
         <Link to="/"><img src="/images/logo.svg" alt="logo" className="w-[150px] sm2:w-auto"/></Link>
         <div className={`lg2:translate-x-0 ${menu} transition flex items-start lg2:items-center p-4 pt-12 lg2:pt-0 flex-col border-4 border-solid border-main lg2:flex-row gap-6 fixed top-0 left-0 w-full h-screen z-[60] bg-white lg2:bg-transparent lg2:relative lg2:top-auto lg2:left-auto lg2:h-auto lg2:border-none lg2:w-auto lg2:p-0 max-h-screen overflow-y-auto`}>
            <a href="#">Home</a>
            <a href="#">Our Services</a>
            <a href="#">About Us</a>
            <a href="#">Our Values</a>
            <a href="#">Blog</a>
            <button onClick={()=> {setmenu('translate-x-full')}} className="flex lg2:hidden absolute top-3 right-3"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#08AC85" className="bi bi-x" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg></button>
         
          <div className="flex lg2:hidden items-center gap-3">
            <a href="#"><svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.1667 1.6665H7.66667C6.5616 1.6665 5.50179 2.10549 4.72039 2.88689C3.93899 3.66829 3.5 4.7281 3.5 5.83317V8.33317H1V11.6665H3.5V18.3332H6.83333V11.6665H9.33333L10.1667 8.33317H6.83333V5.83317C6.83333 5.61216 6.92113 5.4002 7.07741 5.24391C7.23369 5.08763 7.44565 4.99984 7.66667 4.99984H10.1667V1.6665Z" stroke="#08AC85" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
            <a href="#"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.99999 13.3332C10.884 13.3332 11.7319 12.982 12.357 12.3569C12.9821 11.7317 13.3333 10.8839 13.3333 9.99984C13.3333 9.11578 12.9821 8.26794 12.357 7.64281C11.7319 7.01769 10.884 6.6665 9.99999 6.6665C9.11593 6.6665 8.26809 7.01769 7.64297 7.64281C7.01785 8.26794 6.66666 9.11578 6.66666 9.99984C6.66666 10.8839 7.01785 11.7317 7.64297 12.3569C8.26809 12.982 9.11593 13.3332 9.99999 13.3332Z" stroke="#08AC85" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.5 13.3333V6.66667C2.5 5.5616 2.93899 4.50179 3.72039 3.72039C4.50179 2.93899 5.5616 2.5 6.66667 2.5H13.3333C14.4384 2.5 15.4982 2.93899 16.2796 3.72039C17.061 4.50179 17.5 5.5616 17.5 6.66667V13.3333C17.5 14.4384 17.061 15.4982 16.2796 16.2796C15.4982 17.061 14.4384 17.5 13.3333 17.5H6.66667C5.5616 17.5 4.50179 17.061 3.72039 16.2796C2.93899 15.4982 2.5 14.4384 2.5 13.3333Z" stroke="#08AC85" stroke-width="1.5"/><path d="M14.5833 5.42518L14.5917 5.41602" stroke="#08AC85" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
            <a href="#"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.6667 10.0002L8.75 11.6668V8.3335L11.6667 10.0002Z" fill="#08AC85" stroke="#08AC85" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M1.66666 10.5893V9.41016C1.66666 6.99766 1.66666 5.791 2.42082 5.01516C3.17582 4.2385 4.36416 4.20516 6.73999 4.13766C7.86499 4.106 9.01499 4.0835 9.99999 4.0835C10.9842 4.0835 12.1342 4.106 13.26 4.13766C15.6358 4.20516 16.8242 4.2385 17.5783 5.01516C18.3333 5.791 18.3333 6.9985 18.3333 9.41016V10.5893C18.3333 13.0027 18.3333 14.2085 17.5792 14.9852C16.8242 15.761 15.6367 15.7952 13.26 15.8618C12.135 15.8943 10.985 15.9168 9.99999 15.9168C9.01582 15.9168 7.86582 15.8943 6.73999 15.8618C4.36416 15.7952 3.17582 15.7618 2.42082 14.9852C1.66666 14.2085 1.66666 13.0018 1.66666 10.5902V10.5893Z" stroke="#08AC85" stroke-width="1.5"/></svg></a>
          </div>

         </div>
         </div>

         <div className="hidden lg2:flex items-center gap-10">
            <div className="flex items-center gap-4">
                <a href="#"><svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.1667 1.66666H7.66667C6.5616 1.66666 5.50179 2.10564 4.72039 2.88704C3.93899 3.66845 3.5 4.72825 3.5 5.83332V8.33332H1V11.6667H3.5V18.3333H6.83333V11.6667H9.33333L10.1667 8.33332H6.83333V5.83332C6.83333 5.61231 6.92113 5.40035 7.07741 5.24407C7.23369 5.08779 7.44565 4.99999 7.66667 4.99999H10.1667V1.66666Z" stroke="#08AC85" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
                <a href="#"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.99999 13.3333C10.884 13.3333 11.7319 12.9821 12.357 12.357C12.9821 11.7319 13.3333 10.884 13.3333 9.99999C13.3333 9.11593 12.9821 8.26809 12.357 7.64297C11.7319 7.01785 10.884 6.66666 9.99999 6.66666C9.11593 6.66666 8.26809 7.01785 7.64297 7.64297C7.01785 8.26809 6.66666 9.11593 6.66666 9.99999C6.66666 10.884 7.01785 11.7319 7.64297 12.357C8.26809 12.9821 9.11593 13.3333 9.99999 13.3333Z" stroke="#08AC85" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.5 13.3333V6.66667C2.5 5.5616 2.93899 4.50179 3.72039 3.72039C4.50179 2.93899 5.5616 2.5 6.66667 2.5H13.3333C14.4384 2.5 15.4982 2.93899 16.2796 3.72039C17.061 4.50179 17.5 5.5616 17.5 6.66667V13.3333C17.5 14.4384 17.061 15.4982 16.2796 16.2796C15.4982 17.061 14.4384 17.5 13.3333 17.5H6.66667C5.5616 17.5 4.50179 17.061 3.72039 16.2796C2.93899 15.4982 2.5 14.4384 2.5 13.3333Z" stroke="#08AC85" stroke-width="1.5"/><path d="M14.5833 5.425L14.5917 5.41583" stroke="#08AC85" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
                <a href="#"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.6667 10L8.75 11.6667V8.33334L11.6667 10Z" fill="#08AC85" stroke="#08AC85" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M1.66666 10.5892V9.41001C1.66666 6.99751 1.66666 5.79084 2.42082 5.01501C3.17582 4.23834 4.36416 4.20501 6.73999 4.13751C7.86499 4.10584 9.01499 4.08334 9.99999 4.08334C10.9842 4.08334 12.1342 4.10584 13.26 4.13751C15.6358 4.20501 16.8242 4.23834 17.5783 5.01501C18.3333 5.79084 18.3333 6.99834 18.3333 9.41001V10.5892C18.3333 13.0025 18.3333 14.2083 17.5792 14.985C16.8242 15.7608 15.6367 15.795 13.26 15.8617C12.135 15.8942 10.985 15.9167 9.99999 15.9167C9.01582 15.9167 7.86582 15.8942 6.73999 15.8617C4.36416 15.795 3.17582 15.7617 2.42082 14.985C1.66666 14.2083 1.66666 13.0017 1.66666 10.59V10.5892Z" stroke="#08AC85" stroke-width="1.5"/></svg></a>
            </div>
            <a href="tel:+92123123" className="bg-main px-4 py-2 rounded-lg text-white flex items-center gap-3">
               <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0787 9.80134L9.33334 10.3333C7.47867 9.40268 6.33334 8.33334 5.66667 6.66668L6.18001 3.91334L5.21001 1.33334H2.70934C1.95734 1.33334 1.36534 1.95468 1.47801 2.69801C1.75801 4.55334 2.58467 7.91801 5.00001 10.3333C7.53667 12.87 11.1907 13.9707 13.2013 14.4087C13.978 14.5773 14.6667 13.972 14.6667 13.1767V10.7873L12.0787 9.80134Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
               (514) 984-1522
            </a>
         </div>

         <div className="flex lg2:hidden items-center gap-6">
            <button className="flex items-center gap-2 bg-white rounded-xl border-2 border-main border-solid text-main flex-row-reverse py-2 px-3 whitespace-nowrap">Call us <svg width="18" height="18" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.059 7.351L7 7.75C5.609 7.052 4.75 6.25 4.25 5L4.635 2.935L3.9075 1H2.032C1.468 1 1.024 1.466 1.1085 2.0235C1.3185 3.415 1.9385 5.9385 3.75 7.75C5.6525 9.6525 8.393 10.478 9.901 10.8065C10.4835 10.933 11 10.479 11 9.8825V8.0905L9.059 7.351Z" stroke="#08AC85" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
            <button onClick={()=> {setmenu('translate-x-0')}}><svg width="26" height="22" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1H19M1 8H19M1 15H19" stroke="#08AC85" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
         </div>
    </div>
    </>
  )
}

export default Header