export type DropDownNumbersProps = {
  phoneNumbers?: {
    mainNumber: {
      fullNumber: string;
      shortNumber: string;
    };
    secondNumbers: {
      fullNumber: string;
      shortNumber: string;
    }[];
  };
};
