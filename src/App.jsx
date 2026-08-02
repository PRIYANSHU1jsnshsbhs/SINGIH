import React, { useState, useEffect, useRef } from 'react';
import './index.css';

export default function App() {
  const [flowStatus, setFlowStatus] = useState('idle'); // idle, loading, transmitting, success
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState([
    { time: new Date().toISOString(), msg: "System initialized. Environment: Sandbox." }
  ]);
  const logsEndRef = useRef(null);

  const addLog = (msg) => {
    setLogs(prev => [...prev, { time: new Date().toISOString(), msg }]);
  };

  const handleGenerateZKP = () => {
    if (flowStatus !== 'idle') return;
    
    setFlowStatus('loading');
    addLog("Initiating local ZKP generation...");

    setTimeout(() => {
      setFlowStatus('transmitting');
      addLog("ZKP generated successfully. Initiating secure transmission...");
      
      let currentProgress = 0;
      const interval = setInterval(() => {
        currentProgress += 5;
        setProgress(currentProgress);
        
        if (currentProgress >= 100) {
          clearInterval(interval);
          setFlowStatus('success');
          addLog("ZKP Verified. Hash 0x9f22 appended to Ledger.");
        }
      }, 50);
    }, 1500);
  };

  useEffect(() => {
    if (logsEndRef.current) {
      logsEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs]);

  return (
    <>
      <header className="official-header">
        <div className="header-left">
          <div className="header-title">IndoSinga Bilateral Gateway</div>
          <div className="header-crests">
            <div className="crest">IN</div>
            <div className="crest">SG</div>
          </div>
        </div>
        <div className="header-right">
          <div>Logged in as: <strong>Nodal Officer</strong></div>
          <div className="env-badge">Environment: UAT/Sandbox</div>
        </div>
      </header>

      <div className="container">
        <div className="main-card">
          <div className="card-header">Cross-Border Entity Verification</div>
          
          <div className="grid-content">
            {/* Left Column */}
            <div className="column-card">
              <h2 className="column-title">Source: Account Aggregator (India)</h2>
              
              <table className="data-table">
                <tbody>
                  <tr>
                    <th>Business ID</th>
                    <td>IN-8823</td>
                  </tr>
                  <tr>
                    <th>KYC Status</th>
                    <td>Verified</td>
                  </tr>
                  <tr>
                    <th>Raw Data</th>
                    <td>Restricted (Data Localization Act)</td>
                  </tr>
                </tbody>
              </table>

              <button 
                className="btn-primary" 
                onClick={handleGenerateZKP}
                disabled={flowStatus !== 'idle'}
              >
                {flowStatus === 'loading' && <div className="spinner"></div>}
                {flowStatus === 'loading' ? 'Computing ZKP locally...' : 
                 flowStatus === 'transmitting' || flowStatus === 'success' ? 'ZKP Generated' : 
                 'Generate Zero-Knowledge Proof'}
              </button>
            </div>

            {/* Right Column */}
            <div className="column-card">
              <h2 className="column-title">Destination: SG-TraDex (Singapore)</h2>
              
              <div className="status-panel">
                {flowStatus === 'success' ? (
                  <>
                    <div className="badge-success">VERIFIED</div>
                    <div className="status-text-success">Cryptographic Proof Validated. Entity qualifies for cross-border credit.</div>
                  </>
                ) : (
                  <>
                    <div className="badge-pending">PENDING</div>
                    <div className="status-text">Waiting for cryptographic proof from source.</div>
                  </>
                )}
              </div>
            </div>

            {/* Transmission Bar */}
            {flowStatus === 'transmitting' && (
              <div className="transmission-container">
                <div className="transmission-text">Transmitting Cryptographic Proof...</div>
                <div className="progress-bar-container">
                  <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Compliance Panel */}
        <div className="main-card" style={{ marginBottom: 0 }}>
          <div className="card-header">Hyperledger Fabric - Compliance Audit Trail</div>
          <div className="audit-log-container">
            {logs.map((log, index) => (
              <div key={index} className="log-line">
                <span className="log-timestamp">[{log.time}]</span>
                <span className="log-system">[SYSTEM]</span>
                {log.msg}
              </div>
            ))}
            <div ref={logsEndRef} />
          </div>
        </div>
      </div>
    </>
  );
}
