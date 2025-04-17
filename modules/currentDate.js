const myDate = new Date();
export const currentDate =
  myDate.getDate().toString().padStart(2, "0") +
  "." +
  myDate.getMonth().toString().padStart(2, "0") +
  "." +
  myDate.getFullYear() +
  " " +
  myDate.getHours() +
  ":" +
  myDate.getMinutes().toString().padStart(2, "0");
