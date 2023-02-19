export const saveLocalAuth = (auth) => {
  const { id, token, admin } = auth.data;
  console.log(auth.data);
  console.log(id, token);
  localStorage.setItem("userID", id);
  localStorage.setItem("token", token);
  localStorage.setItem("admin", admin);
  const userId = localStorage.getItem("userID");
};

export const clearLocalStorage = () => {
  localStorage.clear();
  window.location.reload();
};
