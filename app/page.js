import { Profile } from "@/components/Profile.jsx";
import { Information } from "@/components/Information.jsx";
import { Picture } from "@/components/Picture.jsx";

import photo1 from "@/public/img/photo1.png"
import photo2 from "@/public/img/photo2.png"
import photo3 from "@/public/img/photo3.png"
import photo4 from "@/public/img/photo6.png"
import photo5 from "@/public/img/photo5.png"
import photo6 from "@/public/img/photo4.png"

export default function Home() {

  const information = [
    {number: 100, info:"Post"},
    {number: 2242, info:"Followers"},
    {number: 1432, info:"Following"}
  ]

  const photo = [
    {photoSrc: photo1, area: "grid-area/first"},
    {photoSrc: photo2, area: "grid-area/second"},
    {photoSrc: photo3, area: "grid-area/third"},
    {photoSrc: photo4, area: "grid-area/fourth"},
    {photoSrc: photo5, area: "grid-area/fifth"},
    {photoSrc: photo6, area: "grid-area/sixth"},
  ]

  return (
    <main className="flex flex-col justify-center items-center pb-[30px] md:pb-[60px]">
      <Profile/>

      <section className="flex justify-center gap-4 pt-3">
        {information.map(({number, info}) => (
          <Information key={info} number={number} info={info}/>
        ))}
      </section>

      <article className="grid grid-areas-['first_second_second'_'third_third_sixth'_'fourth_fifth_sixth'] px-3 gap-3 max-w-[960px] w-full pt-[39px] md:pt-16 md:gap-8 md:px-8">
          {photo.map(({photoSrc, area}) => (
            <Picture key={photoSrc} photoSrc={photoSrc.src} area={area}/>
          ))}
      </article>
    </main>
  )
}
