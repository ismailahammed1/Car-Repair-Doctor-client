
const OurTeam = () => {
  return (
    <div className="text-center  mt-8">
    <div className=" ">
      <h1 className="text-xl font-bold text-[#FF3811]">About Us</h1>
      <h1 className="text-5xl font-bold">Our Service Area</h1>
      <p className="text-xl p-4">
        The majority have suffered alteration in some form, by injected humour, or randomised
        <br />
        words which do not look even slightly believable.
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {services.map((service) => (
        <ServiceCard key={service._id} service={service}/>
      ))}
    </div>
    <button className="btn btn-outline  text-xl text-[#FF3811] m-10 hover:text-[#FF3811]">More Services</button>
    <div className="h-36 bg-neutral-900 w-full rounded-lg flex items-center justify-center">
    <div className="flex justify-between text-white w-full max-w-4xl">
      <div className="flex items-center gap-4">
        <img src={calender} alt="calender" className="h-8" />
        <div className="text-left">
          <p>We are open Monday-Friday</p>
          <h1 className="font-bold">7:00 am - 9:00 pm</h1>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <img src={contact} alt="contact" className="h-8" />
        <div className="text-left">
          <p>Have a question?</p>
          <h1 className="font-bold">+2546 251 2658</h1>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <img src={map} alt="map" className="h-8" />
        <div className="text-left">
          <p>Need a repair? Our address</p>
          <h1 className="font-bold">Liza Street, New York</h1>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default OurTeam