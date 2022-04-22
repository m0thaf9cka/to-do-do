import {useState} from 'react';

export const useFetch = (callback) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const fetch = async () => {
    try {
      setIsLoading(true);
      await callback();
    } catch (e) {
      setErrorMessage(e.message);
    } finally {
      setIsLoading(false);
    }
  };
  return [fetch, isLoading, errorMessage];
}
