import { Link } from "@/components/atoms/Link";
import { css } from "@emotion/react";

export function NavLink() {
  const navLinksStyles = css`
    display: flex;
    gap: 20px;

    & a {
      display: flex;
      padding: 15px;
      border-radius: 10px;
      font-size: 15px;
      font-weight: bold;
      color: white;
      text-decoration: none;
      align-items: center;
    }
    & a:hover {
      color: black;
      background-color: white;
    }

    & a svg {
      width: 15px;
      height: 15px;
    }
  `;

  return (
    <div css={navLinksStyles}>
      <Link href="/products">
        <span>서비스</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </Link>
      <Link href="/">
        <span>고객 지원</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </Link>
      <Link href="/">
        <span>회사 소개</span>
      </Link>
      <Link href="/">
        <span>매뉴얼</span>
      </Link>
    </div>
  );
}
