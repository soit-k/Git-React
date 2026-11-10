import { Crosshair } from "lucide-react";

function App() {
  return (
    <div className="bg-gray-900 w-full min-h-screen flex items-center justify-start flex-col p-4 gap-5 ">
      <div className="bg-black w-full font-bold rounded-md flex items-center justify-between opacity-75 border-2 border-gray-700 px-5 py-1">
        <div className="text-pink-600 flex gap-2 items-center"><Crosshair /> CroXX</div>
        <div className="flex gap-5">
          <div className="text-white p-2 rounded-sm hover:text-pink-500 cursor-pointer transition-colors">HOME</div>
          <div className="text-white p-2 rounded-sm hover:text-pink-500 cursor-pointer transition-colors">ABOUT US</div>
          <div className="text-white p-2 rounded-sm hover:text-pink-500 cursor-pointer transition-colors">SUPPORT !</div>
        </div>
      </div>
      <div className="bg-black w-full h-[200vh] font-bold rounded-md flex items-center justify-center opacity-75 border-2 border-gray-700">Body</div>
      <div className="bg-black w-full h-60 font-bold rounded-md flex items-center justify-center opacity-75 border-2 border-gray-700">Footer</div>
    </div>
  )
}

export default App