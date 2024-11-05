import { useState } from 'react';
const Counter = () => {
    const [count, setCount] = useState(0);


    return (
      <div className="flex flex-col justify-center items-center border-2 border-orange-400 bg-orange-50">
        <span className="font-bold text-5xl">{count}</span>
        <div>
          <button
            type="button"
            className="border-2 bg-white m-4 p-4 rounded"
            onClick={() => {
              setCount(count - 1);
              console.log(count);
            }}
          >
            Decrement
          </button>

          {/* <button
            type="button"
            className="border-2 bg-white m-4 p-4 rounded"
            onclick={() => {
              setCount(count + 1);
              console.log(count);
            }}
          >
            Increment
          </button> */}

          <button
            type="button"
            className="border-2 bg-white m-4 p-4 rounded"
            onClick={() => {
              setCount(count + 1);
              console.log(count);
                    }}
                >
                    Increment
          </button>
        </div>
      </div>
    );
    
}
export default Counter 