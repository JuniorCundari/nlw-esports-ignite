import { useEffect, useState } from "react";
import axios from "axios";

import CardInfoAd from "../CardInfoAd";
import MatchModal from "../MatchModal";
export interface AdsBanner {
  id: string;
  name: string;
  hourEnd: string;
  hourStart: string;
  useVoiceChannel: boolean;
  weekDays: string[];
  yearsPlaying: number;
}

export default function CardAd(props: AdsBanner) {
  const [discord, setDiscord] = useState('');

  useEffect(() => {
    axios(`http://localhost:3333/ads/${props.id}/discord`).then((response) => {
      setDiscord(response.data);
    });
  }, []);

  return (
    <ul className="text-white p-5 bg-[#2A2634] w-60 rounded-2xl keen-slider__slide">
      <CardInfoAd
        label="Nome"
        value={props.name}
      />

      <CardInfoAd
        label="Tempo de jogo"
        value={`${props.yearsPlaying} anos`}
      />

      <CardInfoAd
        label="Disponibilidade"
        value={`${props.weekDays.length} dias \u2022 ${props.hourStart} - ${props.hourEnd}`}
      />

      <CardInfoAd
        label="Chamada de áudio"
        value={props.useVoiceChannel ? "Sim" : "Não"}
        colorValue={props.useVoiceChannel ? "text-emerald-400" : "text-red-400"}
      />

      <MatchModal discord={discord} />
    </ul>
  );
}