import { GameController, CheckCircle, X, Copy } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog';

import { Input } from "../Form/Input";

interface Props {
  discord: string;
}

export default function MatchModal({ discord }: Props) {

  const getDiscord = Object.values(discord).toString();

  async function handleCopyDiscordToClipboard() {
    await navigator.clipboard.writeText(getDiscord)

    alert('Usuário copiado para área de transferência!');
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger className="py-3 px-4 w-full bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center justify-center gap-3 duration-300">
        <GameController className="w-6 h-6"/>
          Conectar
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
        <Dialog.Content className="flex fixed bg-[#2A2634] text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[350px] shadow-lg shadow-black/25">
          <div className="flex flex-col items-center w-full py-10">
            <CheckCircle 
              size={64}
              className="text-green-400"
            />
            <Dialog.Title className="text-3xl font-black mt-6">Let's play!</Dialog.Title>
            <Dialog.Description className="text-zinc-400">Agora é só começar a jogar!</Dialog.Description>
            <div className="flex flex-col items-center">
              <label htmlFor="discord" className="mt-6 mb-2">Adicione no Discord</label>
              <div className="flex items-center">
                <Input className="relative" name="discord" type="text" value={getDiscord} disabled />
                <Copy onClick={handleCopyDiscordToClipboard} className="absolute right-14 cursor-pointer bg-zinc-300 rounded text-black" size={20} weight="thin" />
              </div>
            </div>
          </div>
          <Dialog.Close asChild className="fixed right-0 m-2 cursor-pointer">
            <X size={25} weight="thin" />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}