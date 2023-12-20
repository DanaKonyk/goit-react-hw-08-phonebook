import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Contacts from './Contacts'

export const App = () => {
//   const listOfContacts = useSelector(selectContacts);
//   const loading = useSelector(getIsLoading);
//   const error = useSelector(getError);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
};
