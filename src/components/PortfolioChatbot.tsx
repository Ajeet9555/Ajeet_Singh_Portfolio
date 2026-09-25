import React, { useEffect, useRef, useState } from 'react';
import { Bot, MessageCircle, Send, X } from 'lucide-react';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

const starterQuestions = ['Tell me about Ajeet', 'What projects has Ajeet built?', "What are Ajeet's skills?"];

function renderInline(text: string): React.ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).filter(Boolean);

  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index} className="font-semibold text-[#111111]">{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={index}>{part.slice(1, -1)}</em>;
    }
    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
}

function RichMessage({ content, role }: { content: string; role: Message['role'] }) {
  if (role === 'user') return <>{content}</>;

  const lines = content.replace(/\r/g, '').split('\n');
  const blocks: React.ReactNode[] = [];
  let listItems: string[] = [];
  let listType: 'bullet' | 'number' | null = null;

  const flushList = () => {
    if (!listItems.length || !listType) return;
    const ListTag = listType === 'number' ? 'ol' : 'ul';
    blocks.push(
      <ListTag key={blocks.length} className={listType === 'number' ? 'my-2 list-decimal space-y-1 pl-5' : 'my-2 list-disc space-y-1 pl-5'}>
        {listItems.map((item, index) => <li key={index}>{renderInline(item)}</li>)}
      </ListTag>
    );
    listItems = [];
    listType = null;
  };

  lines.forEach((line) => {
    const trimmed = line.trim();

    if (!trimmed) {
      flushList();
      return;
    }

    const bullet = trimmed.match(/^[-•]\s+(.*)$/);
    const numbered = trimmed.match(/^\d+[.)]\s+(.*)$/);

    if (bullet) {
      if (listType && listType !== 'bullet') flushList();
      listType = 'bullet';
      listItems.push(bullet[1]);
      return;
    }

    if (numbered) {
      if (listType && listType !== 'number') flushList();
      listType = 'number';
      listItems.push(numbered[1]);
      return;
    }

    flushList();

    if (trimmed.startsWith('### ')) {
      blocks.push(<h4 key={blocks.length} className="mt-3 mb-1 font-semibold text-[#111111]">{renderInline(trimmed.slice(4))}</h4>);
    } else if (trimmed.startsWith('## ')) {
      blocks.push(<h3 key={blocks.length} className="mt-3 mb-1 text-[15px] font-semibold text-[#111111]">{renderInline(trimmed.slice(3))}</h3>);
    } else if (trimmed.startsWith('# ')) {
      blocks.push(<h3 key={blocks.length} className="mt-3 mb-1 text-[15px] font-semibold text-[#111111]">{renderInline(trimmed.slice(2))}</h3>);
    } else {
      blocks.push(<p key={blocks.length} className="my-1.5">{renderInline(trimmed)}</p>);
    }
  });

  flushList();

  return <div className="space-y-0.5">{blocks}</div>;
}

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
        <div className="mb-3 flex h-[min(620px,calc(100vh-105px))] w-[min(420px,calc(100vw-24px))] flex-col overflow-hidden rounded-2xl border border-[#E7E1D8] bg-white shadow-[0_24px_70px_-24px_rgba(17,17,17,0.35)]">
          <div className="flex shrink-0 items-center justify-between bg-[#111111] px-4 py-3.5 text-white">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C76B32]"><Bot size={20} /></div>
              <div>
                <p className="font-semibold leading-tight">Rudra</p>
                <p className="mt-0.5 text-xs text-white/60">Ajeet's Portfolio Assistant</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close Rudra" className="rounded-full p-2 text-white/70 transition hover:bg-white/10 hover:text-white">
              <X size={18} />
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto bg-[#FAF8F3] p-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 text-[14px] leading-[1.55] shadow-sm ${
                  message.role === 'user'
                    ? 'rounded-br-md bg-[#C76B32] text-white'
                    : 'rounded-bl-md border border-[#E7E1D8] bg-white text-[#333333]'
                }`}>
                  <RichMessage content={message.content} role={message.role} />
                </div>
              </div>
            ))}

            {messages.length === 1 && !loading && (
              <div className="space-y-2 pt-1">
                <p className="px-1 text-xs font-medium text-[#888]">Quick questions</p>
                {starterQuestions.map((question) => (
                  <button key={question} onClick={() => sendMessage(question)} className="block w-full rounded-xl border border-[#E7E1D8] bg-white px-3 py-2.5 text-left text-xs text-[#444] transition hover:border-[#E5A06A] hover:bg-[#FFF9F4]">
                    {question}
                  </button>
                ))}
              </div>
            )}

            {loading && (
              <div className="flex justify-start">
                <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md border border-[#E7E1D8] bg-white px-4 py-3 text-sm text-[#777]">
                  <span>Rudra is thinking</span>
                  <span className="flex gap-0.5">
                    <span className="animate-bounce">.</span><span className="animate-bounce [animation-delay:120ms]">.</span><span className="animate-bounce [animation-delay:240ms]">.</span>
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={(event) => { event.preventDefault(); sendMessage(); }} className="shrink-0 border-t border-[#E7E1D8] bg-white p-3">
            <div className="flex items-center gap-2 rounded-xl border border-[#E7E1D8] bg-[#FAF8F3] px-3 py-1.5 transition focus-within:border-[#C76B32] focus-within:ring-2 focus-within:ring-[#C76B32]/10">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                maxLength={1200}
                placeholder="Message Rudra..."
                aria-label="Message Rudra"
                className="min-w-0 flex-1 bg-transparent py-2 text-sm outline-none placeholder:text-[#999]"
              />
              <button type="submit" disabled={!input.trim() || loading} aria-label="Send message" className="rounded-lg bg-[#C76B32] p-2 text-white transition hover:bg-[#ad5826] disabled:cursor-not-allowed disabled:opacity-40">
                <Send size={16} />
              </button>
            </div>
            <p className="mt-1.5 text-center text-[10px] text-[#aaa]">Rudra answers using Ajeet's portfolio information.</p>
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
