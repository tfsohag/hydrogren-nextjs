import Link from "next/link";

const Pagination = ({ page, numOfPage }) => {
  const hasPrevPage = page > 1;
  const hasNextPage = numOfPage > page;

  return (
    // <div className="mx-auto mb-20 flex w-1/4 items-center justify-between rounded-full bg-light">
    //   {hasPrevPage ? (
    //     <Link href={`/posts/page/${page - 1}`} passHref>
    //       <a className="border-border-default block border-r py-4 px-5 text-center">
    //         <IoChevronBackOutline />
    //       </a>
    //     </Link>
    //   ) : (
    //     <span className="border-border-default block cursor-not-allowed border-r py-4 px-5 text-center">
    //       <IoChevronBackOutline />
    //     </span>
    //   )}
    //   <span>
    //     <strong> {page < 9 ? "0" + page : page}</strong>/
    //     {numOfPage < 9 ? "0" + numOfPage : numOfPage}
    //   </span>
    //   {hasNextPage ? (
    //     <Link href={`/posts/page/${page + 1}`} passHref>
    //       <a className="border-border-default block border-l py-4 px-5 text-center">
    //         <IoChevronForwardOutline />
    //       </a>
    //     </Link>
    //   ) : (
    //     <span className="border-border-default block cursor-not-allowed border-l py-4 px-5 text-center">
    //       <IoChevronForwardOutline />
    //     </span>
    //   )}
    // </div>

    <nav
      className="mb-4 flex justify-center -space-x-px"
      aria-label="Pagination"
    >
      {/* previous */}
      {hasPrevPage ? (
        <Link href={`/posts/page/${page - 1}`} passHref>
          <a className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50">
            <span className="sr-only">Previous</span>
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </Link>
      ) : (
        <span className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50">
          <span className="sr-only">Previous</span>
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      )}

      {/* page index */}
      <a
        href="#"
        aria-current="page"
        className="relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600"
      >
        {" "}
        1{" "}
      </a>
      <a
        href="#"
        className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
      >
        {" "}
        2{" "}
      </a>

      {/* next page */}
      {hasNextPage ? (
        <Link href={`/posts/page/${page - 1}`} passHref>
          <a className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50">
            <span className="sr-only">Next</span>
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </Link>
      ) : (
        <span className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50">
          <span className="sr-only">Next</span>
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      )}
    </nav>
  );
};

export default Pagination;
