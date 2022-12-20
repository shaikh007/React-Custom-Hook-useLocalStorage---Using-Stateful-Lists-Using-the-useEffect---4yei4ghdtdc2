import { useEffect } from "react";
import { useState } from "react";

const useLocalStorage = (stateVar, value) => {
    const [presentState, setState] = useState(value);
    updateStorage(stateVar, presentState);
    return [presentState, setState];

};

const updateStorage = (key, value) => {
    localStorage.setItem(key, value);
}

export default useLocalStorage;