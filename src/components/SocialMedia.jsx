import { styles } from '../styles';
import { github, youtube, notion } from '../assets';
import { mediaLinks } from '../constants'; 

const Media = ({ icon, link }) => {
    return (
        <div
        onClick={() => window.open(link, "_blank")}
        className="dark-blue-gradient w-20 h-20
        rounded-full flex justify-center items-center cursor-pointer 
        my-[10%]"
        >
        <img
            src={icon}
            alt="notion"
            className="w-[45%] h-[45%]
            object-conntain"
        />
        </div>
    )
}

const SocialMedia = () => {
    return (
      <div className="fixed bottom-0 right-0 mx-[2%] my-[2%]">
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