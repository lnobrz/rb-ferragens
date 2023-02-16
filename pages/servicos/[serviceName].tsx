import { useRouter } from "next/router";

const Service = () => {
  const router = useRouter();
  const { serviceName } = router.query;

  return (
    <h1>
      {serviceName &&
        typeof serviceName === "string" &&
        serviceName.replaceAll("-", " ")}
    </h1>
  );
};

export default Service;
