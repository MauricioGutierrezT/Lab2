import { useFetch } from "../hooks/useFetch";
import { useCounter } from "../hooks/useCounter";

export const Posts = () => {

  const { counter, increment, decrement } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${counter}`
  );

  return (
    <div className="api-container">

      <h1>Posts API</h1>

      {isLoading && <p>Loading...</p>}
      {hasError && <p>Error loading post</p>}

      {!isLoading && data && (
        <div className="api-card">
          <h2>{data.title}</h2>
          <p>{data.body}</p>
        </div>
      )}

      <div className="buttons">
        <button 
          onClick={decrement} 
          disabled={counter <= 1}
        >
          Previous
        </button>

        <button 
          onClick={increment}
          disabled={counter >= 100}
        >
          Next
        </button>
      </div>

    </div>
  );
};
