import { CONTENT } from '../data/content';

interface TextOverlayProps {
    currentSection: number;
    opacity: number;
}

export function TextOverlay({ currentSection, opacity }: TextOverlayProps) {
    const currentContent = CONTENT[currentSection];
    const isTitle = currentContent?.type === 'title';

    // Split text by newlines for multi-line rendering
    const textLines = currentContent?.text.split('\n') || [];

    return (
        <div
            className="fixed inset-0 flex items-center justify-center pointer-events-none z-10"
            style={{
                opacity,
                transition: 'opacity 2s ease-in-out', // Slow 2s fade
            }}
        >
            <div
                className="max-w-4xl px-8 text-center"
                style={{
                    mixBlendMode: 'exclusion', // Terrain lines pass through text
                }}
            >
                {textLines.map((line, index) => (
                    <p
                        key={`${currentSection}-${index}`}
                        className={`
              font-serif tracking-[0.2em]
              ${isTitle ? 'text-2xl md:text-3xl lg:text-4xl font-light uppercase' : ''}
              ${!isTitle ? 'text-xl md:text-2xl font-light leading-relaxed' : ''}
              ${line === '' ? 'h-4' : ''}
            `}
                        style={{
                            color: 'rgba(255, 255, 255, 0.8)', // 80% opacity white
                            letterSpacing: '0.2em', // Wide letter spacing
                            marginBottom: index < textLines.length - 1 ? '0.75em' : 0,
                            transform: `translateY(${(1 - opacity) * 15}px)`,
                            transition: 'transform 2s ease-out, opacity 2s ease-in-out',
                        }}
                    >
                        {line || '\u00A0'}
                    </p>
                ))}
            </div>
        </div>
    );
}
