import { useState, useEffect } from "react";
import "../css/ffxiv.css";
import combinations from "../storage/ffxiv_combinations";


const Ffxiv = () => {
  const [currentCombinationIndex, setCurrentCombinationIndex] = useState(0);
  const [usedCombinationIndex, setUsedCombinationIndex] = useState([]);
  const [isAllCombinationsUsed, setIsAllCombinationsUsed] = useState(false);

  // When all combination exhausted
  useEffect(() => {
    if (usedCombinationIndex.length === combinations.length) {
      setIsAllCombinationsUsed(true);
    }
  }, [usedCombinationIndex]);

  // Get Next Index, if not used
  const getNextIndex = () => {
    let nextIndex;
    do {
      nextIndex = Math.floor(Math.random() * combinations.length);
    } while (usedCombinationIndex.includes(nextIndex));
    return nextIndex;
  };

  // When on click, set used combination ???
  const handleButtonClick = () => {
    const nextIndex = getNextIndex();
    setUsedCombinationIndex([...usedCombinationIndex, nextIndex]);
    setCurrentCombinationIndex(nextIndex);
  };

  const handleSkip = () => {
    const nextIndex = getNextIndex();
    setUsedCombinationIndex([...usedCombinationIndex, nextIndex]);
    setCurrentCombinationIndex(nextIndex);
  };

  // If all combinations used, give button refresh to start again
  if (isAllCombinationsUsed) {
    return (
        <div>All Combinations Used</div>
    );
  }

  const { dream, consequence } = combinations[currentCombinationIndex];

  return (
    <div className="game-container">
      <h1>Press the Button or Not?</h1>
      <p>
        <strong>Dream:</strong> {dream}
      </p>
      <p>
        <strong>Consequence:</strong> {consequence}
      </p>
      <button onClick={handleButtonClick}>Press the Button</button>
      <button onClick={handleSkip}>Skip</button>
    </div>
  );
};

export default Ffxiv;
