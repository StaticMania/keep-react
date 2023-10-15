import Link from "next/link";
import { CaretRight, X, XCircle } from "phosphor-react";
import React, {
  useState,
  useEffect,
  FC,
  Dispatch,
  SetStateAction,
} from "react";
import { Modal, Skeleton } from "~/src";
import { getData, storeData } from "~/utils/Searching";
import { twMerge } from "tailwind-merge";

interface Result {
  id: number;
  name: string;
  href: string;
  sections: { title: string; id: string }[];
}

export interface result {
  id: number;
  name: string;
  href: string;
  sections: [
    {
      title: string;
      id: string;
    }
  ];
}

interface SearchProps {
  showModal: boolean;
  setShowMainModal: Dispatch<SetStateAction<boolean>>;
}

const Search: FC<SearchProps> = ({ showModal, setShowMainModal }) => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<Result[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (query) {
      setLoading(true);
      timeout = setTimeout(() => {
        performSearch(query);
      }, 300);
    } else {
      setResults([]);
    }

    return () => clearTimeout(timeout);
  }, [query]);

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

  if (results.length > 0 && !loading) {
    storeData({
      id: results[0].id,
      name: results[0].name,
      href: results[0].href,
    });
  }

  const storedData = getData();

  return (
    <Modal position="top-center" size="xl" show={showModal}>
      <div className="flex items-center justify-between  border-b border-b-slate-50 pb-1">
        <p className="text-slate-900 text-sm font-semibold">
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
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            type="text"
            className="block border border-slate-100 w-full rounded py-2.5 px-4 focus:outline-none placeholder:text-sm placeholder:text-slate-500"
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
              href={`http://localhost:3000` + item.href}
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
              href={`http://localhost:3000` + item.href}
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
                  href={`http://localhost:3000` + item.href + sec.id}
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
    </Modal>
  );
};

export default Search;
