import React, { useEffect, useRef, useState } from 'react';
import { Bot, MessageCircle, Send, X } from 'lucide-react';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

const starterQuestions = ['Tell me about Ajeet', 'What projects has Ajeet built?', "What are Ajeet's skills?"];

export const PortfolioChatbot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi! I'm Rudra 👋 Ask me anything about Ajeet's skills, projects, experience, education, or availability.",
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const sendMessage = async (text = input) => {
    const message = text.trim();
    if (!message || loading) return;

    const nextMessages = [...messages, { role: 'user' as const, content: message }];
    setMessages(nextMessages);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, history: nextMessages.slice(-8) }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Something went wrong.');

      setMessages((current) => [...current, { role: 'assistant', content: data.reply }]);
    } catch (error) {
      setMessages((current) => [
        ...current,
        {
          role: 'assistant',
          content: error instanceof Error ? error.message : 'Sorry, I could not answer right now. Please try again.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-[60]">
      {open && (
        <div className="mb-3 flex h-[min(600px,calc(100vh-110px))] w-[min(380px,calc(100vw-32px))] flex-col overflow-hidden rounded-2xl border border-[#E7E1D8] bg-white shadow-[0_20px_60px_-20px_rgba(17,17,17,0.3)]">
          <div className="flex items-center justify-between bg-[#111111] px-4 py-3 text-white">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C76B32]"><Bot size={21} /></div>
              <div><p className="font-semibold">Rudra</p><p className="text-xs text-white/60">Ajeet's Portfolio Assistant</p></div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close Rudra" className="rounded-full p-2 text-white/70 transition hover:bg-white/10 hover:text-white"><X size={18} /></button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto bg-[#FAF8F3] p-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                  message.role === 'user'
                    ? 'rounded-br-md bg-[#C76B32] text-white'
                    : 'rounded-bl-md border border-[#E7E1D8] bg-white text-[#222222]'
                }`}>
                  {message.content}
                </div>
              </div>
            ))}

            {messages.length === 1 && !loading && (
              <div className="space-y-2 pt-1">
                {starterQuestions.map((question) => (
                  <button key={question} onClick={() => sendMessage(question)} className="block w-full rounded-xl border border-[#E7E1D8] bg-white px-3 py-2 text-left text-xs text-[#444] transition hover:border-[#E5A06A] hover:bg-[#FFF9F4]">
                    {question}
                  </button>
                ))}
              </div>
            )}

            {loading && <div className="flex justify-start"><div className="rounded-2xl rounded-bl-md border border-[#E7E1D8] bg-white px-4 py-3 text-sm text-[#777]">Rudra is thinking<span className="animate-pulse">...</span></div></div>}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={(event) => { event.preventDefault(); sendMessage(); }} className="border-t border-[#E7E1D8] bg-white p-3">
            <div className="flex items-center gap-2 rounded-xl border border-[#E7E1D8] bg-[#FAF8F3] px-3 py-1.5 focus-within:border-[#C76B32]">
              <input value={input} onChange={(event) => setInput(event.target.value)} maxLength={1200} placeholder="Ask Rudra..." aria-label="Ask Rudra" className="min-w-0 flex-1 bg-transparent py-2 text-sm outline-none placeholder:text-[#999]" />
              <button type="submit" disabled={!input.trim() || loading} aria-label="Send message" className="rounded-lg bg-[#C76B32] p-2 text-white transition hover:bg-[#ad5826] disabled:cursor-not-allowed disabled:opacity-40"><Send size={16} /></button>
            </div>
          </form>
        </div>
      )}

      <button onClick={() => setOpen((value) => !value)} aria-label={open ? 'Close Rudra chatbot' : 'Open Rudra chatbot'} className="group flex items-center gap-2 rounded-full border border-[#E7E1D8] bg-white p-2 pr-4 shadow-[0_12px_35px_-12px_rgba(17,17,17,0.35)] transition duration-300 hover:-translate-y-1 hover:border-[#E5A06A]">
        <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#C76B32] text-white">
          {open ? <X size={21} /> : <MessageCircle size={22} />}
          {!open && <span className="absolute right-0 top-0 h-3 w-3 rounded-full border-2 border-white bg-[#55A630]" />}
        </span>
        <span className="font-semibold text-[#111111]">Rudra</span>
      </button>
    </div>
  );
};

export default PortfolioChatbot;
