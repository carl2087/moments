// Note the variable is NOT named the same as the file it resides in
//It will destructure the children prop in  place, so that we can wrap around the children  
// components in the return statement’s  JSX, 

import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';


export const CurrentUserContext = createContext()
export const SetCurrentUserContext = createContext()
export const useCurrentUser = () => useContext(CurrentUserContext)
export const useSetCurrentUser = () => useContext(SetCurrentUserContext)

export const CurrentUserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null)

	const handleMount = async () => {
		try {
			const {data} = await axios.get('dj-rest-auth/user')
			setCurrentUser(data)
		} catch(err) {
			console.log(err)
		}
	}

	useEffect(() => {
		handleMount()
	}, []);

    return (
        <CurrentUserContext.Provider value={currentUser}>
        <SetCurrentUserContext.Provider value={setCurrentUser}>
            {children}
        </SetCurrentUserContext.Provider>
		</CurrentUserContext.Provider>
    )

};
