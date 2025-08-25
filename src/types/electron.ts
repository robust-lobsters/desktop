export type RendererApi = {
  ping: () => Promise<string>
  // 여기에 실제로 expose할 메서드를 추가
}
