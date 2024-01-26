import Search from "../icon/magnifying-glass";

function Navbar() {
  return (
    <div className="bg-[rgba(240,240,240,0.8)]">
      <div className="max-w-[980px] mx-auto">
        <ul className="flex justify-between items-center pl-[calc(max(22px, env(safe-area-inset-left)))] pr-[calc(max(22px, env(safe-area-inset-right)))]">
          <li>
            <a href="#">
              <img className="w-[115px]" src="https://developer.apple.com/assets/elements/icons/brandmark/apple-developer-brandmark.svg" alt="" />
            </a>
          </li>
          <li><a href="#" className="capitalize">news</a></li>
          <li><a href="#" className="capitalize">discover</a></li>
          <li><a href="#" className="capitalize">design</a></li>
          <li><a href="#" className="capitalize">develop</a></li>
          <li><a href="#" className="capitalize">distribute</a></li>
          <li><a href="#" className="capitalize">support</a></li>
          <li><a href="#" className="capitalize">account</a></li>
          <li><a href="#" className="capitalize"><Search /></a></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
