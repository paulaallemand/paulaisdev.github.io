/**
 * Feedbacks reais de estudantes, curados dos chats das aulas
 * (Zoom — {reprograma}, Minas Programam, Tera). Nomes reduzidos a
 * primeiro nome + inicial por respeito à privacidade. Os textos são
 * mantidos no português original (autenticidade do depoimento).
 */
const FEEDBACKS = [
  { name: "Carol L.",     time: "20:54", text: "Paula, você é incrível! Didática ímpar 👏" },
  { name: "Adriele V.",   time: "20:56", text: "Você é, sem dúvida, a melhor Expert. Sempre explica com muita paciência e facilidade!" },
  { name: "Pâmela F.",    time: "20:58", text: "Você tem uma didática incrível e seu senso de humor faz toda a diferença. Obrigada pelas orientações 💜" },
  { name: "Anna C.",      time: "21:00", text: "Prof, obrigada por tudo! Você é incrível, essas semanas foram maravilhosas com você 💖" },
  { name: "Adriana G.",   time: "21:01", text: "Sua didática tá ótima ❤️" },
  { name: "Aline A.",     time: "21:03", text: "Parabéns pela didática, Paula. Sensacional! ✨" },
  { name: "Ana B.",       time: "21:05", text: "Amei sua didática e sua paciência ❤️ espero que você volte nas cenas dos próximos capítulos!" },
  { name: "Adson P.",     time: "21:06", text: "Mentoria top, aprendi muito 🚀" },
  { name: "Bárbara B.",   time: "21:08", text: "Paula é muita inspiração, gente! Ainda mais pra quem está fazendo transição de carreira." },
  { name: "Tiago L.",     time: "21:10", text: "Gostei muito das aulas de back-end 🙌" },
  { name: "David R.",     time: "21:11", text: "Valeu, Paula! Ótima aula, bem explicativa e didática." },
  { name: "Ana G.",       time: "21:13", text: "Foi super didático, consegui acompanhar direitinho. Bom demais!" },
  { name: "Aline (Alves)", time: "21:14", text: "Gostei muito da aula, prof! Me ajudou a esclarecer e me deu ânimo 💜" },
  { name: "Brenda M.",    time: "21:16", text: "Você é uma alquimista dos códigos, hahaha. Obrigada por tudo 🥹" },
  { name: "Elis M.",      time: "21:18", text: "Paula é a melhor professora de Git em linha reta 😄" },
  { name: "Claudiane F.", time: "21:19", text: "Espero que volte em breve, Paula 💜" },
  { name: "Carla P.",     time: "21:21", text: "Muito obrigada pela aula! Maravilhosa 💜" },
  { name: "Gabi Z.",      time: "21:23", text: "Muito obrigada pela aula, maravilhosa 🥰🙏" },
  { name: "Re D.",        time: "21:24", text: "Amei a didática, hehe" },
  { name: "Ariel G.",     time: "21:26", text: "Só agradecer mesmo. Gratidão! 🙏" },
  { name: "Ruth S.",      time: "21:28", text: "Você é uma inspiração ✨" },
  { name: "Daniele N.",   time: "21:30", text: "Obrigada, Paula… ótima aula!" },
  { name: "Alan F.",      time: "21:32", text: "Paula, amei a aula! Você é incrível 🌟" },
  { name: "Aline M.",     time: "21:34", text: "Obrigada por tudo, Paula. Quero ser como você quando crescer 🥹" },
];

// Paleta de avatares — tons quentes/on-brand derivados do marsala
const AVATAR_COLORS = [
  "#6f1d1b", "#a23e2a", "#8b4a48", "#b5651d",
  "#7d2e46", "#9c5a3c", "#5e3023", "#c05538",
];

function initials(name) {
  const parts = name.replace(/[()]/g, "").trim().split(/\s+/);
  const first = parts[0][0] || "";
  const second = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + second).toUpperCase();
}
