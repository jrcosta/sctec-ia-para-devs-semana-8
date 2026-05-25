import "./globals.css";

export const metadata = {
  title: "AgendaEdu",
  description: "Gestao e priorizacao de compromissos escolares.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
