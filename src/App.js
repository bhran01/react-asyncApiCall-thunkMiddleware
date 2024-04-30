import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { getUserData } from './actionCreator/actionCreator';

function App() {

  let state = useSelector(stateObj => stateObj);
  let dispatch = useDispatch();

  return (
    <>
      <button onClick={() => { dispatch(getUserData()) }}>Call the API</button>
      <ul>
        {
          state && state.map((cv, idx, arr) => {
            return <li key={idx}>{cv.first_name}</li>
          })
        }
      </ul>
    </>
  );
}

export default App;
