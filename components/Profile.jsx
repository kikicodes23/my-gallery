import picture from "@/public/img/profilePhoto.png"

export function Profile() {
    return(
        <section className="flex flex-col justify-center items-center pt-[30px] md:pt-[60px]">
            <div className="w-[102px] h-[102px] md:w-[156px] md:h-[156px]">
                <img className="h-full w-full object-cover rounded-xl" alt="This a profile picture" src={picture.src} />
            </div>
            <p className="font-semibold text-sm text-[#4E5150] pt-[11px] md:pt-4 md:text-2xl">Erika Quinteros</p>
            <p className="font-semibold text-[10px] text-[#A9A9A9] pt-[4px] md:pt-2 md:text-sm">San Salvador, El Salvador</p>
        </section>
    )
}