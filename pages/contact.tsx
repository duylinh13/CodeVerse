// pages/contact.tsx

import Layout from "@/components/Layout";
import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) return alert("Vui lòng điền tên và nội dung!");

    console.log("📨 Góp ý:", { name, email, message });
    alert("Cảm ơn bạn đã gửi góp ý!");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Layout title="Contact Us" description="Send your feedback to CodeVerse.">
      <div className="max-w-xl mx-auto  p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-4 text-purple-700">
          💬 Gửi góp ý
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Tên của bạn *</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-md dark:bg-zinc-800 dark:text-white"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Email (tuỳ chọn)</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md dark:bg-zinc-800 dark:text-white"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Nội dung góp ý *</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              className="w-full px-4 py-2 border rounded-md dark:bg-zinc-800 dark:text-white"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-md transition"
          >
            Gửi góp ý
          </button>
        </form>
      </div>
    </Layout>
  );
}
