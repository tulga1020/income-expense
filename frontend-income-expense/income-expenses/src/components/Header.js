export const Header = () => {
  return (
    <header>
      <div className="bg-white w-screen h-[72px]">
        <Svg />
        <button>Dashboard</button>
        <button>Records</button>
      </div>
      <div>
        <Buttons />
        <div className="rounded-full w-10 h-10">
          <Image href="./propicture.png" />
        </div>
      </div>
    </header>
  );
};
