import { useFetch } from '../hooks/useFetch';
import { useCounter } from '../hooks/useCounter';
import { Loading } from './Loading';
import { Card } from './Card';

export const CustomHook = () => {

  const { counter, decrement, increment, reset } = useCounter(1);

  const { data, hasError, isLoading } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${counter}`
  );

  return (
    <>

      <h1 className="text-center mt-3">Información de Pokemon</h1>
      <hr />

      {isLoading && <Loading />}

      {!isLoading && data && (
        <div className="d-flex justify-content-center mt-4">
          <Card
            id={counter}
            name={data?.name}
            sprites={[
              data?.sprites?.front_default,
              data?.sprites?.front_shiny,
              data?.sprites?.back_default,
              data?.sprites?.back_shiny,
            ]}
          />
        </div>
      )}

      <div className="d-flex justify-content-center gap-3 mt-4">

        <button
          className='btn btn-primary'
          onClick={() => decrement()}
          disabled={counter <= 1}
        >
          Anterior
        </button>

        <button
          className='btn btn-success'
          onClick={() => increment()}
        >
          Siguiente
        </button>

        <button
          className='btn btn-danger'
          onClick={() => reset()}
        >
          Reset
        </button>

      </div>

    </>
  );
};
