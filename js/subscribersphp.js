// Enhanced glass morphism subscription message
(function() {
    const urlParams = new URLSearchParams(window.location.search);
    const successMsg = urlParams.get('subscribe_success');
    const errorMsg = urlParams.get('subscribe_error');
    
    if (!successMsg && !errorMsg) return;
    
    // Clean URL without reload
    const cleanUrl = window.location.pathname;
    window.history.replaceState({}, document.title, cleanUrl);
    
    const isSuccess = !!successMsg;
    const message = decodeURIComponent(isSuccess ? successMsg : errorMsg);
    const icon = isSuccess ? 'fa-check-circle' : 'fa-exclamation-circle';
    const gradient = isSuccess 
        ? 'linear-gradient(135deg, rgba(72,187,120,0.95), rgba(56,161,105,0.95))'
        : 'linear-gradient(135deg, rgba(245,101,101,0.95), rgba(220,70,70,0.95))';
    
    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'glass-toast';
    toast.innerHTML = `
        <div class="toast-icon"><i class="fas ${icon}"></i></div>
        <div class="toast-message">${escapeHtml(message)}</div>
        <button class="toast-close" aria-label="Close">&times;</button>
    `;
    
    // Apply styles
    Object.assign(toast.style, {
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        maxWidth: '380px',
        background: gradient,
        backdropFilter: 'blur(12px)',
        borderRadius: '1rem',
        padding: '1rem 1.25rem',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        boxShadow: '0 15px 35px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.2)',
        zIndex: '10000',
        fontFamily: "'Poppins', sans-serif",
        border: '1px solid rgba(255,255,255,0.3)',
        opacity: '0',
        transform: 'translateX(420px)',
        transition: 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
    });
    
    // Inject required styles (only once)
    if (!document.getElementById('toast-styles')) {
        const style = document.createElement('style');
        style.id = 'toast-styles';
        style.textContent = `
            .toast-icon { font-size: 1.8rem; color: white; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2)); }
            .toast-message { flex: 1; color: white; font-size: 0.95rem; font-weight: 500; line-height: 1.4; text-shadow: 0 1px 2px rgba(0,0,0,0.1); }
            .toast-close { background: none; border: none; color: rgba(255,255,255,0.8); font-size: 1.6rem; line-height: 1; cursor: pointer; padding: 0; width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; border-radius: 50%; transition: all 0.2s; }
            .toast-close:hover { background: rgba(255,255,255,0.2); color: white; transform: scale(1.05); }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(toast);
    
    // Trigger slide-in
    requestAnimationFrame(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateX(0)';
    });
    
    let timeoutId = setTimeout(closeToast, 6000);
    
    // Close on button click
    toast.querySelector('.toast-close').addEventListener('click', () => {
        clearTimeout(timeoutId);
        closeToast();
    });
    
    // Pause timer on hover
    toast.addEventListener('mouseenter', () => clearTimeout(timeoutId));
    toast.addEventListener('mouseleave', () => {
        timeoutId = setTimeout(closeToast, 2000);
    });
    
    function closeToast() {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(420px)';
        setTimeout(() => toast.remove(), 400);
    }
    
    // Helper to prevent XSS
    function escapeHtml(str) {
        return str.replace(/[&<>]/g, function(m) {
            if (m === '&') return '&amp;';
            if (m === '<') return '&lt;';
            if (m === '>') return '&gt;';
            return m;
        }).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, function(c) {
            return c;
        });
    }
})();