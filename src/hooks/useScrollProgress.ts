import { useState, useEffect, useCallback, useRef } from 'react';
import { CONTENT, getMoodParams, MoodParams } from '../data/content';

interface TimeBasedState {
    currentSection: number;
    currentMood: MoodParams;
    textOpacity: number;
    isTransitioning: boolean;
}

export function useTimeBasedProgress(): TimeBasedState {
    const [currentSection, setCurrentSection] = useState(0);
    const [textOpacity, setTextOpacity] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [currentMood, setCurrentMood] = useState<MoodParams>(getMoodParams('title'));

    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Duration each text is visible (based on content length)
    const getDisplayDuration = useCallback((sectionIndex: number) => {
        const content = CONTENT[sectionIndex];
        const textLength = content.text.length;
        // Faster flashing - shorter times
        const baseTime = 2000;
        const perCharTime = 25;
        return Math.min(baseTime + textLength * perCharTime, 8000);
    }, []);

    // Advance to next section
    const advanceSection = useCallback(() => {
        setIsTransitioning(true);

        // Quick fade out
        setTextOpacity(0);

        // After fade out, change section
        setTimeout(() => {
            setCurrentSection(prev => {
                const next = (prev + 1) % CONTENT.length;
                const content = CONTENT[next];
                const mood = content.type === 'title' ? 'title' : content.mood;
                setCurrentMood(getMoodParams(mood));
                return next;
            });

            // Quick fade in
            setTimeout(() => {
                setTextOpacity(1);
                setIsTransitioning(false);
            }, 300);
        }, 400);
    }, []);

    // Initial fade in
    useEffect(() => {
        const initialTimer = setTimeout(() => {
            setTextOpacity(1);
        }, 800);
        return () => clearTimeout(initialTimer);
    }, []);

    // Auto-advance timer
    useEffect(() => {
        if (isTransitioning) return;

        const duration = getDisplayDuration(currentSection);
        timerRef.current = setTimeout(advanceSection, duration);

        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, [currentSection, isTransitioning, advanceSection, getDisplayDuration]);

    return {
        currentSection,
        currentMood,
        textOpacity,
        isTransitioning,
    };
}
