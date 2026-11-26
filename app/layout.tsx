export const metadata = {
  title: 'bf16.ai Next.js Starter',
  description: 'Streaming chat starter powered by bf16-ai-sdk-provider and 1M-context uncensored LLMs.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'system-ui, sans-serif', margin: 0 }}>{children}</body>
    </html>
  );
}
