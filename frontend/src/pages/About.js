import { Link } from "react-router-dom"

const About = () => {
  return (
    <div className="px-3">
        <div className="h-32 flex flex-col justify-center my-20 bg-navy-blue text-baby-blue opacity-95 pl-5">
            <h1 className="font-bold">About SOFWAT COLLEGE</h1>
        </div>
        <div className="my-20">
            <h1 className="font-bold">Who We Are</h1>
            <p className="text-start leading-5 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quidem a vitae voluptates sed omnis nisi quasi temporibus inventore accusantium asperiores, quo quaerat sit, nobis pariatur fuga necessitatibus in consequuntur.</p>
        </div>

        <div className="flex flex-col gap-10 md:flex-row mb-20 ">
            <img src="https://www.w3schools.com/w3css/img_avatar.png" alt="founder" />
            <div className="pb-3">
                <h1 className="font-bold">The Founder</h1>
                <p className="text-start leading-5 mt-2 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eveniet cumque aliquid, enim consectetur possimus omnis reprehenderit molestiae. Ullam, enim!</p>
                <Link to="/founder" className=" bg-baby-blue text-navy-blue py-2 px-3 rounded-sm w-40 text-center">Read More</Link>
            </div>
        </div>

        <div className="mb-20">
            <h1 className="font-bold">Our Mission</h1>
            <p className="text-start leading-5 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, nostrum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, explicabo.</p>
        </div>

        <div className="mb-20">
            <h1 className="font-bold">History</h1>
            <p className="text-start leading-5 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, vel.</p>
        </div>
        
    </div>
  )
}
export default About