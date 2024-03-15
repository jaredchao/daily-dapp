import LoginButton from "./LoginButton";

export default function Header() {
  return (
    <header>
      <div className="mx-8 px-10 py-6 flex">
        <div className="flex items-center gap-x-3">
          <img className="w-10 h-10 rounded-lg" src="https://www.rainbowkit.com/rainbow.svg"></img>
          <span className="text-2xl tetx-white">Daily</span>
        </div>
        <div className="ml-auto">
          <LoginButton />
        </div>
      </div>
    </header>
  );
}
