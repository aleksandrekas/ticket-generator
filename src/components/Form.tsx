


export default function Form(){
    return(
        <div className="lg:w-[40%]  px-4 flex flex-col justify-center items-center z-50 container-type-inline-size">
            <img className="h-10" src="/logo-full.svg" alt="coding_conf_logo" />
            <h1 className="text-zinc-50  text-[1.5rem] text-[1rem, clamp(5cqi,3rem)]  font-bold text-center font-inconsolata">Your Journey to Coding Conf 2025 Starts Here!</h1>
            <p className="text-[#a6a4b9] text-[clamp(0.1rem,4.5cqi,1.4rem)] text-center mx-2">Secure your spot at next year's biggest coding conference.</p>
            <form className="w-full max-w-[400px] " >
                <div className="w-full aspect-5/2  flex flex-col justify-center items-start ">
                    <p className="text-[#a6a4b9]">Upload Avatar</p>
                    <label className="w-full h-full my-1.5" htmlFor="uploadInput">
                        <input id="uploadInput" type="file" accept="image/*" hidden />
                        <div className="w-full h-full bg-[rgba(0,0,0,0.2)] rounded-[20px] border-2 border-dashed border-[#a6a4b9] flex flex-col justify-center items-center">
                            <img className="w-10" src="/icon-upload.svg" alt="upload"/>
                            <p className="text-[#a6a4b9]">Drag and drop or click to upload</p>
                        </div>
                    </label>
                    <div className="flex container-type-inline-size">
                        <img src="/icon-info.svg" alt="info" />
                        <p className="text-[#a6a4b9] text-[clamp(0.1rem, 2cqi, 5rem )]">
                            Upload your photo (JPG or PNG,max size: 500KB).
                        </p>
                    </div>
                </div>
            </form>
        </div>
    )
}



// lg:text-[3rem] md:text-[1.5rem]