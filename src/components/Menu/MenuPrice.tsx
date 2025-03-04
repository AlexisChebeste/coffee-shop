

export default function MenuPrice({list}: {list: {title: string, description: string, price: number}[]}) {
    return(
        <div className="flex w-full flex-col gap-8 ">
            {list.map((item, index) => (
                <div key={index} className="flex justify-between items-center w-full text-2xl font-medium">
                    <div className="flex flex-col max-w-96 pr-8">
                        <p>{item.title}</p>
                        {item.description !== "" && <p className="text-lg italic font-light ">{item.description}</p>}
                    </div>
                    <p >${item.price}</p>
                </div>
            ))}
        </div>
    )
    
}