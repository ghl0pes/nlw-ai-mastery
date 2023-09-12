import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Wand2 } from "lucide-react";

export function FormPromptSelector () {
  return (
    <form className="space-y-6">
      <div className="space-y-2">
        <Label>Prompt</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Selecione um prompt..."/>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={"title"}>Título do YouTube</SelectItem>
            <SelectItem value={"description"}>Descrição do Youtube</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Modelo</Label>
        <Select defaultValue="gpt3.5" disabled>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={"gpt3.5"}>PGT 3.5-turbo 16k</SelectItem>
          </SelectContent>
        </Select>
        <span className="block text-xs text-muted-foreground italic">
          Você poderá customizar essa opção em breve.
        </span>
      </div>

      <Separator />

      <div className="space-y-4">
        <Label>Temperatura</Label>
        <Slider 
          min={0}
          max={1}
          step={0.1}
        />
        <span className="block text-xs text-muted-foreground italic">
          Valores mais altos tendem a deixar o resultado mais criativo e com possíveis erros.
        </span>
      </div>

      <Separator />

      <Button className="w-full">
        Executar
        <Wand2 className="w-4 h-4 ml-2"/>
      </Button>
    </form>
  );
}