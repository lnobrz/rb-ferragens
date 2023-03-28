import Image from "next/image";

type LogoTypes = {
  className?: string;
};

const Logo = ({ className }: LogoTypes) => {
  return (
    <Image
      src={`/images/logo.png`}
      fill={true}
      alt="logo"
      className={className}
    />
  );
};

export default Logo;
