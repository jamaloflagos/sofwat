const Footer = () => {
  return (
    <div className="h-fit bg-baby-blue w-full mt-40 text-navy-blue text-start flex flex-col gap-10 pt-10 pb-5 px-20 sticky bottom-0 left-0">
        <div className="flex flex-col md:flex-row gap-20">
            <div className="w-80 flex flex-col gap-5">
                <h1 className="font-bold">ABOUT</h1>
                <p>Assumenda in rem ipsam neque possimus voluptas illo, temporibus totam ad odio  ex eum aspernatur veritatis! Ipsum quibusdam consequuntur molestias.  Placeat, autem veniam quisquam ab cum numquam tempore? Quos, quidem!</p>
            </div>
            <div className="flex flex-col gap-5 w-auto">
                <h1 className="font-bold">STUDENT</h1>
                <ul>
                    <li>
                        <a href="/apply">Admission</a>
                    </li>
                    <li>
                        <a href="/e-library">E-Library</a>
                    </li>
                    
                </ul>
            </div>
            <div className="flex flex-col gap-5 w-fit">
                <h1 className="font-bold">QUICK LINKS</h1>
                <ul>
                    <li>
                        <a href="/about">About Us</a>
                    </li>
                    <li>
                        <a href="/contact">Contact Us</a>
                    </li>
                    <li>
                        <a href="/terms">Terms and Condition</a>
                    </li>
                </ul>
            </div>
        </div>

        <div className="w-full h-px bg-cream"></div>
        <div className="flex flex-col md:flex-row justify-between gap-5">
            <p>Copyright &copy; 2023 Sofwat College. All Rights Reserved</p>
            <div className="flex flex-row gap-5">
                <div>
                    <i class="fa-brands fa-twitter"></i>
                </div>
                <div>
                    <i class="fa-brands fa-facebook-f"></i>
                </div>
                <div>
                    <i class="fa-brands fa-instagram"></i>
                </div>
                <div>
                    <i class="fa-brands fa-linkedin-in"></i>
                </div>
            </div>
        </div>
        </div>
  )
}
export default Footer