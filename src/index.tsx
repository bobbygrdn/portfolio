import './index.css';
import { AppRouter } from "./AppRouter";
import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
root.render(<AppRouter />);