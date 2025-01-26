import { Button } from "antd";

const SongsTableRow = () => (
  <div className="grid grid-cols-6">
    <div className="col-span-1">Every Valley</div>
    <div className="col-span-1">Bob Dufford</div>
    <div className="col-span-1">Mass of Christ the Savior</div>
    <div className="col-span-1">Advent</div>
    <div className="col-span-1">Entrance, Recessional, Offertory</div>
    <div className="col-span-1">
      <Button>Edit Song</Button>
    </div>
  </div>
);

export { SongsTableRow };
