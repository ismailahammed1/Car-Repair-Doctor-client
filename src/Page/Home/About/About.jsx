import parts from "../../../assets/images/about_us/parts.jpg"
import person from "../../../assets/images/about_us/person.jpg"

const About = () => {
  return (
<div className="hero bg-base-200 ">
  <div className="hero-content flex-col lg:flex-row mt-10 mb-10" >
  <div className="lg:w-1/2 relative">
  <img
      src={person}
      className="w-4/5 rounded-lg shadow-2xl" />
  <img
      src={parts}
      className="absolute w-1/2 rounded-lg shadow-2xl right-5 top-1/2 border-8 border-white" />
    
  </div>
    <div className="lg:w-1/2 p-4">
      <p className=" font-bold text-[#FF3811] mb-4">About Us</p>
      <h1 className="text-6xl font-bold">We are qualified & of experience in this field</h1>
      <p className="py-6">
      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
      </p>
      <p className="py-2">
      the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
      </p>
      <button className="btn bg-[#FF3811] hover:bg-transparent font-bold hover:text-[#FF3811] text-white">Get More Info</button>
    </div>
  </div>
</div>
  )
}

export default About