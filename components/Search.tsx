/**
 * A search component that allows users to search for components and documentation within the Keep React project.
 *
 * @param showModal - A boolean that determines whether or not the search modal is visible.
 * @param setShowMainModal - A function that sets the visibility of the search modal.
 *
 * @returns A React component that renders a search modal with search functionality and recent search history.
 */
import Link from "next/link";
import { CaretRight, MagnifyingGlass, XCircle } from "phosphor-react";
import React, {
  useState,
  useEffect,
  FC,
  Dispatch,
  SetStateAction,
} from "react";

import { Modal, Skeleton, TextInput } from "~/src";
import { getData, storeData } from "~/utils/Searching";
import { twMerge } from "tailwind-merge";

interface Result {
  id: number; // The id of the result.
  name: string; // The name of the result.
  href: string; // The href of the result.
  sections: { title: string; id: string }[]; // The sections of the result with title and id.
}

export interface result {
  id: number; // The id of the result.
  name: string; // The name of the result.
  href: string; // The href of the result.
  sections: [
    // The sections of the result.
    {
      title: string; // The title of the section.
      id: string; // The id of the section.
    }
  ];
}

interface SearchProps {
  showModal: boolean; // A boolean that determines whether or not the search modal is visible.
  setShowMainModal: Dispatch<SetStateAction<boolean>>; // A function that sets the visibility of the search modal.
}

const projectUrl: string = `https://react.keepdesign.io`;

const Search: FC<SearchProps> = ({ showModal, setShowMainModal }) => {
  const [query, setQuery] = useState<string>(""); // The search query.
  const [results, setResults] = useState<Result[]>([]); // The search results.
  const [loading, setLoading] = useState<boolean>(false); // A boolean that determines whether or not the search results are loading.

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (query) {
      setLoading(true);
      timeout = setTimeout(() => {
        performSearch(query);
      }, 1000);
    } else {
      setLoading(false);
      setResults([]);
    }

    return () => clearTimeout(timeout);
  }, [query]);

  /**
   * Perform search
   * @description Perform search on the basis of query
   * @param {string} query - Search query
   * @returns {void}
   * @param query
   */

  const performSearch = async (query: string) => {
    try {
      const res = await fetch("/data/search.json");
      const data = await res.json();
      const result = data.filter((com: Result) => {
        const queryStr = query.toLowerCase();
        return (
          com.name.toLowerCase().includes(queryStr) ||
          com.sections.some((section) =>
            section.title.toLowerCase().includes(queryStr)
          )
        );
      });
      setResults(result);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  /**
   * Store data
   * @description Store data in local storage
   * @returns void
   */

  if (results.length > 0 && !loading) {
    storeData({
      id: results[0].id,
      name: results[0].name,
      href: results[0].href,
    });
  }

  /**
   * Get stored data
   * @description Get stored data from local storage
   * @returns An array of data items.
   */

  const storedData = getData();

  return (
    <Modal position="top-center" size="xl" show={showModal}>
      <div className="p-3">
        <div className="flex items-center justify-between  border-b border-b-slate-50 pb-1">
          <p className="text-slate-900 text-base font-semibold">
            Search at Keep React
          </p>
          <button
            onClick={() => setShowMainModal(!showModal)}
            className="text-slate-900 hover:text-slate-600"
          >
            <XCircle size={20} />
          </button>
        </div>
        <form className="mt-2">
          <div>
            <TextInput
              id="#id-10"
              placeholder="Search Component"
              color="gray"
              sizing="md"
              type="text"
              addon={<MagnifyingGlass size={20} color="#5E718D" />}
              addonPosition="left"
              value={query}
              handleOnChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </form>

        <p
          className={twMerge(
            "text-sm font-normal text-slate-500",
            storedData?.length || results?.length ? "py-3" : "pt-2"
          )}
        >
          {!query && !storedData.length ? (
            <span>No recent searches</span>
          ) : !query && storedData.length ? (
            <span>Recent searches</span>
          ) : (
            <span>Documentation</span>
          )}
        </p>

        {!query && storedData.length
          ? storedData?.map((item: result) => (
              <Link
                key={item.id}
                href={projectUrl + item.href}
                className="p-3 rounded bg-slate-100 hover:bg-slate-900 hover:text-white transition-colors mb-1 text-sm font-medium text-slate-900 first:mt-1  flex items-center justify-between"
              >
                <span>{item.name}</span>
                <span>
                  <CaretRight size={20} color="#ccc" />
                </span>
              </Link>
            ))
          : null}

        {loading ? (
          <div>
            <Skeleton animation>
              <Skeleton.Line height="h-12" />
              <Skeleton.Line height="h-12" />
              <Skeleton.Line height="h-12" />
              <Skeleton.Line height="h-12" />
            </Skeleton>
          </div>
        ) : query && results.length ? (
          results?.slice(0, 1).map((item) => (
            <div key={item.id}>
              <Link
                href={projectUrl + item.href}
                className="p-3 rounded hover:bg-slate-800 text-white transition-colors mb-1 text-sm font-medium bg-slate-900 first:mt-1 flex items-center justify-between"
              >
                <span>{item.name}</span>
                <span>
                  <CaretRight size={20} color="#ccc" />
                </span>
              </Link>
              <div className="flex flex-col gap-2">
                {item?.sections?.slice(0, 5).map((sec) => (
                  <Link
                    className="flex items-center justify-between p-3 text-sm font-normal bg-slate-100 hover:bg-slate-900 hover:text-white rounded"
                    key={sec.id}
                    href={projectUrl + item.href + sec.id}
                  >
                    <span>{sec.title}</span>
                    <span>
                      <CaretRight size={20} color="#ccc" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))
        ) : !loading && query && !results.length ? (
          <div>
            <p className="text-center text-sm font-medium text-slate-400">
              No Result Found with "{query}" word
            </p>
          </div>
        ) : null}
      </div>
    </Modal>
  );
};

export default Search;
