export function Picture({photoSrc, area}) {
    return(
        <section className={`${area}`}>
            <img src={photoSrc} alt="This is a gallery photo" className="rounded-xl w-full h-full object-cover"/>
        </section>
    )
}