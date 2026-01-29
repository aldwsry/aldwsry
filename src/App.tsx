import { useState, useCallback } from 'react';
import { Scene } from './components/Scene';
import { content, getMoodParams } from './data/content';

function App() {
    const [currentSection, setCurrentSection] = useState(0);
    const currentContent = content[currentSection];
    const currentMood = getMoodParams(currentContent.type === 'title' ? 'title' : currentContent.mood);

    // When ripple completes, advance to next section
    const handleRippleComplete = useCallback(() => {
        setCurrentSection(prev => (prev + 1) % content.length);
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
