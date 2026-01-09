export async function buscarProdutos() {
  try {
    const response = await fetch('../data/notebook.json');
    if (!response.ok) throw new Error('Erro ao buscar produtos');
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

