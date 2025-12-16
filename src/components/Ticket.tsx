

export default function Ticket(){
    return (
        <div className="lg:w-full  px-4 flex flex-col justify-items-start items-center z-50 container-type-inline-size">
            <img className="h-5" src="/logo-full.svg" alt="coding_conf_logo" />
            <h1 className="text-zinc-50  text-[clamp(1rem,7cqi,3rem)] md:max-w-[40%] font-bold text-center font-inconsolata">Congrats,
                <span className="bg-linear-to-r from-[#ec7563] to-[#f9efe9] bg-clip-text text-transparent">Gela Gnolidze </span> 
                 Your ticket is ready.
            </h1>
            <p className="text-[#a6a4b9] text-[clamp(0.1rem,4.5cqi,1.4rem)]  text-center mx-2 my-10">We've emailed your ticket to <span className="text-[#ec7563]">remix@gmail.com </span>and will send udates in the run up to the event.
            </p>
            <div className="aspect-15/7  w-[clamp(300px,30cqi,500px)] bg-[url('/pattern-ticket.svg')] bg-center bg-cover my-9 flex justify-between items-center container-type-inline-size">
                <div className="w-[60%] h-full flex flex-col justify-between items-center container-type-inline-size p-5">
                    <div className="w-full flex flex-col justify-center items-end">
                        <img className="w-full" src="/logo-full.svg" alt="" />
                        <p className="text-[#a6a4b9] text-[clamp(0.5rem,1cqi,3rem)]">Jan 31, 2025 / Austin, TX</p>
                    </div>
                    <div className="w-full h-[45%] container-type-inline-size  flex items-center">
                        <img className="w-[clamp(20px,10cqi,80px)] rounded-[clamp(5px,0.5cqi,20px)]" src="/image-avatar.jpg" alt="avatar" />
                        <div className="border-2 border-amber-600 w-full h-full  container-type-inline-size">
                            
                        </div>
                    </div>
                   
                </div>
                <div className="rotate-90 text-[#a6a4b9] text-[clamp(1rem,2cqi,5rem)] text-center ">#01609</div>
            </div>           
        </div>
    )
}    