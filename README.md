<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chrome Browser Clone</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Arial, sans-serif;
        }
        
        body {
            background: linear-gradient(135deg, #2c3e50 0%, #1a1a2e 100%);
            color: #e0e0e0;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }
        
        .browser-container {
            width: 100%;
            max-width: 1200px;
            background: #2d2d2d;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }
        
        /* Browser Header */
        .browser-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px 16px;
            background: #3d3d3d;
            border-bottom: 1px solid #4d4d4d;
        }
        
        .window-controls {
            display: flex;
            gap: 8px;
        }
        
        .window-control {
            width: 12px;
            height: 12px;
            border-radius: 50%;
        }
        
        .control-close { background: #ff5f56; }
        .control-minimize { background: #ffbd2e; }
        .control-expand { background: #27c93f; }
        
        .browser-title {
            font-size: 14px;
            color: #aaa;
            flex-grow: 1;
            text-align: center;
        }
        
        /* Tab Bar */
        .tab-bar {
            display: flex;
            background: #3d3d3d;
            padding: 0 10px;
            border-bottom: 1px solid #4d4d4d;
            overflow-x: auto;
        }
        
        .tab {
            display: flex;
            align-items: center;
            padding: 10px 16px;
            background: #4d4d4d;
            margin-right: 2px;
            border-radius: 8px 8px 0 0;
            min-width: 200px;
            max-width: 240px;
            flex: 1;
            cursor: pointer;
            transition: all 0.2s ease;
        }
        
        .tab.active {
            background: #2d2d2d;
            border-bottom: 2px solid #8ab4f8;
        }
        
        .tab-favicon {
            width: 16px;
            height: 16px;
            margin-right: 8px;
            background: #8ab4f8;
            border-radius: 2px;
        }
        
        .tab-title {
            font-size: 14px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            flex-grow: 1;
        }
        
        .tab-close {
            margin-left: 8px;
            color: #999;
            padding: 4px;
            border-radius: 50%;
            width: 18px;
            height: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .tab-close:hover {
            background: #5f5f5f;
        }
        
        .new-tab {
            padding: 10px 14px;
            color: #999;
            cursor: pointer;
            font-size: 20px;
            display: flex;
            align-items: center;
        }
        
        /* Navigation Bar */
        .nav-bar {
            display: flex;
            padding: 12px;
            background: #3d3d3d;
            align-items: center;
            gap: 8px;
        }
        
        .nav-button {
            padding: 8px;
            color: #aaa;
            cursor: pointer;
            border-radius: 50%;
            width: 36px;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .nav-button:hover {
            background: #4d4d4d;
        }
        
        .address-bar {
            flex-grow: 1;
            background: #2d2d2d;
            border: 1px solid #4d4d4d;
            border-radius: 24px;
            padding: 8px 16px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .address-bar input {
            flex-grow: 1;
            background: transparent;
            border: none;
            color: #e0e0e0;
            font-size: 16px;
            outline: none;
        }
        
        .address-bar i {
            color: #5f6368;
        }
        
        .action-button {
            padding: 8px;
            color: #aaa;
            cursor: pointer;
            border-radius: 50%;
            width: 36px;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .action-button:hover {
            background: #4d4d4d;
        }
        
        /* Bookmarks Bar */
        .bookmarks-bar {
            display: flex;
            padding: 6px 12px;
            background: #353535;
            border-bottom: 1px solid #4d4d4d;
            gap: 16px;
            overflow-x: auto;
        }
        
        .bookmark {
            padding: 6px 10px;
            font-size: 13px;
            color: #aaa;
            white-space: nowrap;
            cursor: pointer;
            border-radius: 4px;
        }
        
        .bookmark:hover {
            background: #4d4d4d;
        }
        
        /* Content Area */
        .content-area {
            height: 500px;
            background: #1e1e1e;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
        }
        
        .web-content {
            width: 100%;
            height: 100%;
            display: none;
        }
        
        .web-content.active {
            display: block;
        }
        
        .new-tab-content {
            text-align: center;
            padding: 20px;
            max-width: 600px;
        }
        
        .logo {
            font-size: 80px;
            margin-bottom: 20px;
            color: #8ab4f8;
            text-shadow: 0 0 10px rgba(138, 180, 248, 0.5);
        }
        
        .search-bar {
            width: 100%;
            max-width: 584px;
            background: #2d2d2d;
            border: 1px solid #5f6368;
            border-radius: 24px;
            padding: 12px 20px;
            display: flex;
            align-items: center;
            gap: 12px;
            margin: 20px 0;
        }
        
        .search-bar input {
            flex-grow: 1;
            background: transparent;
            border: none;
            color: #e0e0e0;
            font-size: 16px;
            outline: none;
        }
        
        .shortcuts {
            display: flex;
            gap: 20px;
            margin-top: 30px;
            flex-wrap: wrap;
            justify-content: center;
        }
        
        .shortcut {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;
            cursor: pointer;
            min-width: 80px;
        }
        
        .shortcut-icon {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background: #3d3d3d;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            color: #8ab4f8;
        }
        
        .shortcut-title {
            font-size: 12px;
            color: #aaa;
        }
        
        /* Settings Panel */
        .settings-panel {
            position: absolute;
            top: 45px;
            right: 10px;
            background: #3d3d3d;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
            width: 300px;
            z-index: 1000;
            display: none;
            overflow: hidden;
        }
        
        .settings-panel.active {
            display: block;
        }
        
        .settings-header {
            padding: 16px;
            border-bottom: 1px solid #4d4d4d;
            font-weight: 600;
        }
        
        .settings-option {
            padding: 12px 16px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #4d4d4d;
            cursor: pointer;
        }
        
        .settings-option:hover {
            background: #4d4d4d;
        }
        
        .theme-selector {
            display: flex;
            gap: 10px;
        }
        
        .theme-option {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            cursor: pointer;
        }
        
        .theme-light { background: #f1f1f1; }
        .theme-dark { background: #2d2d2d; }
        .theme-blue { background: #1a73e8; }
        .theme-pink { background: #e91e63; }
        
        /* Footer */
        .browser-footer {
            padding: 10px 16px;
            background: #3d3d3d;
            border-top: 1px solid #4d4d4d;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 12px;
            color: #5f6368;
        }
        
        .status-icons {
            display: flex;
            gap: 12px;
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
            .tab {
                min-width: 160px;
            }
            
            .shortcuts {
                flex-wrap: wrap;
                justify-content: center;
            }
            
            .settings-panel {
                width: 250px;
            }
        }
        
        @media (max-width: 480px) {
            .tab {
                min-width: 120px;
            }
            
            .tab-title {
                font-size: 12px;
            }
            
            .address-bar input {
                font-size: 14px;
            }
            
            .bookmarks-bar {
                display: none;
            }
        }
    </style>
</head>
<body>
    <div class="browser-container">
        <!-- Browser Header -->
        <div class="browser-header">
            <div class="window-controls">
                <div class="window-control control-close"></div>
                <div class="window-control control-minimize"></div>
                <div class="window-control control-expand"></div>
            </div>
            <div class="browser-title">Chrome Browser Clone</div>
            <div style="width: 60px;"></div> <!-- Spacer for symmetry -->
        </div>
        
        <!-- Tab Bar -->
        <div class="tab-bar">
            <div class="tab active" data-tab="new-tab">
                <div class="tab-favicon"></div>
                <div class="tab-title">New Tab</div>
                <div class="tab-close">×</div>
            </div>
            <div class="tab" data-tab="google">
                <div class="tab-favicon" style="background: #EA4335;"></div>
                <div class="tab-title">Google</div>
                <div class="tab-close">×</div>
            </div>
            <div class="tab" data-tab="youtube">
                <div class="tab-favicon" style="background: #FF0000;"></div>
                <div class="tab-title">YouTube</div>
                <div class="tab-close">×</div>
            </div>
            <div class="new-tab" id="new-tab-btn">+</div>
        </div>
        
        <!-- Navigation Bar -->
        <div class="nav-bar">
            <div class="nav-button" id="back-btn"><i class="fas fa-arrow-left"></i></div>
            <div class="nav-button" id="forward-btn"><i class="fas fa-arrow-right"></i></div>
            <div class="nav-button" id="reload-btn"><i class="fas fa-redo"></i></div>
            <div class="nav-button" id="home-btn"><i class="fas fa-home"></i></div>
            
            <div class="address-bar">
                <i class="fas fa-lock" id="security-icon"></i>
                <input type="text" value="https://www.google.com/" id="url-input">
                <i class="fas fa-star" id="bookmark-btn"></i>
                <i class="fas fa-ellipsis-v" id="settings-btn"></i>
            </div>
            
            <div class="action-button"><i class="fas fa-user"></i></div>
            <div class="action-button"><i class="fas fa-ellipsis-vertical"></i></div>
        </div>
        
        <!-- Bookmarks Bar -->
        <div class="bookmarks-bar">
            <div class="bookmark">Google</div>
            <div class="bookmark">YouTube</div>
            <div class="bookmark">Gmail</div>
            <div class="bookmark">Drive</div>
            <div class="bookmark">Maps</div>
            <div class="bookmark">Photos</div>
            <div class="bookmark">Docs</div>
            <div class="bookmark">Calendar</div>
            <div class="bookmark">Translate</div>
        </div>
        
        <!-- Settings Panel -->
        <div class="settings-panel" id="settings-panel">
            <div class="settings-header">Settings</div>
            <div class="settings-option">
                <span>New Tab</span>
                <i class="fas fa-chevron-right"></i>
            </div>
            <div class="settings-option">
                <span>Appearance</span>
                <div class="theme-selector">
                    <div class="theme-option theme-light" data-theme="light"></div>
                    <div class="theme-option theme-dark" data-theme="dark"></div>
                    <div class="theme-option theme-blue" data-theme="blue"></div>
                    <div class="theme-option theme-pink" data-theme="pink"></div>
                </div>
            </div>
            <div class="settings-option">
                <span>Search Engine</span>
                <i class="fas fa-chevron-right"></i>
            </div>
            <div class="settings-option">
                <span>Privacy and Security</span>
                <i class="fas fa-chevron-right"></i>
            </div>
            <div class="settings-option">
                <span>Advanced Settings</span>
                <i class="fas fa-chevron-right"></i>
            </div>
        </div>
        
        <!-- Content Area -->
        <div class="content-area">
            <!-- New Tab Content -->
            <div class="web-content active" id="new-tab-content">
                <div class="new-tab-content">
                    <div class="logo">
                        <i class="fab fa-chrome"></i>
                    </div>
                    <div class="search-bar">
                        <i class="fas fa-search"></i>
                        <input type="text" placeholder="Search Google or type a URL" id="search-input">
                        <i class="fas fa-microphone"></i>
                        <i class="fas fa-camera"></i>
                    </div>
                    
                    <div class="shortcuts">
                        <div class="shortcut" data-url="https://www.youtube.com/">
                            <div class="shortcut-icon">
                                <i class="fab fa-youtube"></i>
                            </div>
                            <div class="shortcut-title">YouTube</div>
                        </div>
                        <div class="shortcut" data-url="https://mail.google.com/">
                            <div class="shortcut-icon">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <div class="shortcut-title">Gmail</div>
                        </div>
                        <div class="shortcut" data-url="https://www.google.com/maps">
                            <div class="shortcut-icon">
                                <i class="fas fa-map"></i>
                            </div>
                            <div class="shortcut-title">Maps</div>
                        </div>
                        <div class="shortcut" data-url="https://drive.google.com/">
                            <div class="shortcut-icon">
                                <i class="fas fa-cloud"></i>
                            </div>
                            <div class="shortcut-title">Drive</div>
                        </div>
                        <div class="shortcut" data-url="https://www.google.com/calendar">
                            <div class="shortcut-icon">
                                <i class="fas fa-calendar"></i>
                            </div>
                            <div class="shortcut-title">Calendar</div>
                        </div>
                        <div class="shortcut" data-url="https://photos.google.com/">
                            <div class="shortcut-icon">
                                <i class="fas fa-images"></i>
                            </div>
                            <div class="shortcut-title">Photos</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Google Content -->
            <div class="web-content" id="google-content">
                <iframe src="about:blank" style="width: 100%; height: 100%; border: none;"></iframe>
            </div>
            
            <!-- YouTube Content -->
            <div class="web-content" id="youtube-content">
                <iframe src="about:blank" style="width: 100%; height: 100%; border: none;"></iframe>
            </div>
        </div>
        
        <!-- Footer -->
        <div class="browser-footer">
            <div class="status-icons">
                <i class="fas fa-shield-alt"></i>
                <span>Secure</span>
            </div>
            <div>Chrome Browser Clone © 2023</div>
        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            // Tab functionality
            const tabs = document.querySelectorAll('.tab');
            const webContents = document.querySelectorAll('.web-content');
            const newTabBtn = document.getElementById('new-tab-btn');
            const urlInput = document.getElementById('url-input');
            const searchInput = document.getElementById('search-input');
            const backBtn = document.getElementById('back-btn');
            const forwardBtn = document.getElementById('forward-btn');
            const reloadBtn = document.getElementById('reload-btn');
            const homeBtn = document.getElementById('home-btn');
            const settingsBtn = document.getElementById('settings-btn');
            const settingsPanel = document.getElementById('settings-panel');
            const bookmarkBtn = document.getElementById('bookmark-btn');
            const securityIcon = document.getElementById('security-icon');
            const shortcuts = document.querySelectorAll('.shortcut');
            const bookmarks = document.querySelectorAll('.bookmark');
            const themeOptions = document.querySelectorAll('.theme-option');
            
            // Tab switching
            tabs.forEach(tab => {
                tab.addEventListener('click', function(e) {
                    if (e.target.classList.contains('tab-close')) {
                        // Don't switch tab if close button is clicked
                        return;
                    }
                    
                    const tabId = this.getAttribute('data-tab');
                    
                    // Update active tab
                    tabs.forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Update active content
                    webContents.forEach(content => {
                        content.classList.remove('active');
                        if (content.id === `${tabId}-content`) {
                            content.classList.add('active');
                            // Update URL based on active tab
                            if (tabId === 'new-tab') {
                                urlInput.value = 'https://www.google.com/';
                                securityIcon.className = 'fas fa-lock';
                            } else if (tabId === 'google') {
                                urlInput.value = 'https://www.google.com/';
                                securityIcon.className = 'fas fa-lock';
                            } else if (tabId === 'youtube') {
                                urlInput.value = 'https://www.youtube.com/';
                                securityIcon.className = 'fas fa-lock';
                            }
                        }
                    });
                });
            });
            
            // New tab button
            newTabBtn.addEventListener('click', function() {
                alert('New tab functionality would open a new tab here');
            });
            
            // Navigation buttons
            backBtn.addEventListener('click', function() {
                alert('Back navigation');
            });
            
            forwardBtn.addEventListener('click', function() {
                alert('Forward navigation');
            });
            
            reloadBtn.addEventListener('click', function() {
                alert('Reloading page...');
                // Add a spinning animation to the reload button
                this.classList.add('fa-spin');
                setTimeout(() => {
                    this.classList.remove('fa-spin');
                }, 1000);
            });
            
            homeBtn.addEventListener('click', function() {
                // Switch to new tab
                tabs.forEach(t => t.classList.remove('active'));
                document.querySelector('[data-tab="new-tab"]').classList.add('active');
                
                webContents.forEach(content => {
                    content.classList.remove('active');
                    if (content.id === 'new-tab-content') {
                        content.classList.add('active');
                    }
                });
                
                urlInput.value = 'https://www.google.com/';
                securityIcon.className = 'fas fa-lock';
            });
            
            // URL input
            urlInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    const url = this.value;
                    if (url) {
                        alert(`Navigating to: ${url}`);
                        // Update security icon based on protocol
                        if (url.startsWith('https://')) {
                            securityIcon.className = 'fas fa-lock';
                        } else if (url.startsWith('http://')) {
                            securityIcon.className = 'fas fa-unlock';
                        } else {
                            securityIcon.className = 'fas fa-exclamation-triangle';
                        }
                    }
                }
            });
            
            // Search input
            searchInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    const query = this.value;
                    if (query) {
                        alert(`Searching for: ${query}`);
                        urlInput.value = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
                    }
                }
            });
            
            // Tab close buttons
            document.querySelectorAll('.tab-close').forEach(closeBtn => {
                closeBtn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const tab = this.parentElement;
                    if (tab.classList.contains('active')) {
                        // If closing active tab, switch to another tab
                        const nextTab = tab.nextElementSibling || tab.previousElementSibling;
                        if (nextTab && nextTab.classList.contains('tab')) {
                            nextTab.click();
                        } else {
                            // If no tabs left, show blank page
                            webContents.forEach(content => content.classList.remove('active'));
                        }
                    }
                    tab.remove();
                });
            });
            
            // Settings button
            settingsBtn.addEventListener('click', function() {
                settingsPanel.classList.toggle('active');
            });
            
            // Close settings when clicking outside
            document.addEventListener('click', function(e) {
                if (!settingsBtn.contains(e.target) && !settingsPanel.contains(e.target)) {
                    settingsPanel.classList.remove('active');
                }
            });
            
            // Bookmark button
            bookmarkBtn.addEventListener('click', function() {
                const currentUrl = urlInput.value;
                alert(`Bookmarking: ${currentUrl}`);
                this.classList.toggle('fas');
                this.classList.toggle('far');
            });
            
            // Shortcuts
            shortcuts.forEach(shortcut => {
                shortcut.addEventListener('click', function() {
                    const url = this.getAttribute('data-url');
                    urlInput.value = url;
                    alert(`Navigating to: ${url}`);
                });
            });
            
            // Bookmarks
            bookmarks.forEach(bookmark => {
                bookmark.addEventListener('click', function() {
                    const site = this.textContent;
                    let url = '';
                    
                    switch(site) {
                        case 'Google':
                            url = 'https://www.google.com/';
                            break;
                        case 'YouTube':
                            url = 'https://www.youtube.com/';
                            break;
                        case 'Gmail':
                            url = 'https://mail.google.com/';
                            break;
                        case 'Drive':
                            url = 'https://drive.google.com/';
                            break;
                        case 'Maps':
                            url = 'https://www.google.com/maps';
                            break;
                        case 'Photos':
                            url = 'https://photos.google.com/';
                            break;
                        case 'Docs':
                            url = 'https://docs.google.com/';
                            break;
                        case 'Calendar':
                            url = 'https://calendar.google.com/';
                            break;
                        case 'Translate':
                            url = 'https://translate.google.com/';
                            break;
                    }
                    
                    if (url) {
                        urlInput.value = url;
                        alert(`Navigating to: ${url}`);
                    }
                });
            });
            
            // Theme options
            themeOptions.forEach(option => {
                option.addEventListener('click', function() {
                    const theme = this.getAttribute('data-theme');
                    alert(`Changing theme to: ${theme}`);
                    // In a real browser, this would change the theme
                });
            });
        });
    </script>
</body>
</html>
