(function() {
  const WA_NUMBER = '2348127538882';
  const bubble = document.createElement('div');
  bubble.innerHTML = '💬';
  bubble.style.cssText = 'position:fixed;bottom:24px;right:24px;width:56px;height:56px;background:#25D366;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.5rem;cursor:pointer;box-shadow:0 4px 20px rgba(0,0,0,.2);z-index:9999;transition:transform .2s';
  bubble.onmouseenter = () => bubble.style.transform = 'scale(1.1)';
  bubble.onmouseleave = () => bubble.style.transform = 'scale(1)';
  const modal = document.createElement('div');
  modal.style.cssText = 'display:none;position:fixed;bottom:90px;right:24px;width:320px;background:#fff;border-radius:16px;box-shadow:0 8px 40px rgba(0,0,0,.15);z-index:9999;overflow:hidden;font-family:system-ui,sans-serif';
  const steps = [
    { q: 'Hi! 👋 What do you need help with?', opts: ['AI Videos', 'Social Media Content', 'Business Tools', 'Custom AI Tool', 'Something else'] },
    { q: 'What type of business or project?', opts: ['Small Business', 'Content Creator', 'Freelancer', 'Student', 'Other'] },
    { q: "What's your budget range?", opts: ['Under ₦50k', '₦50k - ₦200k', '₦200k+', 'Not sure yet'] },
  ];
  let step = 0, answers = [], name = '';
  function renderStep() {
    if (step < steps.length) {
      const s = steps[step];
      modal.innerHTML = `<div style="background:#111;padding:16px 20px;display:flex;justify-content:space-between;align-items:center"><div><div style="color:#fff;font-weight:700;font-size:.9rem">ToolKit Support</div><div style="color:rgba(255,255,255,.5);font-size:.75rem">Typically replies instantly</div></div><div onclick="document.getElementById('tk-modal').style.display='none'" style="color:rgba(255,255,255,.5);cursor:pointer;font-size:1.2rem">✕</div></div><div style="padding:20px"><div style="background:#f9fafb;border-radius:12px;padding:14px;font-size:.875rem;color:#111;margin-bottom:16px;line-height:1.6">${s.q}</div><div style="display:flex;flex-direction:column;gap:8px">${s.opts.map(o=>`<button onclick="pickOption('${o}')" style="background:#fff;border:1.5px solid #e5e7eb;border-radius:10px;padding:10px 14px;font-size:.82rem;cursor:pointer;text-align:left">${o}</button>`).join('')}</div></div>`;
    } else {
      modal.innerHTML = `<div style="background:#111;padding:16px 20px;display:flex;justify-content:space-between;align-items:center"><div style="color:#fff;font-weight:700;font-size:.9rem">Almost there! 🎉</div><div onclick="document.getElementById('tk-modal').style.display='none'" style="color:rgba(255,255,255,.5);cursor:pointer;font-size:1.2rem">✕</div></div><div style="padding:20px"><div style="background:#f9fafb;border-radius:12px;padding:14px;font-size:.875rem;color:#111;margin-bottom:16px">What's your name? So I know who I'm talking to 😊</div><input id="tk-name" type="text" placeholder="Your name..." style="width:100%;border:1.5px solid #e5e7eb;border-radius:10px;padding:10px 14px;font-size:.875rem;box-sizing:border-box;margin-bottom:12px;outline:none"><button onclick="sendToWA()" style="width:100%;background:#25D366;color:#fff;border:none;border-radius:10px;padding:12px;font-size:.9rem;font-weight:700;cursor:pointer">Continue on WhatsApp →</button></div>`;
    }
  }
  window.pickOption = function(opt) { answers.push(opt); step++; renderStep(); };
  window.sendToWA = function() {
    name = document.getElementById('tk-name').value.trim() || 'there';
    const msg = `Hi! I'm ${name} 👋\n\nI need help with: ${answers[0]}\nBusiness type: ${answers[1]}\nBudget: ${answers[2]}\n\nI found you on ToolKit — mrsmile-build.github.io/toolkit`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
    modal.style.display = 'none'; step = 0; answers = [];
  };
  modal.id = 'tk-modal';
  bubble.onclick = () => { step = 0; answers = []; renderStep(); modal.style.display = modal.style.display === 'none' ? 'block' : 'none'; };
  document.body.appendChild(bubble);
  document.body.appendChild(modal);
})();
