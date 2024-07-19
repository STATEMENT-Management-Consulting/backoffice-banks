import { cn } from "@/styles/utils";

export function MirantesSimple({
  className,
  loader,
}: {
  className?: string;
  loader?: boolean;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="79"
      height="108"
      viewBox="0 0 79 108"
      fill="none"
    >
      <path
        d="M24.3108 107.5H12.5149C5.88046 107.5 0.5 102.12 0.5 95.4851V0.5H11.537C18.5947 0.5 24.3108 6.21614 24.3108 13.2738V107.5Z"
        fill="#0B89CE"
        stroke="#0B89CE"
        className={cn(
          className,
          loader ? "loader" : "",
          "simple-mirantes-animated-path"
        )}
      />
      <path
        d="M52.7639 103.851H40.9753C34.3336 103.851 28.9531 98.471 28.9531 91.8293V12.1758H40.0558C47.077 12.1758 52.7639 17.8627 52.7639 24.8839V103.851Z"
        fill="#0B89CE"
        stroke="#0B89CE"
        className={cn(
          className,
          loader ? "loader" : "",
          "simple-mirantes-animated-path"
        )}
      />
      <path
        d="M78.3052 91.4469H67.0347C61.3197 91.4469 56.6836 86.8108 56.6836 81.0958V24.582H67.4287C73.4356 24.582 78.3052 29.4517 78.3052 35.4585V91.4469Z"
        fill="#0B89CE"
        stroke="#0B89CE"
        className={cn(
          className,
          loader ? "loader" : "",
          "simple-mirantes-animated-path"
        )}
      />
    </svg>
  );
}
