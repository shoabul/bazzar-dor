
const BASE_URL = (process.env.NEXT_PUBLIC_API_BASE_URL || "").replace(/\/$/, "");
const API_PREFIX = "/api/bazardor";

async function request(path, { params, revalidate = 60, ...options } = {}) {
  const query = params
    ? "?" +
      new URLSearchParams(
        Object.entries(params).filter(([, v]) => v !== undefined && v !== null && v !== "")
      ).toString()
    : "";

  const url = `${BASE_URL}${API_PREFIX}${path}${query}`;

  try {
    const res = await fetch(url, {
      headers: { "Content-Type": "application/json" },
      next: { revalidate },
      ...options,
    });

    if (!res.ok) throw new Error(`API ${res.status}: ${url}`);
    return await res.json();
  } catch (error) {
    console.error("[API ERROR]", error.message);
    return null;
  }
}

export const api = {
  getCategories: () => request("/categories"),
  getCategory: (id) => request(`/categories/${id}`),
  getProducts: (filters) => request("/products", { params: filters }),
  getProduct: (id) => request(`/products/${id}`),
};