/**
 * Feedbacks reais de alunas e alunos, curados dos chats das aulas
 * (Zoom — {reprograma}, Minas Programam, Tera). Nomes reduzidos a
 * primeiro nome + inicial por respeito à privacidade. Os textos são
 * mantidos no português original (autenticidade do depoimento).
 */
const FEEDBACKS = [
  { name: "Elis M.",       time: "20:58", text: "Paula é a melhor professora de Git em linha reta 😄" },
  { name: "Carol L.",      time: "21:02", text: "Paula, você é incrível! Didática ímpar 👏" },
  { name: "Adriele V.",    time: "21:03", text: "Você é, sem dúvida, a melhor Expert. Sempre explica com muita paciência e facilidade!" },
  { name: "Beatriz T.",    time: "21:05", text: "Obg pela aula, Paula! Sensacional como sempre 💜" },
  { name: "Aline A.",      time: "21:07", text: "Gratidão, Paula! Suas aulas foram incríveis ♥️" },
  { name: "Adriana G.",    time: "21:09", text: "Amei a sua explicação, Paula ❤️ sua didática tá ótima" },
  { name: "Tiago L.",      time: "21:12", text: "Gostei muito das aulas de back-end 🙌" },
  { name: "Edu C.",        time: "21:14", text: "Paula, você é incrível, obrigada por tudo!!!" },
  { name: "Alika S.",      time: "21:16", text: "Muito obrigada pela aula! Foi incrível" },
  { name: "Adson P.",      time: "21:18", text: "Mentoria top, aprendi muito 🚀" },
  { name: "Alessandra R.", time: "21:21", text: "Você é top, Paula!" },
  { name: "Carla P.",      time: "21:23", text: "Muito obrigada pela aula! Maravilhosa" },
  { name: "Aline (Almeida)", time: "21:25", text: "Parabéns pela didática, Paula. Sensacional!" },
  { name: "Aline M.",      time: "21:28", text: "Obrigada por tudo, Paula. Quero ser como você quando crescer 🥹" },
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
