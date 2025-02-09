export const formatDate = dateString => {
  const date = new Date(dateString);

  const day = String(date.getDate() + 1).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  const hours = String(date.getHours() + 1).padStart(2, '0');
  const minutes = String(date.getMinutes() + 1).padStart(2, '0');
 
  return `${day}.${month}.${year} - ${hours}:${minutes}`;
};
