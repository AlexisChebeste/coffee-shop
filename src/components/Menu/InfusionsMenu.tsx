import {infusionsMenu1, infusionsMenu2} from "../../utility/dataMenu";

export default function InfusionsMenu() {

    return(
        <>
            <div className="flex flex-col items-start w-full gap-4">
                {infusionsMenu1.map((item, index) => (
                    <p key={index} className="text-xl font-medium">{item}</p>
                ))}
            </div>
            <div className="flex flex-col items-end w-full ">
                <div className="flex flex-col items-start  gap-4">
                    {infusionsMenu2.map((item, index) => (
                        <p key={index} className="text-xl font-medium">{item}</p>
                    ))}
                </div>
                
            </div>
        </>
    )
}