import { Outlet } from "react-router-dom";
import "./RootLayout.css";
import { Header } from "../components/Header";
import { useMatches } from "react-router-dom";

export function RootLayout() {
  const matches = useMatches();
  let title = "";
  for (let i = matches.length - 1; i >= 0; i--) {
    if (matches[i].handle?.title) {
      title = matches[i].handle?.title;
      break;
    }
  }
  return (
    <>
      <Header title={title} />
      <main>
        <Outlet />
      </main>
    </>
  );
}
