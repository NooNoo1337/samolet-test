import React, { FC, useContext, createContext } from "react";
import { Library } from "../../interfaces/Library/Library";
import { libraryResolver } from "../../interfaces/Library/resolver";
import { useFetch } from "../hooks/useFetch";

const LIBS_URI =
  "/opendata/7705851331-stat_library/data-2016-11-10T00-00-00-structure-2016-09-12T00-00-00.json";

const LibsContext = createContext<Library[] | null>(null);

export const LibsProvider: FC = ({ children }) => {
  const { data } = useFetch(LIBS_URI, true, libraryResolver);

  if (!data) return null;

  return <LibsContext.Provider value={data}>{children}</LibsContext.Provider>;
};

export const useLibs = (): Library[] => {
  const libs = useContext(LibsContext);

  if (!libs) {
    throw Error("No libs were provided!");
  }

  return libs;
};

export const useLib = (id: number): undefined | Library => {
  const libs = useContext(LibsContext);

  if (!libs) {
    throw Error("Lib was not found!");
  }

  return libs.find(({ order }) => order === id);
};
