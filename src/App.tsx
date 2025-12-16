import Form from "./components/Form"
import Ticket from "./components/Ticket"


function App() {


  return (
    <div className="
    overflow-hidden
    w-screen h-screen flex justify-center items-center
    lg:bg-[url('/background-desktop.png')] 
    md:bg-[url('/background-tablet.png')]
    bg-[url('/background-mobile.png')]
    bg-cover bg-center 
    relative
    "
    >
      <Ticket />
      <img className="absolute top-0 left-0 w-full h-full z-0" src="/pattern-lines.svg" alt="lines" />    
      <img className="absolute top-2/4 right-2/6  z-10" src="/pattern-circle.svg" alt="lines" />    
      <picture className="absolute bottom-0 left-0 z-20">
        <source media="(min-width:1024px)" srcSet="/pattern-squiggly-line-bottom-desktop.svg" />
        <img src="/pattern-squiggly-line-bottom-mobile-tablet.svg" alt="squiggly-lines" />
      </picture>
      <img className="absolute top-0 right-0 w-[40%]" src="/pattern-squiggly-line-top.svg" alt="lines-top" />
    </div>
  )
}

export default App
 