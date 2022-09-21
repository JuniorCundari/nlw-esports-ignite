import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import * as Dialog from '@radix-ui/react-dialog';

import { CreateAdBanner } from "../../components/CreateAdBanner";
import { GameBanner } from "../../components/GameBanner";
import { CreateAdModal } from "../../components/CreateAdModal";

import logoImg from '../../assets/logo-nlw-esports.svg';

import { useKeenSlider } from "keen-slider/react";

import { Game } from '../../@types/games';

export default function Home() {
  const [games, setGames] = useState<Game[]>([]);

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
          perView: 3.3,
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
      "(min-width: 1550px)": {
        slides: {
          perView: 6.3,
          spacing: 24,
        },
      },
    },
  };

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(sliderOptions);

  useEffect(() => {
    axios('http://localhost:3333/games').then((response) => {
      setGames(response.data);
    });
  }, []);

  useEffect(() => {
    instanceRef.current?.update({
      ...sliderOptions,
    });
  }, [instanceRef, sliderOptions]);

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
        <img src={logoImg} alt="" />

        <h1 className="text-6xl text-white font-black mt-20">
          Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui.
        </h1>

        <div ref={sliderRef} className="mt-16 keen-slider">
          {games.map(game => {
            return (
              <Link 
                key={game.id} 
                to={`/games/${game.id}/ads`}
              >
                <GameBanner
                  title={game.title}
                  bannerUrl={game.bannerUrl}
                  adsCount={game._count.ads}
                />
              </Link>
            );
          })}
        </div>

        <Dialog.Root>
          <CreateAdBanner />

          <CreateAdModal />
        </Dialog.Root>
      </div>
  );
}