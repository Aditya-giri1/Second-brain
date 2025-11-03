import "./App.css";
import "./index.css";
import { Button } from "./componenets/ui/Button";
import { PlusIcon } from "./icon/PlusIcon";
import { ShareIcone } from "./icon/ShareIcon";
import { Card } from "./componenets/Card";
function App() {
  return (
    <div className="p-4">
      <div className="flex justify-end gap-4">
        <Button
          startIcon={<PlusIcon size="md" />}
          size="md"
          variant="primary"
          text="Add Content"
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
  );
}
export default App;
