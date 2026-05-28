import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

import { useLanguage } from '../context/LanguageContext';

const TerminalContainer = ({ children }) => {
  const { lang, t } = useLanguage();
  const [command, setCommand] = useState('ls -hawn');
  const [currentDir, setCurrentDir] = useState('~');
  const inputRef = useRef(null);

  // Mappings from user inputs to HTML element IDs for scrolling
  const folders = {
    // English
    'about': 'about',
    'about/': 'about',
    'projects': 'projects',
    'projects/': 'projects',
    'experience': 'experience',
    'experience/': 'experience',
    'education': 'education',
    'education/': 'education',
    'skills': 'skills',
    'skills/': 'skills',
    'resume': 'resume',
    'resume/': 'resume',
    
    // Chinese
    '关于我': 'about',
    '关于我/': 'about',
    '项目': 'projects',
    '项目/': 'projects',
    '工作经历': 'experience',
    '工作经历/': 'experience',
    '教育背景': 'education',
    '教育背景/': 'education',
    '个人技能': 'skills',
    '个人技能/': 'skills',
    '简历': 'resume',
    '简历/': 'resume'
  };

  const [history, setHistory] = useState([
    {
      type: 'input',
      cmd: 'ls -hawn',
      dir: '~'
    },
    {
      type: 'output',
      content: (
        <div className="mt-4 grid grid-cols-2 md:grid-cols-6 gap-4 text-primary/60 text-xs mb-4">
          <span>drwxr-xr-x  {t('term-about')}</span>
          <span>drwxr-xr-x  {t('term-proj')}</span>
          <span>drwxr-xr-x  {t('term-exp')}</span>
          <span>drwxr-xr-x  {t('term-edu')}</span>
          <span>drwxr-xr-x  {t('term-skills')}</span>
          <span>drwxr-xr-x  {t('term-resume')}</span>
        </div>
      )
    }
  ]);

  const executeCommand = (cmdStr) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) {
      setHistory(prev => [...prev, { type: 'input', cmd: '', dir: currentDir }]);
      return;
    }

    const parts = trimmed.split(/\s+/);
    const cmd = parts[0].toLowerCase();
    const arg = parts.slice(1).join(' ');

    let output = null;
    let nextDir = currentDir;

    if (cmd === 'clear') {
      setHistory([]);
      setCommand('');
      return;
    } else if (cmd === 'ls') {
      output = (
        <div className="mt-4 grid grid-cols-2 md:grid-cols-6 gap-4 text-primary/60 text-xs mb-4">
          <span>drwxr-xr-x  {t('term-about')}</span>
          <span>drwxr-xr-x  {t('term-proj')}</span>
          <span>drwxr-xr-x  {t('term-exp')}</span>
          <span>drwxr-xr-x  {t('term-edu')}</span>
          <span>drwxr-xr-x  {t('term-skills')}</span>
          <span>drwxr-xr-x  {t('term-resume')}</span>
        </div>
      );
    } else if (cmd === 'cd') {
      const folderArg = arg.trim();
      if (!folderArg || folderArg === '~') {
        nextDir = '~';
        output = <div className="text-slate-400 text-xs mt-1 mb-2 font-mono">{lang === 'en' ? "Moved to home directory." : "已回到主目录。"}</div>;
        const hero = document.getElementById('hero') || document.querySelector('main');
        if (hero) hero.scrollIntoView({ behavior: 'smooth' });
      } else {
        const target = folders[folderArg] || folders[folderArg.toLowerCase()];
        if (target) {
          nextDir = `~/${target}`;
          output = <div className="text-primary text-xs mt-1 mb-2 font-mono">{lang === 'en' ? `cd: successfully navigated to ${folderArg}` : `cd: 成功跳转至 ${folderArg}`}</div>;
          const element = document.getElementById(target);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          output = (
            <div className="text-red-500 font-mono text-xs mt-1 mb-2">
              {lang === 'en' 
                ? `cd: folder not found: ${folderArg}` 
                : `cd: 未找到文件夹: ${folderArg}`}
            </div>
          );
        }
      }
    } else if (cmd === 'help') {
      output = (
        <div className="text-slate-400 text-xs mt-1 mb-2 space-y-1 font-mono">
          <p>Available commands:</p>
          <p>  ls             - list folders</p>
          <p>  cd [folder]    - navigate to a folder (e.g. cd projects)</p>
          <p>  clear          - clear terminal screen</p>
          <p>  help           - show this help menu</p>
        </div>
      );
    } else {
      output = (
        <div className="text-red-500 font-mono text-xs mt-1 mb-2">
          zsh: command not found: {cmd}
        </div>
      );
    }

    setHistory(prev => [
      ...prev,
      { type: 'input', cmd: cmdStr, dir: currentDir },
      ...(output ? [{ type: 'output', content: output }] : [])
    ]);
    
    setCurrentDir(nextDir);
    setCommand('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      executeCommand(command);
    }
  };

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="max-w-[95%] lg:max-w-[1600px] mx-auto px-2 md:px-10 py-20">
      {/* Terminal Top Bar */}
      <div className="bg-[#121214] border border-white/10 rounded-t-xl p-4 flex items-center justify-between">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
        </div>
        <div className="text-[10px] font-mono text-slate-500 tracking-[0.2em] uppercase">
          shawn — zsh — 80x24
        </div>
        <div className="w-12"></div>
      </div>

      {/* Terminal Body Wrapping Children */}
      <div className="bg-[#0a0a0c]/40 backdrop-blur-xl border-x border-b border-white/10 rounded-b-xl overflow-hidden">
        {/* Terminal Prompt Header (Sticks to top of container) */}
        <div 
          onClick={focusInput}
          className="p-8 font-mono text-sm md:text-base border-b border-white/5 bg-white/[0.02] cursor-text"
        >
          {/* History lines */}
          {history.map((item, index) => {
            if (item.type === 'input') {
              return (
                <div key={index} className="flex items-center gap-2 text-slate-300">
                  <span className="text-primary font-bold">shawn@desktop</span>
                  <span className="text-slate-400">:</span>
                  <span className="text-blue-400">{item.dir}</span>
                  <span className="text-slate-200">$</span>
                  <span className="text-white whitespace-pre-wrap">{item.cmd}</span>
                </div>
              );
            } else {
              return <div key={index}>{item.content}</div>;
            }
          })}

          {/* Active Input Line */}
          <div className="flex items-center gap-2 mt-1 relative">
            <span className="text-primary font-bold shrink-0">shawn@desktop</span>
            <span className="text-slate-400 shrink-0">:</span>
            <span className="text-blue-400 shrink-0">{currentDir}</span>
            <span className="text-slate-200 shrink-0">$</span>
            
            <div className="relative flex items-center flex-1 min-w-[50px]">
              <input
                ref={inputRef}
                type="text"
                value={command}
                onChange={(e) => setCommand(e.target.value)}
                onKeyDown={handleKeyDown}
                className="absolute inset-0 w-full h-full opacity-0 cursor-text font-mono text-sm md:text-base text-white focus:outline-none"
                autoComplete="off"
                autoCapitalize="off"
                spellCheck="false"

              />
              <span className="text-white whitespace-pre-wrap break-all min-h-[1.25rem]">{command}</span>
              <motion.span 
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="w-2 h-4 md:w-2 md:h-5 bg-primary ml-0.5 shrink-0 inline-block align-middle"
              />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="relative">
          {children}
        </div>
      </div>
    </div>
  );
};

export default TerminalContainer;
