export default function NotFound() {
  return (
    <main className="not-found">
      <div className="container">
        <h1>404 - Página não encontrada</h1>
        <p>Desculpe, a página que você está procurando não existe.</p>
        <a href="/" className="btn btn-red">
          Voltar ao início
        </a>
      </div>
    </main>
  );
}
