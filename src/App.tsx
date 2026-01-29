import { useState, useCallback } from 'react';
import { Scene } from './components/Scene';
import { CONTENT, getMoodParams } from './data/content';

function App() {
    const [currentSection, setCurrentSection] = useState(0);
    const content = CONTENT[currentSection];
    const currentMood = getMoodParams(content.type === 'title' ? 'title' : content.mood);

    // When ripple completes, advance to next section
    const handleRippleComplete = useCallback(() => {
        setCurrentSection(prev => (prev + 1) % CONTENT.length);
    }, []);

    return (
        <div className="w-screen h-screen overflow-hidden bg-black">
            <Scene
                moodParams={currentMood}
                currentSection={currentSection}
                onRippleComplete={handleRippleComplete}
            />
        </div>
    );
}

export default App;
