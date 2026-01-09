export async function buscarDesktop() {
  try {
    const response = await fetch('../data/desktop.json');
    if (!response.ok) throw new Error('Erro ao buscar desktop');
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}