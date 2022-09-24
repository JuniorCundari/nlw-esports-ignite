export interface HeaderProps {
  title?: string;
  bannerUrl?: string;
  label?: string;
}

export default function HeaderPageAd(props: HeaderProps) {
  return (
    <div className="flex items-center w-full mt-16 mb-16">
        <img src={props.bannerUrl} alt="" className="rounded-2xl w-52"/>
        <div className="ml-8">
          <h1 className="text-5xl text-white font-black">{props.title}</h1>
          <span className="text-zinc-300">{props.label}</span>
        </div>
      </div>
  );
}