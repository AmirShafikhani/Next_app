import CustomFade from "../components/CustomFade";

const Test = () => {
  return (
    <div className="flex flex-col gap-12 [&>*]:bg-sky-500 [&>*]:p-12">
      {new Array(30).fill("").map((item, index) => (
        <CustomFade key={index}>
          <div className="">{index + 1}</div>
        </CustomFade>
      ))}
    </div>
  );
};

export default Test;
