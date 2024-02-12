import React from "react";
import { Title } from "../title/title";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

export const UnderConstruction = () => {
  return (
    <div className="">
      <Title>
        Sección en construcción
        <span>
          <FontAwesomeIcon
            icon={faGear}
            className="mx-auto animate-spin w-[5rem]"
          />
        </span>
      </Title>
    </div>
  );
};
