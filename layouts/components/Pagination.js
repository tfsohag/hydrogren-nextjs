import Link from "next/link";
import React from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const Pagination = ({ page, numOfPage }) => {
  const hasPrevPage = page > 1;
  const hasNextPage = numOfPage > page;

  return (
    <div className="mx-auto mb-20 flex w-1/4 items-center justify-between rounded-full bg-light">
      {hasPrevPage ? (
        <Link href={`/posts/page/${page - 1}`} passHref>
          <a className="block border-r border-border-default py-4 px-5 text-center">
            <MdArrowBackIos />
          </a>
        </Link>
      ) : (
        <span className="block cursor-not-allowed border-r border-border-default py-4 px-5 text-center">
          <MdArrowBackIos />
        </span>
      )}
      <span>
        <strong> {page < 9 ? "0" + page : page}</strong>/
        {numOfPage < 9 ? "0" + numOfPage : numOfPage}
      </span>
      {hasNextPage ? (
        <Link href={`/posts/page/${page + 1}`} passHref>
          <a className="block border-l border-border-default py-4 px-5 text-center">
            <MdArrowForwardIos />
          </a>
        </Link>
      ) : (
        <span className="block cursor-not-allowed border-l border-border-default py-4 px-5 text-center">
          <MdArrowForwardIos />
        </span>
      )}
    </div>
  );
};

export default Pagination;
