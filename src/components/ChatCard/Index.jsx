import React from "react";
import User1Image from "../../assets/images/user/user-01.png";
import User2Image from "../../assets/images/user/user-02.png";
import User3Image from "../../assets/images/user/user-03.png";
import User4Image from "../../assets/images/user/user-04.png";
import User5Image from "../../assets/images/user/user-05.png";
import ChatCardRow from "./ChatCardRow";

const ChatCard = () => {
  return (
    <div class="col-span-12 rounded-sm border border-stroke bg-white py-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <h4 class="mb-6 px-7.5 text-xl font-bold text-black dark:text-white">
        Chats
      </h4>

      <div>
        <ChatCardRow
          img={User1Image}
          title="Devid Heilo"
          text="Hello, how are you?"
          ago=" . 12 min"
        />
        <ChatCardRow
          img={User2Image}
          title="Henry Fisher"
          text="I am waiting for you"
          ago=" . 5:54 PM"
        />
        <ChatCardRow
          img={User3Image}
          title="Wilium Smith"
          text="Where are you now?"
          ago=" . 10:12 PM"
        />
        <ChatCardRow
          img={User4Image}
          title="Henry Deco"
          text="Thank you so much!"
          ago=" . Oct 23"
        />
        <ChatCardRow
          img={User5Image}
          title="Jubin Jack"
          text="Where are you now?"
          ago=" . 10:12 PM"
        />
        <ChatCardRow
          img={User1Image}
          title="Devid Heilo"
          text="Hello, how are you?"
          ago=" . 12 min"
        />
      </div>
    </div>
  );
};

export default ChatCard;
