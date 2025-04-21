export const ContainerBlocks = (props) => {
    return(
        <div className="">
            <div className={props.data.bgColor + " bg-clip-padding px-20 hover:scale-105 hover:shadow-xl"}>
                <img className='w-[400px] h-fit rounded-full justify-self-center' src={props.data.image} alt="" />
            </div>

            <p className="font-semibold text-lg bg-slate-200 px-7 py-5 mt-6">
                {props.data.title}
            </p>
        </div>
    );
}