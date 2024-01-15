export const dateToStringFormat = (date: Date) => {
  const yyyy = date.getFullYear();
  let mm = (date.getMonth() + 1).toString();
  let dd = date.getDate().toString();
  if (dd.length === 1) dd = "0" + dd;
  if (mm.length === 1) mm = "0" + mm;

  return dd + "." + mm + "." + yyyy;
};
