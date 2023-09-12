import { Textarea } from "@/components/ui/textarea";

export function PromptTextAreas () {
  return (
    <div className="flex flex-col flex-1 gap-4">
      <div className="grid grid-rows-2 gap-4 flex-1">
        <Textarea
          placeholder="Inclua o prompt para a IA..." 
          className="resize-none p-5 leading-relaxed"
        />
        <Textarea
          placeholder="Resultado gerado pela IA..." 
          className="resize-none p-5 leading-relaxed"
          readOnly
        />
      </div>

      <p className="text-sm text-muted-foreground">
        Lembre-se: você pode utilizar a variável <code className="text-violet-400">{'{transcription}'}</code> no seu prompt para adicionar o conteúdo da transcrição do vídeo selecionado.
      </p>
    </div>
  );
}