declare interface ICommandBarCommandSetStrings {
  Command1: string;
  Command2: string;
}

declare module 'CommandBarCommandSetStrings' {
  const strings: ICommandBarCommandSetStrings;
  export = strings;
}
