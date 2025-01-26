import { SongsTableHeader } from "./SongsTableHeader";
import { SongsTableRow } from "./SongsTableRow";

const SongsTable = () => (
  <div className="border border-slate-200 p-4 rounded-2xl space-y-4">
    <SongsTableHeader />
    <SongsTableRow />
  </div>
);

export { SongsTable };
