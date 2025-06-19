export const getData = async (route) => {
  const res = await fetch(
    `https://assignment-backend-ga98.onrender.com/api/${route}`
  );
  if (!res.ok) {
    throw new Error("There was an error");
  }
  return res.json();
};

export const getSubGategory = async () => {
  const res = await fetch(
    "https://assignment-backend-ga98.onrender.com/api/sub_category"
  );
  if (!res.ok) {
    throw new Error("There was an error");
  }
  return res.json();
};
export const getDuas = async () => {
  const res = await fetch(
    "https://assignment-backend-ga98.onrender.com/api/duas"
  );
  if (!res.ok) {
    throw new Error("There was an error");
  }
  return res.json();
};
