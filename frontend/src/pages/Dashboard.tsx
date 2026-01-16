import { useState } from "react";
import "../App.css";
import "../index.css";
import { Button } from "../componenets/ui/Button";
import { PlusIcon } from "../icon/PlusIcon";
import { ShareIcone } from "../icon/ShareIcon";
import { Card } from "../componenets/Card";
import { CreateContentModal } from "../componenets/CreateContentModal";
import { Sidebar } from "../componenets/Sidebar";
 export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(true);

  return (
    <div>
      <div className="">
        <Sidebar/>
      </div>
    <div className="p-4 ml-72 min-h-screen bg-gray-100 border-gray-200  ">
      <CreateContentModal open={modalOpen} onClose={() => {setModalOpen(false); }} />
      <div className="flex justify-end gap-4">
        <Button
          startIcon={<PlusIcon size="md" />}
          size="md"
          variant="primary"
          text="Add Content"
          onClick={() => {
            setModalOpen(true);
          }}
        />
        <Button
          startIcon={<ShareIcone size="md" />}
          size="md"
          variant="secondary"
          text="Share brain"
        />
      </div>
      <div className="flex">
        <Card
          type="twitter"
          link="https://x.com/gauravvan/status/1983902093082816703"
          title="first tweet"
        />
        <Card
          type="youtube"
          link="https://www.youtube.com/watch?v=Oe_h_M7Drec"
          title="first video"
        />
      </div>
    </div>
    </div>
  );
}
 
