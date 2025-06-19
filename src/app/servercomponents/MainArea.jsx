import { Suspense } from "react";
import { getData } from "../getData/getData";
import MainContent from "../components/MainContent";

function MainArea() {
  const duasPromise = getData("duas");

  return (
    <Suspense fallback={<div className="text-center">Loading...</div>}>
      <MainContent duasPromise={duasPromise} />
    </Suspense>
  );
}

export default MainArea;
