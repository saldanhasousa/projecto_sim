export async function buscarCarossel() {
  try {
    const response = await fetch('../data/carossel.json');
    if (!response.ok) throw new Error('Erro ao buscar carrossel');
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}