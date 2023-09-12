import { Separator } from "@/components/ui/separator";
import { FormVideoSelector } from "./FormVideoSelector";
import { FormPromptSelector } from "./FormPromptSelector";

export function Aside () {
  return (
    <aside className="w-80 space-y-6">
      <FormVideoSelector />
      <Separator />
      <FormPromptSelector />
    </aside>
  );
}