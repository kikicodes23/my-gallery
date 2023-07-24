export function Information({number, info}) {
    return(
        <section className="flex flex-col justify-center items-center rounded-xl bg-[#E5E5E5] w-[78px] h-[52px]">
            <p className="font-semibold text-xs text-[#4E5150]">{number}</p>
            <p className="font-semibold text-xs text-[#BDBDBD]">{info}</p>
        </section>
    )
}