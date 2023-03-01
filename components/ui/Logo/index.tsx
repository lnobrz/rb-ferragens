import Image from "next/image";

type LogoTypes = {
  logoDirection: "left" | "right";
};

const Logo = ({ logoDirection }: LogoTypes) => {
  return (
    <Image
      src={`/images/logo-${logoDirection === "left" ? "left" : "right"}.svg`}
      fill={true}
      alt="logo"
      className="logo"
    />
  );
};

export default Logo;
