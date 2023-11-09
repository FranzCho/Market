"use client";
import React from "react";
import usePagination from "@lucasmogari/react-pagination";
import PagenationLink from "./PaginationLink";

interface PaginationProps {
  page: number;
  totalItems: number;
  perPage: number;
}

const Pagination = ({ page, totalItems, perPage }: PaginationProps) => {
  const { fromItem, toItem, getPageItem, totalPages } = usePagination({
    totalItems: totalItems,
    page: page,
    itemsPerPage: perPage,
    maxPageItems: 5,
  });

  const firstPage = 1;

  const nextPage = Math.min(page + 1, totalPages);
  const prevPage = Math.max(page - 1, firstPage);

  const arr = new Array(totalPages + 2);

  // console.log("getPageItem", getPageItem);
  // console.log("totalPages", totalPages);
  return (
    <div className="flex items-center justify-center gap-2 mt-4">
      {/* Item {fromItem}-{toItem} */}
      {[...arr].map((_, i) => {
        const { page, disabled, current } = getPageItem(i);
        // console.log("page, disabled, current", page, disabled, current);
        if (page === "previous") {
          return (
            <PagenationLink key={i} page={prevPage} disabled={disabled}>
              {"<"}
            </PagenationLink>
          );
        }
        if (page === "next") {
          return (
            <PagenationLink key={i} page={nextPage} disabled={disabled}>
              {">"}
            </PagenationLink>
          );
        }
        if (page === "gap") {
          return <span key={i}>...</span>;
        }
        return (
          <PagenationLink key={i} active={current} page={page}>
            {page}
          </PagenationLink>
        );
      })}
    </div>
  );
};

export default Pagination;
