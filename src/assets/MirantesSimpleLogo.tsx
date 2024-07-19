interface IMirantesSimpleLogo {
  className?: string;
}

export function MirantesSimpleLogo({ className }: IMirantesSimpleLogo) {
  return (
    <svg
      width="88"
      height="32"
      viewBox="0 0 88 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M7.35135 32H3.70811C1.66054 32 0 30.3395 0 28.2919V0H3.41838C5.59135 0 7.35135 1.76 7.35135 3.93297V32Z"
        fill="#0B89CE"
      />
      <path
        d="M15.7835 30.9189H12.1424C10.0927 30.9189 8.43213 29.2584 8.43213 27.2087V3.45947H11.87C14.0321 3.45947 15.7835 5.21082 15.7835 7.37299V30.9189Z"
        fill="#0B89CE"
      />
      <path
        d="M23.3514 27.2432H19.8638C18.0887 27.2432 16.6487 25.8032 16.6487 24.0281V7.13513H19.9806C21.8422 7.13513 23.3514 8.64432 23.3514 10.5059V27.2432Z"
        fill="#0B89CE"
      />
    </svg>
  );
}
