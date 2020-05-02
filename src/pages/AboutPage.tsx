import React from "react";
import { useHistory } from "react-router-dom";

export const AboutPage: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <h4>Information Page</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic autem
        quidem qui dolorum. Atque dignissimos dicta at vero earum aliquid
        consequuntur in quisquam id, hic ut quod harum eum, reprehenderit
        debitis. Neque tenetur delectus reprehenderit dolor quibusdam a numquam
        asperiores.
      </p>
      <button onClick={() => history.push("/")} className="btn">
        Back to TodoList
      </button>
    </>
  );
};
