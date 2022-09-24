import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import logoImg from '../../assets/logo-nlw-esports.svg';

import CardAd from '../../components/CardAd';
import HeaderPageAd from '../../components/HeaderPageAd';

import { Game } from '../../@types/games';

import { useKeenSlider } from "keen-slider/react";

interface AdsBanner {
  id: string;
  name: string;
  hourEnd: string;
  hourStart: string;
  useVoiceChannel: boolean;
  weekDays: string[];
  yearsPlaying: number;
}

export default function ListAds() {
  const [ads, setAds] = useState<AdsBanner[]>([]);
  const [datas, setDatas] = useState<Game[]>([]);
  const { id } = useParams();

  const sliderOptions = {
    breakpoints: {
      "(max-width: 400px)": {
        slides: {
          perView: 1.5,
          spacing: 24,
        },
      },
      "(min-width: 400px)": {
        slides: {
          perView: 2,
          spacing: 24,
        },
      },
      "(min-width: 685px)": {
        slides: {
          perView: 3,
          spacing: 24,
        },
      },
      "(min-width: 970px)": {
        slides: {
          perView: 4.3,
          spacing: 24,
        },
      },
      "(min-width: 1255px)": {
        slides: {
          perView: 5.3,
          spacing: 24,
        },
      },
    },
  };

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>();

  useEffect(() => {
    axios(`http://localhost:3333/games/${id}/ads`).then((response) => {
      setAds(response.data);
    });
  }, []);

  useEffect(() => {
    axios('http://localhost:3333/games').then((response) => {
      setDatas(response.data);
    });
  }, []);

  useEffect(() => {
    instanceRef.current?.update({
      ...sliderOptions,
    });
  }, [instanceRef, sliderOptions]);

  const getDatas = datas.find((data) => {
    if (data.id === id) {
      const title = `${data.title}`
      const bannerUrl = `${data.bannerUrl}`
      const datasObject = [ {title: title, bannerUrl: bannerUrl} ]
      return datasObject
    }
  })

  return (
    <div className="max-w-[1344px] mx-auto overflow-hidden flex flex-col items-center my-20">
      <img src={logoImg} alt="" />
      <HeaderPageAd
        title={getDatas?.title}
        bannerUrl={getDatas?.bannerUrl}
        label="Conecte-se e comece a jogar!"
      />

      <div ref={sliderRef} className="keen-slider">
        {
        ads.length > 0 
          ? ads.map((ad) => {
            return (
              <CardAd
                key={ad.id}
                name={ad.name}
                yearsPlaying={ad.yearsPlaying}
                weekDays={ad.weekDays}
                hourStart={ad.hourStart}
                hourEnd={ad.hourEnd}
                useVoiceChannel={ad.useVoiceChannel}
              />
            );
          })
          : <span className="text-zinc-300 font-black text-[30px]">
              Ainda não há anúncios! 🥺
            </span>
        }
      </div>
    </div>
  );
}