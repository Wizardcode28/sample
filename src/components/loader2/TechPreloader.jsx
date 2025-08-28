// src/components/loader2/TechPreloader.jsx
import { useState, useEffect, useRef } from 'react';
import { Terminal, Code, Zap, Binary } from 'lucide-react';
import './TechPreloader2.css';

const TechPreloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [showProgress, setShowProgress] = useState(false);
  const mountedRef = useRef(true);

  const loadingTexts = [
    'Initializing Version Beta 8.0...',
    'Loading hackathon modules...',
    'Compiling neural networks...',
    'Establishing secure connections...',
    'Finalizing system protocols...'
  ];
  const matrixChars = ['0','1','ａ','ｂ','ｃ','ｄ','ｅ','ｆ','ｇ','ｈ','ｉ','ｊ','ｋ','ｌ','ｍ','ｎ','ｏ','ｐ','ｑ','ｒ','ｓ','ｔ','ｕ','ｖ','ｗ','ｘ','ｙ','ｚ'];

  useEffect(() => {
    mountedRef.current = true;

    // Start by showing the progress block after a short intro delay
    const showTimer = setTimeout(() => setShowProgress(true), 600);

    // progress increment interval
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        const next = Math.min(100, prev + Math.max(2, Math.random() * 12));
        return next;
      });
    }, 250);

    // text rotation
    const textTimer = setInterval(() => {
      setCurrentText(loadingTexts[Math.floor(Math.random() * loadingTexts.length)]);
    }, 700);

    return () => {
      mountedRef.current = false;
      clearTimeout(showTimer);
      clearInterval(progressTimer);
      clearInterval(textTimer);
    };
  }, []);

  // When progress reaches 100, wait a small moment for final glow/fade and call onComplete
  useEffect(() => {
    if (progress >= 100) {
      // small delay so user sees final state
      const fin = setTimeout(() => {
        if (typeof onComplete === 'function') onComplete();
      }, 450);
      return () => clearTimeout(fin);
    }
  }, [progress, onComplete]);

  const MatrixRain = () => (
    <div className="matrix-rain" aria-hidden>
      {Array.from({ length: 18 }).map((_, i) => (
        <div key={i} className="matrix-column" style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 2}s`,
          animationDuration: `${3 + Math.random() * 2}s`
        }}>
          <div className="matrix-text">
            {Array.from({ length: 10 }).map((_, j) => (
              <div key={j}>{matrixChars[Math.floor(Math.random()*matrixChars.length)]}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  const ScanLine = () => (
    <div className="scan-line-container" aria-hidden>
      <div className="scan-line" />
    </div>
  );

  return (
    <div className="preloader-container" role="status" aria-live="polite">
      <MatrixRain />
      <ScanLine />

      <div className="main-content">
        <div className="logo-section">
          <div className="icons-container">
            <Terminal className="icon icon-terminal" />
            <Code className="icon icon-code" />
            <Zap className="icon icon-zap" />
            <Binary className="icon icon-binary" />
          </div>
          <h1 className="main-title">VERSION</h1>
          <h2 className="sub-title">BETA 8.0</h2>
          <div className="system-text">HACKATHON SYSTEM INTERFACE</div>
        </div>

        {showProgress && (
          <div className="loading-section">
            <div className="progress-container">
              <div className="progress-bar" aria-hidden>
                <div className="progress-fill" style={{ width: `${progress}%` }}>
                  <div className="progress-glow" />
                </div>
              </div>
              <div className="progress-text">{Math.floor(progress)}%</div>
            </div>

            <div className="loading-text-container">
              <p className="loading-text">{currentText}</p>
            </div>

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
      </div>

      <div className="cyber-grid" />
    </div>
  );
};

export default TechPreloader;
