import { DaysLeftElement } from './styles';

export type DaysLeftProps = {
  days: number
  fontSize: number
  smallFontSize: number
}

export default function DaysLeft({ days, fontSize, smallFontSize }: DaysLeftProps) {
  return (
    <DaysLeftElement fontSize={fontSize} smallFontSize={smallFontSize}>
      {days}
      <small>left</small>
    </DaysLeftElement>
  );
}
