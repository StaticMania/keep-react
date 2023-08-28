"use client";
import Link from "next/link";
import { InstantSearch, SearchBox, Hits, Configure } from "react-instantsearch";
import algoliasearch from "algoliasearch/lite";
import { TreeStructure, X } from "phosphor-react";
import { Dispatch, SetStateAction } from "react";

const SeachClient = algoliasearch(
  "H6VZGNLGZS",
  "1f581ea946822459c0d039b5ab959064"
);

const SearchModal = ({
  setShowModal,
}: {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="fixed z-[90] inset-0 flex items-center justify-center">
      <div className="absolute inset-0 bg-slate-900/80"></div>
      <button
        className="absolute top-5 right-5"
        onClick={() => setShowModal(false)}
      >
        <X size="28" color="#fff" />
      </button>
      <div className="relative z-10 md:w-[700px] w-full h-auto md:h-[480px] bg-white overflow-y-auto rounded-md">
        <InstantSearch indexName={"keep-docs"} searchClient={SeachClient}>
          <SearchBox
            className="border-b px-5 py-4 border-b-slate-50 bg-slate-50 w-full focus:outline-none placeholder:text-sm"
            placeholder="Search here"
            autoFocus={false}
          />
          <Configure analytics={false} hitsPerPage={3} />

          <div className="mx-5 my-3">
            <Hits hitComponent={Hit} />
          </div>
        </InstantSearch>
      </div>
    </div>
  );
};

export default SearchModal;

const Hit = ({ hit }: any) => {
  return (
    <div>
      <Link href={hit.href} className="block my-3">
        <div className="bg-slate-50 transition-all duration-100 hover:bg-slate-900 group rounded-md py-2.5 px-5">
          <p className="font-bold text-base text-slate-900 group-hover:text-white">
            {hit.name}
          </p>
          <p className="text-sm font-normal text-slate-500 group-hover:text-slate-100">
            {hit.href}
          </p>
        </div>
      </Link>
      {hit?.sections?.map((section: any) => (
        <Link
          href={hit.href + section?.id}
          key={section?.id}
          className="block my-3 pl-5"
        >
          <div className="flex items-center gap-3 bg-slate-50 transition-all duration-100 hover:bg-slate-900 group rounded-md py-2 px-5">
            <div className="text-slate-900 group-hover:text-white">
              <TreeStructure size={24} />
            </div>
            <div>
              <p className="font-medium text-sm text-slate-900 group-hover:text-white">
                {section?.title}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
