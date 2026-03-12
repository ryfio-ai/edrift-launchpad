import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const cannedResponses = [
  { q: "What voltages do you support?", a: "We support 48V, 60V, 72V, 84V, 96V, 240V, and 400V nominal output voltages." },
  { q: "What's your lead time?", a: "Typical lead time is 4–6 weeks for standard configurations. Contact sales for bulk orders." },
  { q: "Do you offer customization?", a: "Yes! We offer custom voltage, power ratings, and enclosure designs. Reach out to our engineering team." },
];

const ChatBubble = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ from: "user" | "bot"; text: string }>>([
    { from: "bot", text: "Hi! 👋 I'm eDrift Support. How can I help you?" },
  ]);

  const handleCanned = (item: typeof cannedResponses[0]) => {
    setMessages((prev) => [...prev, { from: "user", text: item.q }, { from: "bot", text: item.a }]);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg btn-glow hover:scale-105 transition-transform"
      >
        {open ? <X className="w-6 h-6 text-primary-foreground" /> : <MessageCircle className="w-6 h-6 text-primary-foreground" />}
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-40 w-80 max-h-[28rem] bg-card rounded-2xl shadow-2xl border border-border flex flex-col overflow-hidden animate-fade-in-up">
          <div className="p-4 bg-primary rounded-t-2xl">
            <h4 className="font-display font-semibold text-primary-foreground text-sm">eDrift Support</h4>
            <p className="text-xs text-primary-foreground/70">Typically replies instantly</p>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[10rem]">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] px-3 py-2 rounded-xl text-sm ${
                  msg.from === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground"
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 border-t border-border space-y-2">
            <p className="text-xs text-muted-foreground">Quick questions:</p>
            {cannedResponses.map((item, i) => (
              <button
                key={i}
                onClick={() => handleCanned(item)}
                className="w-full text-left text-xs px-3 py-2 rounded-lg bg-muted hover:bg-muted/80 text-foreground transition-colors"
              >
                {item.q}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBubble;
