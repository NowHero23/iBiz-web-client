"use client";
import Link from "next/link";

interface Props {
  className: string | undefined;
}

export default function AddBtn({ className }: Props) {
  return (
    <>
      <Link href="#" className={className}>
        <svg
          width="14"
          height="14"
          viewBox="0 0 15 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block"
        >
          <path
            d="M9.1463 8.67349V14H5.84074V8.67349H0.5V5.31349H5.84074V0H9.1463V5.31349H14.5V8.67349H9.1463Z"
            fill="white"
          />
        </svg>
        <span>Додати оголошення</span>
      </Link>
    </>
  );
}
