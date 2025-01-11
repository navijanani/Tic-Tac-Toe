import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetGame, resetGameAll } from "../actions/gameActions";
import { Link } from "react-router-dom";

const WinnerPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { winner } = useSelector((state) => state.game);

  const handleReset = () => {
    dispatch(resetGame());
    navigate("/GameBoard");
  };

  const handleHomeClick = () => {
    dispatch(resetGameAll());
    navigate("/");
  };
  if (!winner)
    return (
      <>
        <div className="winner-page">
          <h2>It's a draw!</h2>
      <div className="buttons">
      <Link to="/">
            <button onClick={() => handleHomeClick()}>Home</button>
          </Link>
          <button onClick={() => handleReset()}>Play Again</button>
      </div>
      </div>

      </>
    );

  return (
    <>
      <div className="winner-page">
        <h1>🎉 Congratulations! 🎉</h1>
        <h2>
          {winner.name} is the Winner! ({winner.symbol})
        </h2>

        <div className="buttons">
      <Link to="/">
            <button onClick={() => handleHomeClick()}>Home</button>
          </Link>
          <button onClick={() => handleReset()}>Play Again</button>
      </div>
      </div>
    </>
  );
};

export default WinnerPage;
