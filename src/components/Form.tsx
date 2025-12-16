import { useState } from "react";

type InputsType={
    image:string
    fullName:string
    gitName:string
    mail:string
}

export default function Form(){
    const [inputs,setInputs] = useState<InputsType>({
        image:'',
        fullName:'',
        gitName:'',
        mail:''
    })


    const labelStyles='text-[#ffff] my-5';
    const inputStyles='h-[50px]  bg-[rgba(0,0,0,0.2)] rounded-[10px] outline-none border-1 border-[#a6a4b9] border-solid text-[#a6a4b9] px-4 ';
    
    function handleDrag(e:React.DragEvent){
        e.preventDefault()
        e.currentTarget.classList.remove('bg-[rgba(0,0,0,0.2)]')
        e.currentTarget.classList.add('bg-[rgba(197,188,188,0.2)]')
    }

    function dragEnd(e:React.DragEvent){
        e.preventDefault()
        e.currentTarget.classList.remove('bg-[rgba(197,188,188,0.2)]')
        e.currentTarget.classList.add('bg-[rgba(0,0,0,0.2)]')
    }

    function onchangeImage(e: React.ChangeEvent<HTMLInputElement>){ 
        const files = e.currentTarget.files
        if(files != null){
            setInputs((prev)=>({
                ...prev,
                image:files[0].name
            }))
        }
    }

    function handleInputChanges(e:React.ChangeEvent<HTMLInputElement>){
        setInputs((prev)=>({
            ...prev,
            [e.currentTarget.name]:[e.currentTarget.value]
        }))
    }


    function handleDrop(e:React.DragEvent){
        e.preventDefault()
        const file = e.dataTransfer.files
        console.log(file)
        if(file[0].name){
            setInputs((prev)=>({
                ...prev,
                image:URL.createObjectURL(file[0])
            }))
        }
    }

    return(
        <div className="lg:w-full  px-4 flex flex-col justify-center items-center z-50 container-type-inline-size">
            <img className="h-5" src="/logo-full.svg" alt="coding_conf_logo" />
            <h1 className="text-zinc-50  text-[clamp(1rem,7cqi,3rem)] md:max-w-[40%] font-bold text-center font-inconsolata">Your Journey to Coding Conf 2025 Starts Here!</h1>
            <p className="text-[#a6a4b9] text-[clamp(0.1rem,4.5cqi,1.4rem)] text-center mx-2">Secure your spot at next year's biggest coding conference.</p>
            <form className="w-full max-w-100 my-8 flex flex-col " >
                <div className="w-full aspect-5/3  flex flex-col justify-center items-start ">
                    <p className="text-[#a6a4b9]">Upload Avatar</p>
                        <input onChange={onchangeImage} id="uploadInput" type="file" accept="image/*" hidden  />
                        {
                            inputs.image !== ''? 
                            <div className="w-full h-full my-1.5 flex flex-col justify-center items-center  bg-[rgba(0,0,0,0.2)] rounded-[20px] border-2 border-dashed border-[#a6a4b9]">
                                <img className="w-10" src={inputs.image} alt="image" />
                                <div>
                                    <button className="text-[#a6a4b9] my-2 mx-2">Remove Image</button>
                                    <button className="text-[#a6a4b9] my-2 mx-2">Change Image</button>
                                </div>
                            </div>
                            :
                            <label  className="w-full h-full my-1.5" htmlFor="uploadInput">
                                <div onDrop={handleDrop} onDragOver={handleDrag} onDragLeave={dragEnd} className="w-full h-full bg-[rgba(0,0,0,0.2)] rounded-[20px] border-2 border-dashed border-[#a6a4b9] flex flex-col justify-center items-center">
                                    <img className="w-10" src="/icon-upload.svg" alt="upload"/>
                                    <p className="text-[#a6a4b9]">Drag and drop or click to upload</p>
                                </div>
                            </label>
                        }
                    <div className="flex justify-center items-center container-type-inline-size">
                        <img src="/icon-info.svg" alt="info" />
                        <p className="text-[#a6a4b9] text-[clamp(10px,1cqi,1rem)] mx-1">
                            Upload your photo (JPG or PNG,max size: 500KB).
                        </p>
                    </div>
                </div>
                <label className={labelStyles} htmlFor="fullname">Full Name</label>
                <input className={inputStyles} onChange={handleInputChanges} type="text" id="fullName" value={inputs.fullName} name="fullName" />
                <label className={labelStyles} htmlFor="mail">Email Address</label>
                <input className={inputStyles} onChange={handleInputChanges} type="text" id="mail" value={inputs.mail} name="mail"/>
                <label className={labelStyles} htmlFor="gitHub">GitHub Username</label>
                <input className={inputStyles} onChange={handleInputChanges} type="text"  id="gitHub" value={inputs.gitName} name="gitName"/>

                <button type="submit" className="h-12.5 cursor-pointer transition-[0.2s] ease-in-out bg-[#f67464] hover:bg-[#f1a096]  text-[#3f1a2f] font-bold rounded-[10px] my-5">Generate My Ticket</button>
            </form>
        </div>
    )
}



