import React from "react";
import img_1 from "../images/img.1.png";
import img_2 from "../images/img.2.png";
import img_3 from "../images/img.3.png";
import img_4 from "../images/img.4.png";
import ImgBoy from "../images/boy-yo 1.png";

function Main() {
  const TopPlayers = [
    { id: 1, name: "Zumutung", rancking: 14002 },
    { id: 2, name: "The_Joker", rancking: 10300 },
    { id: 3, name: "TheDogzBollox", rancking: 5000 },
    { id: 4, name: "Ralle_1705", rancking: 4800 },
    { id: 5, name: "MegaDaddyGX", rancking: 4000 },
    { id: 6, name: "Wolfblack", rancking: 3600 },
    { id: 7, name: "Deebo916", rancking: 3000 },
    { id: 8, name: "Pipapo", rancking: 2850 },
    { id: 9, Lothos: "Zumutung", rancking: 2500 },
    { id: 10, name: "TamaStef", rancking: 2000 },
    { id: 11, name: "Tama_King", rancking: 1300 },
  ];
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-10/12">
        <div className="flex ml-3 justify-start text-2xl px-4 py-4">
          <h1>tamadoge run</h1>
          <div className="flex md:py-0 py-2">
            <h1>Current Prize Pool: 4461 $tama</h1>
            <div className="text-[#FFB951]">
              <ion-icon name="alert-circle-outline"></ion-icon>
            </div>
          </div>
        </div>

        <div className="flex w-full">
          <div className="w-9/12">
            <div className="w-full">
              <img className="w-full" src={img_1} alt="" />
            </div>
            <div className="flex gap-3 w-full pt-2">
              <img className="w-48" src={img_2} alt="" />
              <img className="w-48" src={img_3} alt="" />
              <img className="w-48" src={img_4} alt="" />
              <img className="w-48" src={img_3} alt="" />
            </div>
          </div>

          <div className="w-3/12">
            <div className="h-36 w-full ml-8 border-black border-2"></div>
            <div className="h-auto w-full mt-5 ml-8 border-2 border-black">
              <div className="flex justify-center">
                <h1>leaderboard</h1>
                <div className="text-[#FFB951]">
                  <ion-icon name="alert-circle-outline"></ion-icon>
                </div>
              </div>
              <div className="">
                <ul>
                  {TopPlayers.map((item) => (
                    <li className="py-3 px-2" key={item.id}>
                      {item.id}. {item.name}{" "}
                      <span className="text-[#FFB951]">{item.rancking}</span>{" "}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center w-10/12">
        <div className="flex justify-center w-full">
          <button className="py-9">
            <h1
              className="text-center border-2 w-auto border-black 
          text-black py-2 px-6 rounded  cursor-pointer 
           hover:text-[#FFB951] hover:border-[#FFB951] duration-500"
            >
              Run Tama Run!
            </h1>
          </button>
        </div>
        <div className="flex justify-center w-full">
          <h3 className="text-center w-auto">
            Navigate your doggo through this spooky endless runner! The aim is
            to collect as many coins <br /> as you can to increase your score
            whilst your character auto runs. Make sure to <br />
            collect bones to top up your stamina but avoid obstacles that damage
            your health. The game <br />
            ends when either your health or stamina runs out or you fall off a
            cliff!
          </h3>
        </div>
        <div className="flex justify-center w-full">
          <button className="py-9">
            <h1
              className="text-center border-2 w-auto border-black 
          text-black py-2 px-6 rounded  cursor-pointer 
           hover:text-[#FFB951] hover:border-[#FFB951] duration-500"
            >
              How To Play
            </h1>
          </button>
        </div>

        <div className="flex justify-center items-center w-full">
          <ion-icon name="caret-back-outline"></ion-icon>
          <div className="w-full flex bg-[#60B49C] h-40 relative">
            <div className="px-2 py-2">
              <h1 className="text-white">
                COLLECT coins to increase your score
              </h1>
              <p className="text-white">
                Collect as many coins as you can to increase your <br /> score.
                Choose your path carefully - some <br /> platforms have coins
                and others have enemies!
              </p>
            </div>
            <img
              className="w-80 h-60 absolute bottom-0 right-0"
              src={ImgBoy}
              alt=""
            />
          </div>
          <ion-icon name="caret-forward-outline"></ion-icon>
        </div>
      </div>
    </div>
  );
}

export default Main;
