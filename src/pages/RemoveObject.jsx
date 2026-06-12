import { Scissors, Sparkles } from "lucide-react";
import { useState } from "react";

const RemoveObject =()=>{
    const [inputImage,setInputImage] = useState('')
    const [inputText, setInputText] = useState('')
    const onSubmitHandler = async (e)=>{
        e.preventDefault()
    }
  return (
    <div className="h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700">
      {/* Col 1 */}
      <form onSubmit={onSubmitHandler} className="w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200">
        <div className="flex items-center gap-3">
          <Sparkles className="w-6 text-[#4A7AFF]" />
          <h1 className="font-semibold text-lg">Object Removal</h1>
        </div>
        <h2 className="mt-6 text-sm font-medium">Upload Image</h2>
        <input
          type="file"
          accept='image/*'
          onChange = {(e)=> setInputImage(e.target.files[0])}
          value = {inputImage}
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300"
          required
        />
        <h2 className="mt-4 text-sm font-medium">Describe object to remove</h2>
        <textarea
        onChange={(e)=>setInputText(e.target.value)}
        value={inputText}
        rows={4}
        className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300"
        placeholder="e.g.,car in background, tree in the image"
        required></textarea>
        <p className='text-xs text-gray-500 font-light mt-1'>Be specific about what you want to remove</p>
        
        <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#3C81F6] to-[#9243E3] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer">
          <Scissors className="w-5"/>
          Remove Object</button>
      </form>
      {/* Col 2 */}
      <div className='w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96 max-h-[600px]'>
        <div className="flex items-center gap-3">
          <Scissors className="w-5 h-5 text-[#4A7AFF]"/>
          <h1 className="text-sl font-semibold">Processed Image</h1>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
            <Scissors className="w-9 h-9"/>
            <p>Upload an image and describe what to remove</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RemoveObject