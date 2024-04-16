import React from "react";
import requestIcon from "../../assets/icons/request-for-proposal.png";

type TitleAndButtonProps = {
  title: string;
  scrollToContact: (event: React.MouseEvent<HTMLDivElement>) => void;
};

const TitleAndButton: React.FC<TitleAndButtonProps> = ({
  title,
  scrollToContact,
}) => {
  return (
    <div
      className="font-header uppercase duration-500 hover:bg-secondary/80 py-3 px-6 rounded text-white shadow-lg drop-shadow bg-primary w-fit flex flex-row justify-center items-center mx-auto cursor-pointer"
      onClick={e => {
        e.preventDefault();
        scrollToContact(e);
      }}
    >
      <img src={requestIcon} alt={title} className="w-10 h-10" />
      {title}
    </div>
  );
};

export default TitleAndButton;
