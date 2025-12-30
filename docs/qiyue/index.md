---
layout: page
---

<div class="notes-hero">
  <div class="hero-content">
    <h1 class="hero-title">七月的开发笔记</h1>
    <p class="hero-tagline">实战经验、代码片段、问题解决方案</p>
    <div class="hero-notice">
      <span class="notice-icon">💡</span>
      <span class="notice-text">持续更新 | 实用代码 | 快速查询</span>
    </div>
  </div>
</div>

<div class="notes-container">

<div class="notes-grid">

<a href="/qiyue/wendang" class="note-card-link">
<div class="note-card code-card">
  <div class="note-overlay"></div>
  <div class="note-header">
    <span class="note-icon">💻</span>
    <h3>代码区</h3>
    <span class="note-badge">📝 笔记</span>
  </div>
  <div class="note-content">
    <p class="note-desc">ESX 框架常用代码、API 调用、配置模板</p>
    <div class="note-tags">
      <span class="tag-item">ESX</span>
      <span class="tag-item">API</span>
      <span class="tag-item">配置</span>
    </div>
  </div>
</div>
</a>

<a href="/qiyue/vehicle" class="note-card-link">
<div class="note-card vehicle-card">
  <div class="note-overlay"></div>
  <div class="note-header">
    <span class="note-icon">🚗</span>
    <h3>车辆区</h3>
    <span class="note-badge">🔧 修复</span>
  </div>
  <div class="note-content">
    <p class="note-desc">车辆系统开发问题与解决方案</p>
    <div class="note-tags">
      <span class="tag-item">颜色保存</span>
      <span class="tag-item">数据修复</span>
    </div>
  </div>
</div>
</a>

</div>

</div>

<style>
.notes-hero {
  background: linear-gradient(135deg, #e0f2fe 0%, #dcfce7 100%);
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

.notes-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%2322c55e" fill-opacity="0.08"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
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
  background: linear-gradient(135deg, #0ea5e9, #10b981);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0 0 24px 0;
  letter-spacing: 3px;
  line-height: 1.2;
  animation: fadeInUp 0.8s ease-out;
  filter: drop-shadow(0 2px 4px rgba(14, 165, 233, 0.2));
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
  border: 2px solid rgba(14, 165, 233, 0.2);
  padding: 16px 28px;
  border-radius: 50px;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 4px 20px rgba(14, 165, 233, 0.15);
  animation: fadeInUp 0.8s ease-out 0.4s both;
  transition: all 0.3s ease;
}

.hero-notice:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(14, 165, 233, 0.25);
  background: rgba(255, 255, 255, 0.95);
  border-color: rgba(16, 185, 129, 0.3);
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

.notes-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 24px;
}

.notes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 300px));
  gap: 24px;
  margin: 32px 0;
  justify-content: center;
}

.note-card-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.note-card {
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

.note-overlay {
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

.dark .note-overlay {
  opacity: 0.95;
}

.note-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  border-color: var(--vp-c-brand-1);
}

.note-card:hover .note-overlay {
  opacity: 0.85;
}

/* 自定义卡片背景 */
.note-card.code-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.note-card.vehicle-card {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.note-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
}

.note-icon {
  font-size: 32px;
}

.note-header h3 {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  flex: 1;
}

.note-badge {
  color: white;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  background: linear-gradient(135deg, #10b981, #059669);
}

.note-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
  z-index: 1;
}

.note-desc {
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin: 0;
}

.note-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag-item {
  background: var(--vp-c-bg-mute);
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 13px;
  color: var(--vp-c-text-2);
}
</style>
