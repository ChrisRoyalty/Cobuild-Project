import "../styles/Works.css";
function Works() {
   return (
      <div className="w-[100%] h-[150vh] flex items-center justify-around flex-col bg-[#f8f8f8]">
         <section className="h-[30vh]">
            <h1 className="text-[#252425]  sm:text-[2.5vw] text-[4vw] text-center">
               Featured work
            </h1>
            <p className="text-[#b7c3d2] text-center">
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
               ducimus <br /> provident sajdjlkaj skjhn in placeat perspiciati
            </p>
         </section>
         <section className="h-[105vh] w-[100%] flex items-center justify-around flex-col ">
            <i>
               <span className="text-[#f4b30d] text-center">All /</span>{" "}
               <span className="text-[#b7c3d2] text-center">
                  {" "}
                  Building / construction / planning
               </span>{" "}
            </i>
            <div className="sm:h-[100vh] h-[80vh] overflow-y-auto sm:overflow-y-hidden ">
               <div className="  flex items-center justify-between w-[85vw] sm:h-[50vh] flex-col sm:flex-row">
                  <div className="sm:w-[26.5vw] w-[90vw] sm:h-[45vh] h-[60vh] imgDiv1"></div>
                  <div className="sm:w-[26.5vw] w-[90vw] sm:h-[45vh] h-[60vh] imgDiv2"></div>
                  <div className="sm:w-[26.5vw] w-[90vw] sm:h-[45vh] h-[60vh] imgDiv3"></div>
               </div>
               <div className=" flex items-center justify-between w-[85vw] sm:h-[50vh] flex-col sm:flex-row">
                  <div className="sm:w-[26.5vw] w-[90vw] sm:h-[45vh] h-[60vh] imgDiv4"></div>
                  <div className="sm:w-[26.5vw] w-[90vw] sm:h-[45vh] h-[60vh] imgDiv5"></div>
                  <div className="sm:w-[26.5vw] w-[90vw] sm:h-[45vh] h-[60vh] imgDiv6"></div>
               </div>
            </div>
         </section>
      </div>
   );
}

export default Works;
