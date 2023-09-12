import { Header } from "./children/header";
import { Body } from "./children/body";


export function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 p-6 flex gap-6">
        <Body />
      </main>
    </div>
  )
}
