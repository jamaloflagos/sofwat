import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="px-3 mt-20 flex flex-col gap-10 md:flex-row">
      <div>
        <h1 className="font-bold  text-start leading-5">Welcome to <br /> Sofwat College</h1>
        <h2 className=" text-start leading-5 mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa temporibus unde nam nulla suscipit repellendus facere veritatis inventore amet assumenda.</h2>
        <div className="flex flex-row gap-5 w-full justify-center mt-5">
          <Link to="/apply" className="bg-navy-blue text-baby-blue py-2 px-3 rounded-sm w-40 text-center">Enrol Now</Link>
          <Link to="/about" className="bg-baby-blue text-navy-blue py-2 px-3 rounded-sm w-40 text-center">Read More</Link>
        </div>
      </div>

      <div className="w-full">
        
      </div>
    </div>
  )
}
export default Home