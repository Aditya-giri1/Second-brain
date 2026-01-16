import { Logo } from "../icon/logo";
import { Twittericon } from "../icon/Twitter";
import { YouTubeIcon } from "../icon/YoutubeIcon";
import { Sidebaritem } from "./Sidebaritem";

export function Sidebar(){
    return <div className="h-screen bg-white border-r border-gray-300 w-72 position-fixed left-0 top-0 absolute">
        <div className="flex pl-8 text-2xl pt-8">
            <div className="flex items-center pr-3 text-purple-600">
                <Logo/>
            </div>
            Brainly
        </div>
        <div className="pt-4 pl-8">
        <Sidebaritem text="Twitter"  icon={<Twittericon/>}/>
        <Sidebaritem text="Youtube" icon={<YouTubeIcon />}/>
        </div>
    </div>
}