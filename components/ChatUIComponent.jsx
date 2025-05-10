import React from 'react'

const ChatUIComponent = () => {
  return (
    <div className='chat-ui'>
      <div className="chat-area">
        <div className="chat-user"><h3>Omeya</h3></div>
        <div className="chats">
          <div className="chat">
            <div className="left">Hey!</div>
            <div className="right">Hi!</div>
          </div>
        </div>
        <div className="chat-box">
          <input className='chat-field' placeholder='Message' autoFocus/>
        </div>
      </div>
      <div className="chat-users"></div>
    </div>
  )
}

export default ChatUIComponent;