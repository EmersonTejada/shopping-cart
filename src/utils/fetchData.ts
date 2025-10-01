const fetchData = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Hubo un error al obtener productos");
  }
  return res.json();
};

export default fetchData;
