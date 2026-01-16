import type { ReactNode } from "react";

export function Sidebaritem({text, icon}: {
    text: string;
    icon: ReactNode;
}){
    return <div className="flex text-gray-700 hover:bg-gray-200 rounded max-w-48 pl-4 transition-all duration-150 cursor-pointer">
        <div className="p-2">
        {icon}
        </div>
        <div className="p-2">
        {text}
        </div>
    </div>
}