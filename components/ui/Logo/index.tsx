import Image from "next/image";

const Logo = () => {
  return (
    <Image src="/images/logo.svg" fill={true} alt="logo" className="logo" />
  );
};

export default Logo;
