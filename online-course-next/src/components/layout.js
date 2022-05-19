/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { useCallback ,useState} from 'react';
import Sticky from 'react-stickynode';
import { useStickyState } from '../contexts/app/app.provider';
import { Waypoint } from 'react-waypoint';
import { useStickyDispatch } from '../contexts/app/app.provider';
import Header from './header/header';
import Footer from './footer/footer';
import ChatBoxIcon from "../assets/chatbox-icon.svg"
let TEMP = [];
export default function Layout({ children }) {
  const [openChatBox,setOpenChatBox] = useState(false);
  const [message,setMessage] = useState("");
  const [messageArray,setMessageArray] = useState([]);
  const isSticky = useStickyState('isSticky');
  const dispatch = useStickyDispatch();
  const setSticky = useCallback(() => dispatch({ type: 'SET_STICKY' }), [
    dispatch,
  ]);
  const removeSticky = useCallback(() => dispatch({ type: 'REMOVE_STICKY' }), [
    dispatch,
  ]);

  const onWaypointPositionChange = ({ currentPosition }) => {
    if (currentPosition === 'above') {
      setSticky();
    }
    if (currentPosition === 'below') {
      removeSticky();
    }
  };
  const openChatWindow = () =>{
    if(openChatBox){
      setOpenChatBox(false);
      return;
    }
    setOpenChatBox(true);
  }

  const sendMessageToTheBackendHandler = () =>{
    if(message===""){
      alert("Enter some message")
      return;
    }
    let temp = {"question":"","answer":""}
    temp.question = message;
    fetch('http://127.0.0.1:5000/predict', {
            method: 'POST',
            body: JSON.stringify({ message: message }),
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json'
            },
          })
          .then(res => {
            console.log(res)
            return res.json();
          }).then(data=>{
            temp.answer = data.answer;
            setMessageArray([...messageArray,temp]);
            setMessage("")
            // console.log(" Temp ",temp)
            // console.log(messageArray)
            // console.log(data);
          })
          
        }
  return (
    <React.Fragment>
      <Sticky enabled={isSticky} innerZ={991}>
        <Header classNameName={`${isSticky ? 'sticky' : 'unSticky'}`} />
      </Sticky>
      <Waypoint
        onEnter={removeSticky}
        // onLeave={setSticky}
        onPositionChange={onWaypointPositionChange}
      />

      <main
        sx={{
          variant: 'layout.main',
        }}
      >
        {children}
      </main>
      <div className="container">
    <div className="chatbox">
        <div className={` chatbox__support ${openChatBox ? 'chatbox--active' : ''}`} >
            <div className="chatbox__header">
                <div className="chatbox__image--header">
                    <img src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-5--v1.png" alt="image"/>
                </div>
                <div className="chatbox__content--header">
                    <h4 className="chatbox__heading--header">Chat support</h4>
                    <p className="chatbox__description--header">Hi. My name is Siri.I'm an AI bot how can I help you?</p>
                </div>
            </div>
            <div className="chatbox__messages">
                <div>
                  {messageArray.map((msg,i)=>{
                    return(
                      <div key={i}>
                    <div className="messages__item messages__item--visitor">{msg.question}</div>
                    <div className="messages__item messages__item--operator">{msg.answer}  </div>
                    </div>
                    )
                    
                  })}
                </div>
            </div>
            <div className="chatbox__footer">
                <input type="text" placeholder="Write a message..." value={message} onChange={(e)=>setMessage(e.target.value)}/>
                <button className="chatbox__send--footer send__button" onClick={sendMessageToTheBackendHandler}>Send</button>
            </div>
        </div>
        <div className="chatbox__button" onClick={()=>openChatWindow()}>
            <button><img src={ChatBoxIcon} className="chatbotImage"/></button>
        </div>
    </div>
</div>

      <Footer />
    </React.Fragment>
  );
}
