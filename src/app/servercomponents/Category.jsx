import { Suspense } from "react";
import CategorySection from "../components/CategorySection";
import { getData } from "../getData/getData";

function Category() {
  const categoryPromise = getData("category");
  const subCategoriesPromise = getData("sub_category");
  const duasPromise = getData("duas");

  return (
    <Suspense fallback={<div className="text-center">Loading...</div>}>
      <CategorySection
        categoryPromise={categoryPromise}
        subCategoriesPromise={subCategoriesPromise}
        duasPromise={duasPromise}
      />
    </Suspense>
  );
}

export default Category;
