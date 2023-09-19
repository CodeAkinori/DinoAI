export default {
  // Função para calcular a distância entre dois pontos (objetos) em um plano.
  getDistance(obj1, obj2) {
    // Fórmula: raiz quadrada da soma dos quadrados das diferenças das coordenadas x e y.
    return Math.sqrt(Math.abs(obj1.x - obj2.x) ** 2 + Math.abs(obj1.y - obj2.y) ** 2);
  },
}