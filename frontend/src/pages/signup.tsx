import { Input } from "../componenets/input";
import { Button } from "../componenets/ui/Button";

export function Signup() {
    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded border min-w-48">
        <Input placeholder="Ussername" />
        <Input placeholder="Password" />
        <div className="flex justify-center">
        <Button variant="primary" text="signup" />
        </div>
        </div>
    </div>
}