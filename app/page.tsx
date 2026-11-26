export default function HomePage() {
  return (
    <main style={{ maxWidth: 680, margin: '64px auto', padding: '0 24px' }}>
      <h1>bf16.ai Next.js AI SDK Starter</h1>
      <p>Wired to <code>bf16-ai-sdk-provider</code> &amp; <code>https://api.bf16.ai/v1</code> with strict Zero Data Retention.</p>
      <p>POST <code>/api/chat</code> with JSON <code>{`{"messages":[{"role":"user","content":"Hello"}]}`}</code> once <code>BF16_API_KEY</code> is set.</p>
    </main>
  );
}
