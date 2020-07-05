import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Table, Input } from "antd/lib";
import { ColumnProps } from "antd/lib/table";

import { Library } from "../../interfaces/Library/Library";

import { useLibs } from "../contexts/libsContext";

const columns: ColumnProps<Library>[] = [
  {
    title: "Регион",
    dataIndex: "territory",
    key: "territory",
    render: (territory: string, { order }: Library) => (
      <Link to={`/lib/${order}`}>{territory}</Link>
    ),
  },
  {
    title: "Количество библиотек",
    dataIndex: "libraries",
    key: "libraries",
    sorter: (a: any, b: any) => a.libraries - b.libraries,
    defaultSortOrder: "descend" as "descend",
  },
];

const RegionsTable = () => {
  const [filteredRegions, setFilteredRegions] = useState<null | Library[]>(
    null
  );
  const libs = useLibs();

  const onSearch = (query: string): void => {
    const regions = libs.filter(({ territory }) =>
      territory.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredRegions(regions);
  };

  return (
    <>
      <div style={{ marginBottom: 20 }}>
        <Input.Search placeholder="Поиск по региону" onSearch={onSearch} />
      </div>

      <Table
        rowKey={({ order }) => order}
        columns={columns}
        dataSource={filteredRegions ? filteredRegions : libs}
      />
    </>
  );
};

export default RegionsTable;
