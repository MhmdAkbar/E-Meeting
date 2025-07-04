// import LogoutIcon from "./icon/LogoutIcon";
import LogoutIcon from "../../atoms/icon/LogoutIcon";

export default function Header({ text = "" }) {
  return (
    <div className="flex justify-between px-3 sticky top-0 z-30 bg-white/70 backdrop-blur border-b border-gray-200 pt-3">
      <div>
        <h1 className="text-xl font-bold">{text}</h1>
      </div>

      <div className="flex justify-between  gap-5 items-center">
        <div className="flex gap-2 p-1">
          <img
            src="../../public/img/background/bg-login.jpg"
            className="w-10 h-10 rounded-full"
            alt=""
          />

          <section>
            <p>akbar</p>
            <p className="text-[#919191] text-sm">user</p>
          </section>
        </div>

        <div>
          <LogoutIcon />
        </div>
      </div>
    </div>
  );
}
