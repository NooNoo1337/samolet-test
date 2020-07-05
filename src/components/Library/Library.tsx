import React from "react";
import { useParams } from "react-router-dom";
import { useLib } from "../../contexts/libsContext";

import { Card, PageHeader } from "antd";

const backInHistory = (): void => window.history.back();

const Library = () => {
  const { id } = useParams();
  const lib = useLib(Number(id));

  if (!lib) return null;

  const {
    territory,
    libraries,
    librariesComputers,
    numberOfPersonalComputersInLibrariesUnits,
    employees,
    subscribers,
  } = lib;

  return (
    <Card
      style={{ width: "100%" }}
      title={
        <div>
          <PageHeader title={territory} onBack={backInHistory} />
        </div>
      }
    >
      <ul>
        <li>Адрес: {lib.address}</li>

        <li>Кол-во библиотек в регионе: {libraries} шт.</li>

        <li>Кол-во компьютеров в библиотеках: {librariesComputers} шт.</li>

        <li>
          Кол-во персональных компьютеров в библиотеках:
          {numberOfPersonalComputersInLibrariesUnits} шт.
        </li>

        <li>Общее кол-во работников: {employees} чел.</li>

        <li>Кол-во читателей: {subscribers} чел.</li>
      </ul>
    </Card>
  );
};

export default Library;
