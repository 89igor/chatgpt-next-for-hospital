import { FC } from 'react';

interface Props {
  text: string;
  icon: JSX.Element;
  onClick: () => void;
}

export const SidebarButton: FC<Props> = ({ text, icon, onClick }) => {
  return (
    <button
      className="flex w-full cursor-pointer select-none items-center rounded-md py-3 px-3 text-[14px] leading-3 text-black transition-colors duration-200 hover:bg-gray-500/10"
      onClick={onClick}
    >
      <div className='mr-3'>{icon}</div>
      <span>{text}</span>
    </button>
  );
};
