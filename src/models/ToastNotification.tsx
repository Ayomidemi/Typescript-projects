import * as React from 'react';
import { MdClose, MdCheck} from "react-icons/md";

interface IToastNotificationProps {
    type: string
    text: string
    icon: any
    onclick: () => void;
}

const ToastNotification: React.FunctionComponent<IToastNotificationProps> = ({ type, text, onclick, icon }) => {
  return (
    <>
    
     <div className='toast-notification'>
      <div className='notification-container'>
        <span className='notification-content'>
            <MdCheck
                className={type === "success" ? "icon success" : "icon error"}
            />
            <p>
              {text}
            </p>
        </span>
        <button className='close' onClick={onclick}>
            <MdClose />
        </button>
      </div>
    </div>
   
    </>
  );
};

export default ToastNotification;
