import {createContext, useContext, useState, ReactNode} from 'react';

interface BuilderScore {
    score: number;
    setScore: React.Dispatch<React.SetStateAction<number>>;
}

const ScoreContext = createContext<BuilderScore | undefined>(undefined);

interface ScoreProviderProps {
    children: ReactNode;
}

export const ScoreProvider: React.FC<ScoreProviderProps> = ({children}) => {
    const [score, setScore] = useState<number>(0);

    const scoreValue: BuilderScore = {
        score,
        setScore,
    };

    return (
        <ScoreContext.Provider value={scoreValue}>
            {children}
        </ScoreContext.Provider>
    );
};

export const useScoreState = (): BuilderScore => {
    const context = useContext(ScoreContext);
    if (!context){
        throw new Error('Invalid Context - No State Provider');
    }
    return context;
}
