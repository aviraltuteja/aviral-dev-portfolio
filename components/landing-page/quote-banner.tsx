export default function QuoteBanner(): React.ReactElement {
  return (
    <div className="w-full h-[50vh]  bg-[#e9e9e9] flex items-center justify-center flex-col px-[15vw] gap-2">
      <div className="text-4xl font-light text-[#111111]">{`The best way to complain about bad code is to write good code.`}</div>
      <div className="text-2xl font-light self-end text-[#333333]">
        ~ Read it in a book
      </div>
    </div>
  );
}
