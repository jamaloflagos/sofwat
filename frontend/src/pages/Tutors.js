const tutors = [
  {
    id: 0,
    name: "AL USTAZ YUNUS MUSTOPHA",
    post: "Principal",
    subject: "Arabic Grammar | Morphology | Motnu luga | Aladabu wa nusuus | almontiq",
    img: "https://www.w3schools.com/w3css/img_avatar.png"
  },
  {
    id: 1,
    name: "AL USTAZ BASHIR BASIT",
    post: "Vice Principal I",
    subject: "Jurispudence, Qowaidu luga, Motnu luga, Islamic History",
    img: "https://www.w3schools.com/w3css/img_avatar.png"
  },
  {
    id: 2,
    name: "AL USTAZ SAHEED TAOFEEQ",
    post: "Vice Principal II",
    subject: "Balaga, Islamic Faith, Composition",
    img: "https://www.w3schools.com/w3css/img_avatar.png"
  },
  {
    id: 3,
    name: "AL USTAZ AHMOD SAHEED",
    post: "Hadith, Mustolahul Hadith, Thaqofa",
    subject: "nahw, sorfu",
    img: "https://www.w3schools.com/w3css/img_avatar.png"
  },
  {
    id: 4,
    name: "AL USTAZ SOLIU SOLAHUDEEN",
    post: "Staff",
    subject: "Uluumul Qur;an, Tefsirul Qur'an, Hadith, Composition, Islamic History",
    img: "https://www.w3schools.com/w3css/img_avatar.png"
  },
  {
    id: 5,
    name: "AL USTAZ ABDULWASIU ABDULGANIY",
    post: "Staff",
    subject: "Arithmetic, Literature Texts, Islamic Etiquette, Ulumul Tefsir, Islamic Faith",
    img: "https://www.w3schools.com/w3css/img_avatar.png"
  },
  {
    id: 6,
    name: "AL USTAZ ABDULHAKEEM MIKHAIL",
    post: "Staff",
    subject: "Islamic History, Literature Texts, Reading",
    img: "https://www.w3schools.com/w3css/img_avatar.png"
  },
  {
    id: 7,
    name: "AL USTAZ MUH-FATIU ABDULGANIY",
    post: "Staff",
    subject: "Arabic Grammar, Morphology, Writing, Aruud",
    img: "https://www.w3schools.com/w3css/img_avatar.png"
  },
  {
    id: 8,
    name: "AL USTAZ MUH-NOFIU MUHIBUDEEN",
    post: "Staff",
    subject: "Hadith, Literature Texts, Islamic Faith",
    img: "https://www.w3schools.com/w3css/img_avatar.png"
  },
  {
    id: 9,
    name: "AL USTAZA ",
    post: "Staff",
    subject: "nahw, sorfu",
    img: "https://www.w3schools.com/w3css/img_avatar.png"
  }
]

const Tutors = () => {
  return (
    <div className="px-3">
      <div className=" flex h-32 flex-col justify-center my-10 bg-navy-blue text-baby-blue opacity-95 pl-5">
        <h1 className="font-bold">Tutors</h1>
        <h2>Meet Our Prestigious Tutors</h2>
      </div>
      <p className=" text-start leading-5 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore magni blanditiis ut doloremque temporibus? Eaque explicabo aliquid quas tenetur numquam!</p>
      <div className="flex flex-col gap-10 md:grid grid-cols-3 mt-10">
        {tutors.map( tutor => (
          <div key={tutor.map} className="shadow-lg rounded-md hover:shadow-baby-blue transition duration-300">
              <img src={tutor.img} alt={tutor.name} className="rounded-t-md"/>
              <div className="pl-3 my-3">
                <p>{tutor.name}</p>
                <p>{tutor.post}</p>
                <p>{tutor.subject}</p>
              </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Tutors