var tinycolor = require("tinycolor2");

let colors: string[] = [
  "#EFECF4",
  "#E6F0FF",
  "#E7F8FF",
  "#EDFFF8",
  "#F4FDE8",
  "#FFFEE4",
  "#FFF6E7",
  "#FDE8E6",
];

export const colorPicker: any = (index: number) => {
  //return colors[Math.floor(Math.random() * colors.length)];
  return colors[index % colors.length];
};

export const setGrpColor: any = (list: any[], itemId: string) => {
  var grpColor: string = "#FFFFFF";
  list.map((listObj: any) => {
    if (listObj.group === itemId) {
      grpColor = listObj.color;
    }
  });
  return grpColor;
};
