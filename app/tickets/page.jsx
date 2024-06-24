import { Suspense } from "react";
import TicketsList from "./TicketsList";
import Loading from "../loading";
export default function tickets() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <TicketsList />
      </Suspense>
    </div>
  );
}
