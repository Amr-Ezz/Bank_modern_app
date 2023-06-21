import { quotes } from "../assets";
import { people01, people02, people03 } from "../assets";
import styles from "../style";

const FeedbackCard = ({ content, name, title, img }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <img
      src={quotes}
      alt="double_qoutes"
      className="w-[42px] h-[27px] object-contain"
    />
    <p
      className={`font-poppins font-normal text-[18px] leading-[32px] text-white my-10`}
    >
      {content}
    </p>
    <div className="flex flex-row">
      <img className="w-[45px] h-[45px] rounded-full" src={img} alt="people" />
      <div className="flex flex-col ml-4">
      <h4 className={`text-white font-poppins text-[20px] font-normal`}>{name}</h4>
      <p className=" text-white opacity-50 semi-bold font-poppins font-medium text-[16px]"> {title}</p>
    </div>
    </div>
 
  </div>
);

export default FeedbackCard;
