import { ReactNode } from "react";
import { WhichValue } from "@/utils";

interface AsideClassNamesProps {
  container?: string,
}
interface LayoutProps {
  children?: ReactNode;
  ClassNames?: AsideClassNamesProps,
}

const Aside = ({ children, ClassNames }: LayoutProps) => {
  const Container = WhichValue(ClassNames?.container, 'm-0 p-[10px] gap-4 w-full max-w-[300px] h-[fit-content] top-0 flex flex-col flex-nowrap justify-start items-center sticky');

  return (
    <aside className={Container}>
      <h2>Sidebar</h2>
      <hr className="w-full" />
      {children}
    </aside>
  )
}

export default Aside;