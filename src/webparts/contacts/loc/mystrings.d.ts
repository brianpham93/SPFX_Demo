declare interface IContactsStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'contactsStrings' {
  const strings: IContactsStrings;
  export = strings;
}
