interface Props {
  label: string;
  value: string;
  colorValue?: string;
}

export default function CardInfoAd(props: Props) {
  return (
    <>
      <li
        className="text-zinc-300 text-sm"
      >
        {props.label}
      </li>
      <li className={`${props.colorValue} mb-4`}>{props.value}</li>
    </>
  );
}