import React, { useEffect, useState } from "react";
import { isElementInViewport } from "../utils/utils";
import PropTypes from "prop-types";

const NavigationMenu = ({ data, multiple }) => {
  const [visibleSectionID, setVisibleSectionID] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const selectedID = multiple
        ? data.filter((_, idx) => {
            const ele = document.querySelector("#menuItem" + idx);
            if (ele) return isElementInViewport(ele);
          })
        : data.find((_, idx) => {
            const ele = document.querySelector("#menuItem" + idx);
            if (ele) return isElementInViewport(ele);
          });

      if (selectedID) {
        setVisibleSectionID([...selectedID]);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <div>some div</div>;
};

NavigationMenu.propTypes = {
  iddatax: PropTypes.object,
  multiple: PropTypes.bool,
};

export default NavigationMenu;
