import { useState, useEffect } from 'react';
import { Terminal, Code, Zap, Binary } from 'lucide-react';
import './TechPreloader.css';

const TechPreloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [showProgress, setShowProgress] = useState(false);

  const loadingTexts = [
    'Initializing Version Beta 8.0...',
    'Loading hackathon modules...',
    'Compiling neural networks...',
    'Establishing secure connections...',
    'Finalizing system protocols...'
  ];

  const matrixChars = ['0', '1', 'ａ', 'ｂ', 'ｃ', 'ｄ', 'ｅ', 'ｆ', 'ｇ', 'ｈ', 'ｉ', 'ｊ', 'ｋ', 'ｌ', 'ｍ', 'ｎ', 'ｏ', 'ｐ', 'ｑ', 'ｒ', 'ｓ', 'ｔ', 'ｕ', 'ｖ', 'ｗ', 'ｘ', 'ｙ', 'ｚ'];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowProgress(true);
    }, 1000);

    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    const textTimer = setInterval(() => {
      setCurrentText(loadingTexts[Math.floor(Math.random() * loadingTexts.length)]);
    }, 800);

    return () => {
      clearTimeout(timer);
      clearInterval(progressTimer);
      clearInterval(textTimer);
    };
  }, [onComplete]);

  const MatrixRain = () => (
    <div className="matrix-rain">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="matrix-column"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }}
        >
          <div className="matrix-text">
            {Array.from({ length: 10 }).map((_, j) => (
              <div key={j}>
                {matrixChars[Math.floor(Math.random() * matrixChars.length)]}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  const ScanLine = () => (
    <div className="scan-line-container">
      <div className="scan-line" />
    </div>
  );

  return (
    <div className="preloader-container">
      <MatrixRain />
      <ScanLine />
      
      {/* Main content */}
      <div className="main-content">
        {/* Logo/Title */}
        <div className="logo-section">
          <div className="icons-container">
            <Terminal className="icon icon-terminal" />
            <Code className="icon icon-code" />
            <Zap className="icon icon-zap" />
            <Binary className="icon icon-binary" />
          </div>
          
          <h1 className="main-title">
            VERSION
          </h1>
          <h2 className="sub-title">
            BETA 8.0
          </h2>
          <div className="system-text">
            HACKATHON SYSTEM INTERFACE
          </div>
        </div>

        {/* Loading animation */}
        {showProgress && (
          <div className="loading-section">
            {/* Progress bar */}
            <div className="progress-container">
              <div className="progress-bar">
                <div 
                  className="progress-fill"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                >
                  <div className="progress-glow"></div>
                </div>
              </div>
              <div className="progress-text">
                {Math.floor(Math.min(progress, 100))}%
              </div>
            </div>

            {/* Loading text */}
            <div className="loading-text-container">
              <p className="loading-text">
                {currentText}
              </p>
            </div>

            {/* System status */}
            <div className="status-grid">
              <div className="status-left">
                <div className="status-item status-green">○ Neural Core: ONLINE</div>
                <div className="status-item status-blue">○ Quantum State: STABLE</div>
              </div>
              <div className="status-right">
                <div className="status-item status-glow">○ Memory: 2048MB</div>
                <div className="status-item status-green">○ Protocols: ACTIVE</div>
              </div>
            </div>
          </div>
        )}

        {/* Circuit pattern overlay */}
        <div className="circuit-pattern circuit-1"></div>
        <div className="circuit-pattern circuit-2"></div>
      </div>

      {/* Cyber grid background */}
      <div className="cyber-grid"></div>
    </div>
  );
};

export default TechPreloader;