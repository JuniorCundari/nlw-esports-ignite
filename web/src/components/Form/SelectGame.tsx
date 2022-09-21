import { useEffect, useState } from "react";
import axios from 'axios';
import * as Select from '@radix-ui/react-select';

import { CaretDown } from "phosphor-react";

import { Game } from '../../@types/games';

export function SelectGame() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    axios('http://localhost:3333/games').then((response) => {
      setGames(response.data);
    });
  }, []);

  return (
    <Select.Root name="game">
      <Select.Trigger className="flex justify-between bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500">
        <Select.Value
          placeholder="Selecione o game que deseja jogar"
          />
        <Select.Icon>
          <CaretDown size={24} weight="thin" />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className="text-white bg-zinc-900 rounded">
          <Select.Viewport>
            <Select.Group>
              {games.map((game) => {
                 return <Select.Item
                    className="flex items-center px-4 hover:bg-zinc-600 rounded"
                    key={game.id}
                    value={game.id}
                  >
                     <Select.SelectItemText>
                      {game.title}
                     </Select.SelectItemText>
                  </Select.Item>
                })}
            </Select.Group>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
