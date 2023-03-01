import Image from "next/image";

type LogoTypes = {
  logoDirection: "left" | "right";
  className?: string;
};

const Logo = ({ logoDirection, className }: LogoTypes) => {
  return (
    <Image
      src={`/images/logo-${logoDirection === "left" ? "left" : "right"}.svg`}
      fill={true}
      alt="logo"
      className={className}
    />
  );
};

export default Logo;
