import Header from "../components/Header"
import Footer from "../components/Footer"
import Slider2 from "../components/Slider2"

const Blog = () => {
  return (
    <>
      <div className="text-not-black">
      <div className="py-7"><Header/></div>
      <div className="mainCont py-8">
        
       <div className="max-w-[1000px] mx-auto">
         <div className="text-center font-bold text-[32px] sm:text-[35px] mb-3">5 Tips for Planning a Long-Distance Move</div>
         <div className="text-[#9297A0] text-center text-[17px]">How do you create compelling presentations that wow your colleagues and impress your managers?</div>
         <div className="flex items-center justify-center flex-wrap whitespace-nowrap gap-3 my-5">
            <button className="rounded-full bg-[#EEFFF8] text-[#34AD82] text-[15px] font-[500] px-3 py-[2px]">Moving Tips</button>
            <button className="rounded-full bg-[#EEFFF8] text-[#34AD82] text-[15px] font-[500] px-3 py-[2px]">Long Distance Move</button>
         </div>
         
         <div className="flex items-center justify-between flex-col sm3:flex-row text-center gap-2 text-[15px] sm:text-[17px] font-medium text-[#9999A1] w-full sm:w-fit mx-auto whitespace-nowrap">
         <div className="mx-auto">By <span className="text-[#34AD82]">Author</span></div>
         <div className="hidden sm3:flex min-w-[4px] min-h-[4px] rounded-full bg-[#E9E8E8]"></div>
         <div className="mx-auto">Published 20 Jan 2023</div>
         <div className="hidden sm3:flex min-w-[4px] min-h-[4px] rounded-full bg-[#E9E8E8]"></div>
         <div className="mx-auto">3 minutes read</div>
         </div>

         <img src="/images/box.png" alt="boxes" className="w-full mt-7" />
         <div className="text-[17px] text-[#5D626B] text-center mt-4">Photo 1.1 Boxes in the Moving Camp </div>

         <div className="text-[#5D626B] text-[17px] leading-[162%] mt-5">The moving process can be a stressful time for many people. From packing boxes to all the tasks on moving day, you’d be hard-pressed to find someone who actually enjoys moving. Perhaps you’ve hired a moving company to help take some of the stress and heavy labour off of your plate. While helpful, this comes with the new stress of having to worry about potential furniture damage. Luckily, we’ve got all the tips and tricks for you to ensure your furniture is properly protected and prepared for moving with this helpful blog. Keep reading to see what you can do to prevent dings and damage to your furniture.<br/><br/>Before you begin, make a list of all the furniture that needs to be moved and whether or not it can be disassembled. Organize your list according to what you can prep for the move early versus what you’ll need right up until moving day (a bookshelf vs a bed). If you’re not planning on taking certain items with you, add them to a separate list to be sold, given away, or recycled.<br/><br/>For the furniture that can’t be taken apart, you want to ensure you can at least get it out of the house! Surely if you brought the piece into the house when you bought it, you can get it out now? Sadly, this is not always the case. Measure your doorways and hallways as well as any items you think might be a tight squeeze, just in case you have to remove a door or find an alternate exit for some larger items.</div>
         <div className="font-bold text-[23px] sm:text-[25px] my-6 sm:my-8">HOW TO PREPARE YOUR FURNITURE FOR MOVING</div>
         <div className="text-[#5D626B] text-[17px] leading-[162%]">Protect your furniture with plastic covers (for mattresses and sofas), plastic wrap and cardboard or moving pads (for wooden furniture) and, if you’re doing it yourself, with other cloth items at your disposal. Taping towels around chair legs both saves the legs from dings and scratches and saves you space from packing a load of linens that could be used to help protect your items. For glass tabletops and mirrors, use bubble wrap after first taping a giant “X” with painter’s tape on the item to prevent shattering if the glass does break. Wrap the glass completely, taking care on the corners, and place it between two sheets of corrugated cardboard.<br/><br/>When moving day comes, load the van strategically, making use of packing blankets for extra cushions. Be aware of what items can and can’t support a lot of weight and stack boxes accordingly. For desks and tables that can’t be disassembled, flip them upside down and stack boxes in and around them, rather than leaving them upright and risking overload. Be sure to wrap your mattress either in fitted sheets or in a plastic mattress cover to protect it from dirt.<br/><br/>Moving your furniture safely is our specialty. If you’re feeling overwhelmed about your upcoming move, we can help! Our professional moving team will help you get your furniture protected and moved into your new home scratch, dent, and damage free. Get your free quote or try out our weight calculator for an estimate of your moving costs. When you’re ready to get started, contact Trans Canada Movers for an easier way to move.</div>
        
        <div className="w-full h-[1px] bg-[#F0F0F0] mt-12 mb-10"></div>

        <div className="text-[18px] text-[#070713] mb-3">Share to</div>
        <div className="flex items-center flex-wrap gap-4">
          <a href="#" className="transition hover:scale-[1.3]"><svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.1667 1.66666H7.66667C6.5616 1.66666 5.50179 2.10564 4.72039 2.88704C3.93899 3.66845 3.5 4.72825 3.5 5.83332V8.33332H1V11.6667H3.5V18.3333H6.83333V11.6667H9.33333L10.1667 8.33332H6.83333V5.83332C6.83333 5.61231 6.92113 5.40035 7.07741 5.24407C7.23369 5.08779 7.44565 4.99999 7.66667 4.99999H10.1667V1.66666Z" stroke="#08AC85" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
          <a href="#" className="transition hover:scale-[1.3]"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.99999 13.3333C10.884 13.3333 11.7319 12.9821 12.357 12.357C12.9821 11.7319 13.3333 10.884 13.3333 9.99999C13.3333 9.11593 12.9821 8.26809 12.357 7.64297C11.7319 7.01785 10.884 6.66666 9.99999 6.66666C9.11593 6.66666 8.26809 7.01785 7.64297 7.64297C7.01785 8.26809 6.66666 9.11593 6.66666 9.99999C6.66666 10.884 7.01785 11.7319 7.64297 12.357C8.26809 12.9821 9.11593 13.3333 9.99999 13.3333Z" stroke="#08AC85" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.5 13.3333V6.66667C2.5 5.5616 2.93899 4.50179 3.72039 3.72039C4.50179 2.93899 5.5616 2.5 6.66667 2.5H13.3333C14.4384 2.5 15.4982 2.93899 16.2796 3.72039C17.061 4.50179 17.5 5.5616 17.5 6.66667V13.3333C17.5 14.4384 17.061 15.4982 16.2796 16.2796C15.4982 17.061 14.4384 17.5 13.3333 17.5H6.66667C5.5616 17.5 4.50179 17.061 3.72039 16.2796C2.93899 15.4982 2.5 14.4384 2.5 13.3333Z" stroke="#08AC85" stroke-width="1.5"/><path d="M14.5833 5.425L14.5917 5.41583" stroke="#08AC85" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
          <a href="#" className="transition hover:scale-[1.3]"><svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23 1.01006C23 1.01006 20.982 2.20206 19.86 2.54006C19.2577 1.84757 18.4573 1.35675 17.567 1.13398C16.6767 0.911216 15.7395 0.967251 14.8821 1.29451C14.0247 1.62177 13.2884 2.20446 12.773 2.96377C12.2575 3.72309 11.9877 4.62239 12 5.54006V6.54006C10.2426 6.58562 8.50127 6.19587 6.93101 5.4055C5.36074 4.61513 4.01032 3.44869 3 2.01006C3 2.01006 -1 11.0101 8 15.0101C5.94053 16.408 3.48716 17.109 1 17.0101C10 22.0101 21 17.0101 21 5.51006C21 5.23206 20.972 4.95406 20.92 4.68006C21.94 3.67406 23 1.01006 23 1.01006Z" stroke="#08AC85" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
          <a href="mailto:name@example.com" className="transition hover:scale-[1.3]"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 9L12 12.5L17 9" stroke="#08AC85" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/><path d="M2 17V7C2 6.46957 2.21071 5.96086 2.58579 5.58579C2.96086 5.21071 3.46957 5 4 5H20C20.5304 5 21.0391 5.21071 21.4142 5.58579C21.7893 5.96086 22 6.46957 22 7V17C22 17.5304 21.7893 18.0391 21.4142 18.4142C21.0391 18.7893 20.5304 19 20 19H4C3.46957 19 2.96086 18.7893 2.58579 18.4142C2.21071 18.0391 2 17.5304 2 17Z" stroke="#08AC85" stroke-width="1.25"/></svg></a>
          <a href="#" className="transition hover:scale-[1.3]"><svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 7.75C18 -1.25 6 -1.25 6 7.75V9.25H4.372C3.789 9.25 3.549 9.999 4.024 10.338L6 11.75C5.667 12.917 4.3 15.45 1.5 16.25C1.833 16.75 2.8 17.75 4 17.75L5 19.25L7.5 18.75C8.333 19.417 10.4 20.75 12 20.75C13.6 20.75 15.667 19.417 16.5 18.75L19 19.25L20 17.75C21.2 17.75 22.167 16.75 22.5 16.25C19.7 15.45 18.333 12.917 18 11.75L19.976 10.338C20.451 9.999 20.211 9.25 19.628 9.25H18V7.75Z" stroke="#08AC85" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
          <a href="#" className="transition hover:scale-[1.3]"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.99995 14.5C4.99995 10 9.46195 6.5 12.5 6.5C15.538 6.5 18 8.154 18 12C18 15.038 16 17 14 17C12 17 11 15 11.5 12M12 10L8.99995 21.5" stroke="#08AC85" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z" stroke="#08AC85" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
          <a href="#" className="transition hover:scale-[1.3]"><svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 1L1 8.5L8 9.5M20 1L17.5 16L8 9.5M20 1L8 9.5M8 9.5V15L11.249 11.723" stroke="#08AC85" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
        </div>

       </div>


       <div className="w-full mt-20">
         <Slider2/>
       </div>



      </div>

      <Footer/>
      </div>

    </>
  )
}

export default Blog