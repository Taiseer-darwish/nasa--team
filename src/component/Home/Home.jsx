ai
const Home = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 h-full">
      <div className="parent px-8">
  {/* Start Header */}
  <header>
    {/* srart navigation */}
    <div className="navigation p-5 flex justify-around items-center">
      <div>
        <i className="text-amber-500 text-4xl ml-4 cursor-pointer fa-solid fa-bell" />
      </div>
      <nav className="flex-1 flex justify-end items-center">
        <ul className="list-none flex">
          <li><a href="#">الارشادات</a></li>
          <li><a href="###">التوصيات</a></li>
          <li><a href="###">الشات بوت</a></li>
        </ul>
      </nav>
      <div className="personal-img flex justify-end items-center">
        <img className="w-1/12 cursor-pointer" src="./img/pngtree-user-cartoon-avatar-pattern-flat-avatar-png-image_4492883-removebg-preview.png" />
        <h3 className="ml-2 text-lg cursor-pointer">log in</h3>
      </div>
    </div>
    {/* end navigation */}
  </header>
  {/* End Header */}
  {/* strat layout */}
  <div className="layout">
    {/* Start main-text */}
    <h2 className="text-center py-5 text-2xl text-yellow-300 ">العنوان بالتفصيل </h2>
    {/* end main-text */}
    {/* strat content */}
    <div className="content grid grid-cols-1 xl:grid-cols-3 gap-6">
      {/* strat map */}
      <div className="map bg-slate-600 h-[450px] w-f xl:col-span-2">
        <img className="w-full h-full" src="./img/OIP.jfif" />
      </div>
      {/* strat Statistics */}
      <div className="Statistics-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4 ">
        <div className="card ">
          <i className=" fa-solid fa-temperature-low" />
          <p className>درجه الحراره</p>
          <h3 className>35</h3>
          <div className="detales">
            <i className=" fa-solid fa-arrow-left" />
            <p className> انظر التفاصيل</p>
          </div>
        </div>
        <div className="card ">
          <i className=" fa-solid fa-temperature-low" />
          <p className>درجه الحراره</p>
          <h3 className>35</h3>
          <div className="detales">
            <i className=" fa-solid fa-arrow-left" />
            <p className> انظر التفاصيل</p>
          </div>
        </div>
        <div className="card ">
          <i className=" fa-solid fa-temperature-low" />
          <p className>درجه الحراره</p>
          <h3 className>35</h3>
          <div className="detales">
            <i className=" fa-solid fa-arrow-left" />
            <p className> انظر التفاصيل</p>
          </div>
        </div>
        <div className="card ">
          <i className=" fa-solid fa-temperature-low" />
          <p className>درجه الحراره</p>
          <h3 className>35</h3>
          <div className="detales">
            <i className="fa-solid fa-arrow-left" />
            <p className> انظر التفاصيل</p>
          </div>
        </div>
      </div>
    </div>
    <div className="Statistics-2 grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 mt-10 ">
      <div className="card ">
        <i className=" fa-solid fa-temperature-low" />
        <p className>درجه الحراره</p>
        <h3 className>35</h3>
        <div className="detales">
          <i className=" fa-solid fa-arrow-left" />
          <p className> انظر التفاصيل</p>
        </div>
      </div>
      <div className="card ">
        <i className=" fa-solid fa-temperature-low" />
        <p className>درجه الحراره</p>
        <h3 className>35</h3>
        <div className="detales">
          <i className=" fa-solid fa-arrow-left" />
          <p className> انظر التفاصيل</p>
        </div>
      </div>
      <div className="card ">
        <i className=" fa-solid fa-temperature-low" />
        <p className>درجه الحراره</p>
        <h3 className>35</h3>
        <div className="detales">
          <i className=" fa-solid fa-arrow-left" />
          <p className> انظر التفاصيل</p>
        </div>
      </div>
      <div className="card ">
        <i className=" fa-solid fa-temperature-low" />
        <p className>درجه الحراره</p>
        <h3 className>35</h3>
        <div className="detales">
          <i className=" fa-solid fa-arrow-left" />
          <p className> انظر التفاصيل</p>
        </div>
      </div>
    </div>
    {/* end content */}
    {/* start results */}
    <div className="results pb-12  ">
      <h2 className=" my-4 p-3 text-right text-3xl text-green-400 font-bold">اهم النتائج</h2>
      <div className="min-h-[200px] border-2 border-white border-dashed rounded-lg " />
    </div>
  </div>
  {/* end layout */}
</div>

      </section>
    </>
  );
};

export default Home;
