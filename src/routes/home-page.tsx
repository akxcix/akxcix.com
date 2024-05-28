export default function HomePage() {
    return (
        <div className="flex flex-col items-center">
            <div className="absolute top-1/2">
                <h6 className="font-mono m-0 text-primary-background font-normal">
                    <span className="text-muted-foreground">
                        {'> '}
                    </span>
                    {'akxcix'}
                    <span className="text-muted-foreground">
                        <i className="border-b animate-none" style={{ animation: 'blink 1s infinite' }}>
                            {'.'}
                        </i>
                        {'com'}
                    </span>
                </h6>
            </div>
        </div>
    );
};

const style = document.createElement('style');
style.textContent = `
    @keyframes blink {
        0%, 50% { border-color: inherit; }
        51%, 100% { border-color: transparent; }
    }
`;
document.head.appendChild(style);
