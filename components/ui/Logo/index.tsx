import Image from "next/image";

type LogoTypes = {
  className?: string;
};

const Logo = ({ className }: LogoTypes) => {
  return (
    <Image
      src={`/images/logo.png`}
      width={100}
      height={100}
      sizes="100%"
      alt="logo"
      className={className}
    />
  );
};

export default Logo;
