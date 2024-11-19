export function extractTime(dateString) {
  const date = new Date(dateString);
  const now = new Date();

  const diffTime = now - date;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays >= 1) {
    return `${diffDays}d`;
  }

  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());
  return `${hours}:${minutes}`;
}

function padZero(number) {
  return number.toString().padStart(2, "0");
}
