import { Aside } from "./children/Aside";
import { PromptTextAreas } from "./children/PromptTextAreas";

export function Body () {
  return (
    <main className="flex-1 p-6 flex gap-6">
        <PromptTextAreas />
        <Aside />
    </main>
  )
}