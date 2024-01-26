

function Plan() {
  return (
    <div className="bg-gradient-to-b from-[#2e3e58] to-[#21283c] text-white py-[50px]">
      <div className="w-[980px] mx-auto text-center">
        <div className="p-[1.5em] ">
          <h2 className="text-[40px] font-bold">
            New to Apple platforms?
          </h2>
          <p className="text-[19px] mt-0">
            Get familiar with the tools and technologies you’ll use to build apps and games. <br /> The Apple development ecosystem provides everything you need to bring incredible experiences <br /> to people around the world.
          </p>
          <ul className="grid grid-cols-6">
            <li >
              <a href="#" className="inline-block">
                <img src="https://developer.apple.com/assets/elements/icons/platforms/icon-ios-i.svg" alt="" />
                <span className="uppercase hover:underline ">
                  ios
                </span>
              </a>
            </li>
            <li >
              <a href="#" className="inline-block ">
                <img src="https://developer.apple.com/assets/elements/icons/platforms/icon-ipados-i.svg" alt="" />
                <span className=" hover: uppercase">
                  <span className="capitalize">    ipads </span>   os
                </span>
              </a>
            </li>
            <li >
              <a href="#" className="inline-block ">
                <img src="https://developer.apple.com/assets/elements/icons/platforms/icon-macos-i.svg" alt="" />
                <span className=" hover: uppercase">
                  <span className="normal-case">    macs </span>   os
                </span>
              </a>
            </li>
            <li >
              <a href="#" className="inline-block ">
                <img src="https://developer.apple.com/assets/elements/icons/platforms/icon-tvos-i.svg" alt="" />
                <span className=" hover: uppercase">
                  <span className="normal-case">    tv </span>   os
                </span>
              </a>
            </li>
            <li >
              <a href="#" className="inline-block ">
                <img src="https://developer.apple.com/assets/elements/icons/platforms/icon-visionos-i.svg" alt="" />
                <span className=" hover: uppercase">
                <span className="normal-case">vision</span> OS
                </span>
              </a>
            </li>
            <li >
              <a href="#" className="inline-block ">
                <img src="https://developer.apple.com/assets/elements/icons/platforms/icon-watchos-i.svg" alt="" />
                <span className=" hover: uppercase">
                <span className="normal-case">watch</span> OS
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Plan