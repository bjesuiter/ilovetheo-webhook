import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>I ♡ Theo</title>
        {/* link global styles */}
        <link rel="stylesheet" href="/global.css" />
      </Head>
      <div class="p-4 app-shell bg-black text-white ">
        <h1 class="message text-7xl font-sans">I ❤️ Theo!</h1>
      </div>
    </>
  );
}
