export const getAuthHeaders = () => {
  const token = sessionStorage.getItem("token");
  return {
    Authorization: `Bearer ${JSON.parse(token)}`,
  };
};

export const getAuthHeadersForUsers = () => {
  const token = sessionStorage.getItem("token");
  return {
    Authorization: `Bearer ${JSON.parse(token)}`,
    "Content-Type": "application/json",
  };
};
