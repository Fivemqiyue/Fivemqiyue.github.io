---
layout: page
---

<div class="scripts-hero">
  <div class="hero-content">
    <h1 class="hero-title">福利脚本资源</h1>
    <p class="hero-tagline">免费分享高质量 FiveM 脚本，助力服务器开发</p>
    <div class="hero-notice">
      <span class="notice-icon">🎁</span>
      <span class="notice-text">完全免费 | 持续更新 | 禁止倒卖</span>
    </div>
  </div>
</div>

<div class="scripts-container">

<div class="section-header">
  <h2>🎁 免费脚本</h2>
  <p>精选的免费 FiveM 脚本，无需付费即可使用</p>
</div>

<div class="script-grid">

<div class="script-card free-card">
  <div class="script-overlay"></div>
  <div class="script-header">
    <span class="script-icon">📦</span>
    <h3>示例脚本</h3>
    <span class="script-badge free">🆓 免费</span>
  </div>
  <div class="script-content">
    <p class="script-desc">这是一个示例脚本的描述，您可以根据需要修改此内容。</p>
    <div class="script-features">
      <span class="feature-tag">✅ 功能一</span>
      <span class="feature-tag">✅ 功能二</span>
      <span class="feature-tag">✅ 功能三</span>
    </div>
    <div class="script-meta">
      <span>🔧 框架: ESX/QB</span>
      <span>📅 持续更新</span>
    </div>
  </div>
</div>

</div>

</div>

<style>
/* Hero Section */
.scripts-hero {
  background: linear-gradient(135deg, #fef3c7 0%, #fce7f3 100%);
  padding: 80px 24px 100px;
  margin: 0 -24px 48px -24px;
  text-align: center;
  position: relative;
  overflow: visible;
  min-height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.scripts-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23f59e0b" fill-opacity="0.08"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
  opacity: 0.4;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 900px;
  width: 100%;
  padding: 0 24px;
}

.hero-title {
  font-size: 52px;
  font-weight: 800;
  background: linear-gradient(135deg, #f59e0b, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0 0 24px 0;
  letter-spacing: 3px;
  line-height: 1.2;
  animation: fadeInUp 0.8s ease-out;
  filter: drop-shadow(0 2px 4px rgba(245, 158, 11, 0.2));
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-tagline {
  font-size: 20px;
  font-weight: 500;
  color: #334155;
  margin: 0 0 40px 0;
  line-height: 1.6;
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

.hero-notice {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(15px);
  border: 2px solid rgba(245, 158, 11, 0.2);
  padding: 16px 28px;
  border-radius: 50px;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 4px 20px rgba(245, 158, 11, 0.15);
  animation: fadeInUp 0.8s ease-out 0.4s both;
  transition: all 0.3s ease;
}

.hero-notice:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(245, 158, 11, 0.25);
  background: rgba(255, 255, 255, 0.95);
  border-color: rgba(236, 72, 153, 0.3);
}

.notice-icon {
  font-size: 24px;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
}

.notice-text {
  color: #334155;
  font-size: 15px;
  font-weight: 600;
}

/* Container */
.scripts-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px 48px;
}

/* Section Header */
.section-header {
  text-align: center;
  margin: 64px 0 40px;
}

.section-header h2 {
  font-size: 36px;
  font-weight: 700;
  margin: 0 0 12px 0;
  color: var(--vp-c-text-1);
}

.section-header p {
  font-size: 16px;
  color: var(--vp-c-text-2);
  margin: 0;
}

/* Script Grid */
.script-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 300px));
  gap: 24px;
  margin: 32px 0;
  justify-content: center;
}

.script-card-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.script-card {
  background: var(--vp-c-bg-soft);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 20px;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 300px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.script-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--vp-c-bg-soft);
  opacity: 0.92;
  z-index: 0;
  transition: opacity 0.3s ease;
}

.dark .script-overlay {
  opacity: 0.95;
}

/* 福利脚本卡片背景 */
.script-card.free-card {
  background: linear-gradient(135deg, #f59e0b 0%, #ec4899 100%);
}

.script-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  border-color: var(--vp-c-brand-1);
}

.script-card:hover .script-overlay {
  opacity: 0.85;
}

.script-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
}

.script-icon {
  font-size: 32px;
}

.script-header h3 {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  flex: 1;
}

.script-badge {
  color: white;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
}

.script-badge.free {
  background: linear-gradient(135deg, #f59e0b, #d97706);
}

.script-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
  z-index: 1;
}

.script-desc {
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin: 0;
}

.script-features {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.feature-tag {
  background: var(--vp-c-bg-mute);
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 13px;
  color: var(--vp-c-text-2);
}

.script-meta {
  display: flex;
  gap: 16px;
  font-size: 14px;
  color: var(--vp-c-text-2);
  padding-top: 12px;
  border-top: 1px solid var(--vp-c-divider);
}

</style>
