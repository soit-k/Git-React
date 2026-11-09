function App() {
  return (
    <div className="bg-red-900 w-full min-h-fit flex items-center justify-start flex-col p-4 gap-5">
      <div className="bg-gray-700 w-full h-72 font-bold rounded-md flex items-center justify-center opacity-75">Header</div>
      <div className="bg-gray-600 w-full h-[200vh] font-bold rounded-md flex items-center justify-center opacity-75">Body</div>
      <div className="bg-gray-500 w-full h-60 font-bold rounded-md flex items-center justify-center opacity-75">Footer</div>
    </div>
  )
}

export default App