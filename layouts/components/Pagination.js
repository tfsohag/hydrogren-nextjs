import Link from "next/link";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

const Pagination = ({ page, numOfPage }) => {
  const hasPrevPage = page > 1;
  const hasNextPage = numOfPage > page;

  return (
    <div className="mx-auto mb-20 flex w-1/4 items-center justify-between rounded-full bg-light">
      {hasPrevPage ? (
        <Link href={`/posts/page/${page - 1}`} passHref>
          <a className="border-border-default block border-r py-4 px-5 text-center">
            <IoChevronBackOutline />
          </a>
        </Link>
      ) : (
        <span className="border-border-default block cursor-not-allowed border-r py-4 px-5 text-center">
          <IoChevronBackOutline />
        </span>
      )}
      <span>
        <strong> {page < 9 ? "0" + page : page}</strong>/
        {numOfPage < 9 ? "0" + numOfPage : numOfPage}
      </span>
      {hasNextPage ? (
        <Link href={`/posts/page/${page + 1}`} passHref>
          <a className="border-border-default block border-l py-4 px-5 text-center">
            <IoChevronForwardOutline />
          </a>
        </Link>
      ) : (
        <span className="border-border-default block cursor-not-allowed border-l py-4 px-5 text-center">
          <IoChevronForwardOutline />
        </span>
      )}
    </div>
  );
};

export default Pagination;
