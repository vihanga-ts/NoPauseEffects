// ==UserScript==
// @name         Pause efects Blocker for Vidsrc and cloudnestra
// @namespace    UserScript
// @version      1.2
// @description  Prevents videos from going grayscale when paused and optionally blocks transform scaling too.
// @author       vihanga_ts
// @match        *://cloudnestra.com/*
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_registerMenuCommand
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    const defaultSettings = {
        blockGrayscale: true,
        blockTransform: true
    };

    const settings = {
        blockGrayscale: GM_getValue('blockGrayscale', defaultSettings.blockGrayscale),
        blockTransform: GM_getValue('blockTransform', defaultSettings.blockTransform)
    };

    GM_registerMenuCommand('Grayscale Blocking: ' + (settings.blockGrayscale ? 'ON' : 'OFF'), function() {
        settings.blockGrayscale = !settings.blockGrayscale;
        GM_setValue('blockGrayscale', settings.blockGrayscale);
        updateStyles();
        location.reload();
    });

    GM_registerMenuCommand('Transform Scaling Blocking: ' + (settings.blockTransform ? 'ON' : 'OFF'), function() {
        settings.blockTransform = !settings.blockTransform;
        GM_setValue('blockTransform', settings.blockTransform);
        updateStyles();
        location.reload();
    });

    function updateStyles() {
        const existingStyle = document.getElementById('grayscale-blocker-style');
        if (existingStyle) {
            existingStyle.remove();
        }

        const style = document.createElement('style');
        style.id = 'grayscale-blocker-style';

        let cssRules = '';

        if (settings.blockGrayscale) {
            cssRules += `
                video {
                    filter: none !important;
                }
                [style*="filter: grayscale"] {
                    filter: none !important;
                }
                [style*="filter:grayscale"] {
                    filter: none !important;
                }
            `;
        }

        if (settings.blockTransform) {
            cssRules += `
                video {
                    transform: scaleX(1) scaleY(1) !important;
                }
                [style*="transform: scaleX"] {
                    transform: scaleX(1) scaleY(1) !important;
                }
                [style*="transform:scaleX"] {
                    transform: scaleX(1) scaleY(1) !important;
                }
            `;
        }

        style.textContent = cssRules;
        document.head.appendChild(style);
    }

    function blockEffects() {
        updateStyles();

        const observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
                    const el = mutation.target;

                    if (settings.blockGrayscale && el.style.filter && el.style.filter.includes('grayscale')) {
                        el.style.filter = 'none';
                    }

                    if (settings.blockTransform && el.style.transform && (el.style.transform.includes('scaleX') || el.style.transform.includes('scaleY'))) {
                        const transform = el.style.transform;
                        if (transform.includes('scale')) {
                            const newTransform = transform
                                .replace(/scaleX\([^)]+\)/g, 'scaleX(1)')
                                .replace(/scaleY\([^)]+\)/g, 'scaleY(1)')
                                .replace(/scale\([^)]+\)/g, 'scale(1)');
                            el.style.transform = newTransform;
                        }
                    }
                }
            });
        });

        window.addEventListener('DOMContentLoaded', () => {
            document.querySelectorAll('video, [style*="filter"], [style*="transform"]').forEach(el => {
                if (settings.blockGrayscale && el.style.filter && el.style.filter.includes('grayscale')) {
                    el.style.filter = 'none';
                }

                if (settings.blockTransform && el.style.transform && (el.style.transform.includes('scaleX') || el.style.transform.includes('scaleY'))) {
                    const transform = el.style.transform;
                    if (transform.includes('scale')) {
                        const newTransform = transform
                            .replace(/scaleX\([^)]+\)/g, 'scaleX(1)')
                            .replace(/scaleY\([^)]+\)/g, 'scaleY(1)')
                            .replace(/scale\([^)]+\)/g, 'scale(1)');
                        el.style.transform = newTransform;
                    }
                }

                observer.observe(el, { attributes: true });
            });

            observer.observe(document.body, {
                childList: true,
                subtree: true,
                attributes: true,
                attributeFilter: ['style']
            });
        });
    }

    blockEffects();
})();
