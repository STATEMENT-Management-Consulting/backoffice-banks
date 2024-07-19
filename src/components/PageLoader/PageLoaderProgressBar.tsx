import { useNProgress } from "@tanem/react-nprogress";

interface IPageLoaderProgressBar {
  isAnimating: boolean;
}

export function PageLoaderProgressBar({ isAnimating }: IPageLoaderProgressBar) {
  const { isFinished, progress, animationDuration } = useNProgress({
    isAnimating,
  });

  return !isFinished ? (
    <div className="w-full h-[3px]">
      <div
        className="bg-primary h-[3px] rounded-right-full"
        style={{
          width: `${progress * 100}%`,
          transition: `width ${animationDuration} ease-in-out`,
        }}
      />
    </div>
  ) : null;
}
