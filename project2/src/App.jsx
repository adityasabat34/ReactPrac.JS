import { useState } from 'react';

const App = () => {
  const [colors, setColors] = useState('green');
  return (
    <div
      className="w-full h-screen duration-800"
      style={{ backgroundColor: colors }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColors('red')}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: 'red' }}
          >
            RED
          </button>
          <button
            onClick={() => setColors('olive')}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: 'olive' }}
          >
            Olive
          </button>
          <button
            onClick={() => setColors('pink')}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: 'pink' }}
          >
            Pink
          </button>
          <button
            onClick={() => setColors('yellow')}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg border-radius"
            style={{ backgroundColor: 'yellow' }}
          >
            Yellow
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
