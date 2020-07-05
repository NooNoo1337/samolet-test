export interface LibraryDTO {
  address: string;
  buildings_disrepair: number;
  buildings_management: number;
  buildings_repair: number;
  computers: number;
  copies: number;
  copies_electronic: number;
  copies_issued: number;
  copies_issued_children: number;
  digital_catalogs: number;
  dropped_copies: number;
  electronic_catalogue_volume: number;
  employees: number;
  employees_staff: number;
  formname: string;
  fullname: string;
  funds: number;
  funds_acquisition: number;
  funds_budget: number;
  funds_entrepreneurial: number;
  "funds_main_activity,_thousand_rubles": number;
  "funds_staff,_thousand_rubles": number;
  funds_used: number;
  "individual_subscribers_(information_services),_units": number;
  internet: number;
  internet_catalogs: number;
  internet_catalogue_volume: number;
  issued_electronic: number;
  kopuk: string;
  libraries: number;
  libraries_computers: number;
  "number_of_personal_computers_in_libraries,_units": number;
  order: number;
  out_of_instances: number;
  period: string;
  received_copies: number;
  received_electronic: number;
  site: number;
  staff_higheeducated: number;
  "staff_vocational,_people": number;
  subscribers: number;
  territory: string;
  users: number;
  users_children: number;
  visits: number;
  visits_sites: number;
}

export interface Library {
  address: string;
  buildingsDisrepair: number;
  buildingsManagement: number;
  buildingsRepair: number;
  computers: number;
  copies: number;
  copiesElectronic: number;
  copiesIssued: number;
  copiesIssuedChildren: number;
  digitalCatalogs: number;
  droppedCopies: number;
  electronicCatalogueVolume: number;
  employees: number;
  employeesStaff: number;
  formName: string;
  fullName: string;
  funds: number;
  fundsAcquisition: number;
  fundsBudget: number;
  fundsEntrepreneurial: number;
  fundsMainActivityInThousandRubles: number;
  fundsStaffInThousandRubles: number;
  fundsUsed: number;
  individualSubscribersInformationServicesUnits: number;
  internet: number;
  internetCatalogs: number;
  internetCatalogueVolume: number;
  issuedElectronic: number;
  kopuk: string;
  libraries: number;
  librariesComputers: number;
  numberOfPersonalComputersInLibrariesUnits: number;
  order: number;
  outOfInstances: number;
  period: string;
  receivedCopies: number;
  receivedElectronic: number;
  site: number;
  staffHigheeducated: number;
  staffVocationalPeople: number;
  subscribers: number;
  territory: string;
  users: number;
  usersChildren: number;
  visits: number;
  visitsSites: number;
}