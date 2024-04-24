import {Menu} from './Components/Menu/Menu';
import {Loading} from './Components/Loading/Loading';

import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => setLoading(false), 5300)
    }, [])
    if (loading) {
        return <Loading/>
    }
  return (<>
      <Menu/>
    </>
);

}

export default App;
