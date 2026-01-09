export async function buscarAcessorios() {
  try {
    const response = await fetch('./data/acessorios.json');
    if (!response.ok) throw new Error('Erro ao buscar acessorios');
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}