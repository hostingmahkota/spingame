import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: 'MisteriBox: Penjelajahan Misterius dalam Kotak Ajaib',
  description: 'Jelajahi Misteri dengan MisteriBox: Temukan Keajaiban di Setiap Kotak!',
}
const MisteriBoxLayout = ({children}:PropsWithChildren) => {
  return (
    <>
      {children}
    </>
  );
}

export default MisteriBoxLayout;