export async function buscarAudio() {
  try {
    const response = await fetch('../data/audio.json');
    if (!response.ok) throw new Error('Erro ao buscar audio');
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}