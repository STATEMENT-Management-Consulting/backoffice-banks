import { PageLoaderProgressBar } from "./PageLoaderProgressBar";
import { usePageLoader } from "./usePageLoader";

export function PageLoader() {
  const { isAnimating } = usePageLoader();

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <PageLoaderProgressBar isAnimating={isAnimating} />
    </div>
  );
}

PageLoader.displayName = "PageLoader";
