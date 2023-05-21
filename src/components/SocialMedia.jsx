import { styles } from '../styles';
import { github, youtube, notion } from '../assets';
import { mediaLinks } from '../constants'; 

const Media = ({ icon, link }) => {
    return (
        <div
        onClick={() => window.open(link, "_blank")}
        className="blue-gradient w-[4.4rem] h-[4.4rem]
        rounded-full flex justify-center items-center cursor-pointer 
        my-[1rem]"
        >
        <img
            src={icon}
            alt="notion"
            className="w-[2.5em] h-[2.5em]
            object-conntain"
        />
        </div>
    )
}

const SocialMedia = () => {
    return (
      <div className="fixed bottom-[0%] right-[0%] mx-[1em]  my-[1em]">
        {mediaLinks.map((media, index) => (
          <Media 
            key={`Media-${index}`}
            index={index}
            {...media}
          />
        ))}
      </div>
    )
  }
  
  export default SocialMedia