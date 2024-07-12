import './App.css';
import socket from './server';
import { useEffect, useState } from 'react';
import InputField from './components/InputField/InputField';

function App() {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    askUserName();
  }, []);

  const askUserName = () => {
    const userName = prompt('당신의 이름을 입력하세요');
    socket.emit('login', userName, (res) => {
      if (res?.ok) {
        setUser(res.data);
      }
    });
  };

  const sendMessage = () => {};

  return (
    <div>
      <div className="App">
        <InputField
          message={message}
          setMessage={setMessage()}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
}

export default App;
