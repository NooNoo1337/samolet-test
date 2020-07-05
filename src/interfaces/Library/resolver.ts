import { Library, LibraryDTO } from "./Library";

export const libraryResolver = (lib: LibraryDTO): Library => {
  return {
    ...lib,
    buildingsDisrepair: lib.buildings_disrepair,
    buildingsManagement: lib.buildings_management,
    buildingsRepair: lib.buildings_repair,
    copiesElectronic: lib.copies_electronic,
    copiesIssued: lib.copies_issued,
    copiesIssuedChildren: lib.copies_issued_children,
    digitalCatalogs: lib.digital_catalogs,
    droppedCopies: lib.dropped_copies,
    electronicCatalogueVolume: lib.electronic_catalogue_volume,
    employeesStaff: lib.employees_staff,
    formName: lib.formname,
    fullName: lib.fullname,
    fundsAcquisition: lib.funds_acquisition,
    fundsBudget: lib.funds_budget,
    fundsEntrepreneurial: lib.funds_entrepreneurial,
    fundsMainActivityInThousandRubles:
      lib["funds_main_activity,_thousand_rubles"],
    fundsStaffInThousandRubles: lib["funds_staff,_thousand_rubles"],
    fundsUsed: lib.funds_used,
    individualSubscribersInformationServicesUnits:
      lib["individual_subscribers_(information_services),_units"],
    internetCatalogs: lib.internet_catalogs,
    internetCatalogueVolume: lib.internet_catalogue_volume,
    issuedElectronic: lib.issued_electronic,
    librariesComputers: lib.libraries_computers,
    numberOfPersonalComputersInLibrariesUnits:
      lib["number_of_personal_computers_in_libraries,_units"],
    outOfInstances: lib.out_of_instances,
    receivedCopies: lib.received_copies,
    receivedElectronic: lib.received_electronic,
    staffHigheeducated: lib.staff_higheeducated,
    staffVocationalPeople: lib["staff_vocational,_people"],
    usersChildren: lib.users_children,
    visitsSites: lib.visits_sites,
  };
};
