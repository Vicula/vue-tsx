export default interface SalesRep {
  SalesRepID?: number;
  CompanyName?: string;
  FirstName?: string;
  LastName?: string;
  EmailAddress?: string;
  Password?: string;
  PasswordSalt?: string;
  CellPhone?: string;
  Phone?: string;
  Fax?: string;
  City?: string;
  State?: string;
  PostalCode?: number;
  LastLoginDate?: string;
  LastPasswordChangedDate?: string;
  CreatedOn?: string;
  CreatedBy?: string;
  ModifiedOn?: string;
  ModifiedBy?: string;
  DeletedOn?: string;
  DeletedBy?: string;
  IsDeleted?: boolean;
}
