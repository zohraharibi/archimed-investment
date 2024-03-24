export const formatDate = (dateObj: string | Date): string => {
  const dateString = dateObj instanceof Date ? dateObj.toISOString() : dateObj;
  const formattedDateString = new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  return formattedDateString;
};