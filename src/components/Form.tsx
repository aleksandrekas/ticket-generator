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
        e.preventDefault()
        const files = e.currentTarget.files
        if(files != null){
            setInputs((prev)=>({
                ...prev,
                image:URL.createObjectURL(files[0])
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

    function removeImage(){
        setInputs((prev)=>({
            ...prev,
            image:''
        }))
    }




    const labelStyles='text-[#ffff] my-2';
    const inputStyles='h-[50px] w-full bg-[rgba(0,0,0,0.2)] rounded-[10px] outline-none border-1 border-[#a6a4b9] border-solid text-[#a6a4b9] px-4 py-0.5';
    return (
        <div className="h-full max-w-[900px] w-full m-3.5 p-6 container-type-inline-size flex flex-col justify-start items-center z-50">
            <img className="w-[30%]" src="/logo-full.svg" alt="coding_conf_logo" />
            <h1 className="text-zinc-50  text-[clamp(1.5rem,4cqi,2rem)] mx-1 my-1  font-bold text-center font-inconsolata">Your Journey to Coding Conf 2025 Starts Here!</h1>
            <p className="text-[#a6a4b9] text-[clamp(0.1rem,4.5cqi,1.4rem)] py-1.5 text-center my-4">Secure your spot at next year's biggest coding conference.</p>
            <form className="max-w-[350px] w-full  flex flex-col justify-start items-start">
                <div className="w-full aspect-5/3  flex flex-col justify-center items-start ">
                    <p className="text-[#a6a4b9]">Upload Avatar</p>
                    <input  id="uploadInput" onChange={onchangeImage} type="file" accept="image/*" hidden  />
                    {
                        inputs.image !== ''?
                            <div className="w-full h-full my-1.5 flex flex-col justify-evenly items-center  bg-[rgba(0,0,0,0.2)] rounded-[20px] border-2 border-dashed border-[#a6a4b9]">
                                <img className="w-20 rounded-[5px]" src={inputs.image} alt="image" />
                                <div>
                                    <button onClick={removeImage} className="text-[#a6a4b9] text-[0.6rem] bg-[rgba(197,188,188,0.2)] cursor-pointer rounded-[5px] my-2 mx-2 p-1.5">Remove Image</button>
                                    <button className="text-[#a6a4b9] text-[0.6rem] bg-[rgba(197,188,188,0.2)] cursor-pointer rounded-[5px] my-2 mx-2 p-1.5">Change Image</button>
                                </div>
                            </div>
                            :
                            <label  className="w-full h-full  my-1.5" htmlFor="uploadInput">
                                <div onDrop={handleDrop} onDragOver={handleDrag} onDragLeave={dragEnd}   className="w-full h-full bg-[rgba(0,0,0,0.2)] rounded-[20px] border-2 border-dashed border-[#a6a4b9] flex flex-col justify-center items-center">
                                    <img className="w-10" src="/icon-upload.svg" alt="upload"/>
                                    <p className="text-[#a6a4b9]">Drag and drop or click to upload</p>
                                    </div>
                            </label>
                    }
                    <div className="flex justify-start  items-center container-type-inline-size">
                            <img src="/icon-info.svg" alt="info" />
                            <p className="text-[#a6a4b9] text-[12px] mx-1">
                                Upload your photo (JPG or PNG,max size: 500KB).
                            </p>
                    </div>
                </div>
                <label className={labelStyles} htmlFor="fullname">Full Name</label>
                <input className={inputStyles} onChange={handleInputChanges}  type="text" id="fullName"  name="fullName" value={inputs.fullName}  placeholder="your name" />
                <p className="text-[#a14646] ">* please enter your name</p>
                <label className={labelStyles}  htmlFor="mail">Email Address</label>
                <input className={inputStyles} onChange={handleInputChanges}  type="text" id="mail"  name="mail" value={inputs.mail} placeholder="example@mail.com"/>
                <p className="text-[#a14646] ">* please enter valid email adress</p>
                <label className={labelStyles} htmlFor="gitHub">GitHub Username</label>
                <input className={inputStyles} onChange={handleInputChanges}  type="text"  id="gitHub"  name="gitName" value={inputs.gitName} placeholder="@yourusername" />
                <p className="text-[#a14646] ">* please enter your github username</p>
                <button type="submit" className="h-12.5 w-full  cursor-pointer transition-[0.2s] ease-in-out bg-[#f67464] hover:bg-[#f1a096]  text-[#3f1a2f] font-bold rounded-[10px] my-5">Generate My Ticket</button>
            </form>
        </div>
    )
}