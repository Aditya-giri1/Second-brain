
import { CrossIcon } from "../icon/CrossIcon";
import { Button } from "./ui/Button";
import { Input } from "./input";

export function CreateContentModal({open, onClose}) {
    
    return <div>
        {open && <div className="w-screen h-screen bg-slate-500/60 fixed top-0 left-0 flex justify-center">
            <div className="flex flex-col justify-center">
            <span className="bg-white p-4 rounded">
                <div className="flex justify-end">
                    <div onClick={onClose} className="cursor-pointer">
                <CrossIcon/>
                </div>
                </div>
                <div>
                    <Input placeholder={"Title"} />
                    <Input placeholder={"Link"}/> 
                </div>
                <div className="flex justify-center">
                <Button variant="primary" text="Submit" size="sm" />
                </div>  
            </span>
        </div>
        </div>}
        
    </div>
}
