function App() {
  
  const srcimg = "https://images.pexels.com/photos/3906110/pexels-photo-3906110.jpeg"
  const profileImg = "https://images.pexels.com/photos/3772510/pexels-photo-3772510.jpeg?auto=compress&cs=tinysrgb&w=600"
  const profileNameClass = "font-bold text-xl text-center"
  return (
    <div className="flex flex-col items-center bg-black min-h-screen">
      <div className="mt-8 flex flex-col items-center bg-white h-[80vh] rounded-lg">
        <img src={srcimg} className="h-[200px] w-[350px] rounded-t-lg"/>
        <div className="mt-[-80px] z-10">
        <img src={profileImg} className="rounded-full w-[150px] h-[150px] bg-contain"/>
        </div>
        <div className="mt-8">
          <p className="text-xl font-bold">Mona Lisa <span className="font-semibold text-gray-400">21</span></p>
        </div>
        <div className="flex gap-[50px] mt-16 border-t-[1px] border-t-solid border-t-gray-400 w-full justify-center pt-5">
          <div>
          <p className={profileNameClass}>80K</p>
          <p className="text-gray-600">Followers</p>
          </div>
          <div>
          <p className={profileNameClass}>803K</p>
          <p className="text-gray-600 text-center">Likes</p>
          </div>
          <div>
          <p className={profileNameClass}>1.4K</p>
          <p className="text-gray-600">Photos</p>
          </div>
        </div>
    </div>
    </div>
  )
}

export default App
