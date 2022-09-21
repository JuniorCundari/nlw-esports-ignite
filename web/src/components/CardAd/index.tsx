import CardInfoAd from "../CardInfoAd";

export interface AdsBanner {
  name: string;
  hourEnd: string;
  hourStart: string;
  useVoiceChannel: boolean;
  weekDays: string[];
  yearsPlaying: number;
}

export default function CardAd(props: AdsBanner) {
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
    </ul>
  );
}