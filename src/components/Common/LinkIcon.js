import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const LinkIcon = props => {
  const { href, icon, style } = props;

  /* The noopener is needed to enhance the security of your website and prevent other websites from gaining access to your page*/
  /* A way to link the icon when rending it in the right place*/
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={icon} className={style} />
    </a>
  );
};
