const Contact = () => {
  return (
    <div className="px-3">
      <div className="h-32 flex flex-col justify-center my-10 bg-navy-blue text-baby-blue opacity-95 pl-5">
        <h1 className="font-bold">Contact us</h1>
        <h2>Reach out to us for any inquiry</h2>
      </div>

      <form action="">
        <label htmlFor="name">Your Name</label>
        <input type="text" name="name" id="name" className="border block w-full h-10 mt-1 md:w-96 focus:outline-baby-blue focus:outline-1" required/>
        <label htmlFor="email" className="mt-10 block">Your Email</label>
        <input type="text" name="email" id="email" className="border block w-full h-10 mt-1 md:w-96 focus:outline-baby-blue focus:outline-1" required/>
        <label htmlFor="phone" className="mt-10 block">Phone Number</label>
        <input type="text" name="phone" id="phone" className="border block w-full h-10 mt-1 md:w-96 focus:outline-baby-blue focus:outline-1" required/>
        <label htmlFor="subject" className="mt-10 block">Subject</label>
        <input type="text" name="subject" id="subject" className="border block w-full h-10 mt-1 md:w-96 focus:outline-baby-blue focus:outline-1" required/>
        <label htmlFor="message" className="mt-10 block">Message</label>
        <textarea type="text" name="message" id="message" className="border block w-full mt-1 md:w-96 focus:outline-baby-blue focus:outline-1" rows={5} required/>
        <button type="submit" className="bg-baby-blue text-navy-blue py-2 px-3 mt-5 rounded-sm w-40 md:w-96 text-center">Send</button>
      </form>

      <div className="flex flex-col md:flex-row gap-5 mt-20">
        <div className="flex flex-row gap-5 w-full text-start">
          <i className="fa-solid fa-location-dot mt-2"></i>
          <div>
            <h1>Head Office</h1>
            <h2>Lorem, ipsum dolor.</h2>
          </div>
        </div>
        <div className="flex flex-row gap-5 w-full text-start">
          <i className="fa-solid fa-envelope mt-2"></i>
          <div>
            <h1>Email</h1>
            <h2>Lorem, ipsum dolor.</h2>
          </div>
        </div>
        <div className="flex flex-row gap-5 w-full text-start">
          <i className="fa-solid fa-phone mt-2"></i>
          <div>
            <h1>Phone</h1>
            <h2>Lorem, ipsum dolor.</h2>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Contact