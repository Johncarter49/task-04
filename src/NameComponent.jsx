import React from "react";
import { useContext } from "react/cjs/react.production.min";
import {UserContext} from "./App";

function NameComponent() {
  const updateName = useContext(UserContext);
  
  
  return (
    <div>
      <form>
        <label for="fname">Update Name:</label>
        <input type="text" id="fname" name="fname" value="John" />
      </form>
    </div>
  );
}

export default NameComponent;


