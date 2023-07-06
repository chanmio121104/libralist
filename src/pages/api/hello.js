// Next.js の API Routes について: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  // 実在する人物とは関係ありません
  res.status(200).json({ name: '江崎 太郎' });
}
