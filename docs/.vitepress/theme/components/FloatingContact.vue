<template>
  <div class="floating-contact">
    <div class="contact-card">
      <div class="card-header">
        <span class="title">💬 联系方式</span>
      </div>
      <div class="card-body">
        <a href="https://qm.qq.com/q/uUiF6nGZxK" target="_blank" class="contact-btn primary">
          👤 联系QQ
        </a>
        <a href="https://qm.qq.com/q/2sSpck8P76" target="_blank" class="contact-btn secondary">
          👥 加入讨论组
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.floating-contact {
  position: fixed;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 999;
}

.contact-card {
  width: 200px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  animation: slideIn 0.5s ease, float 3s ease-in-out infinite;
  transition: all 0.3s ease;
}

.contact-card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  border-color: var(--vp-c-brand-1);
}

.card-header {
  padding: 16px;
  background: linear-gradient(135deg, #e0f2fe 0%, #dbeafe 100%);
  border-bottom: 1px solid var(--vp-c-divider);
}

.dark .card-header {
  background: linear-gradient(135deg, rgba(56, 189, 248, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%);
}

.card-header .title {
  font-size: 15px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  display: block;
  text-align: center;
}

.card-body {
  padding: 16px;
  background: var(--vp-c-bg);
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.contact-btn {
  display: block;
  width: 100%;
  padding: 12px;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.contact-btn.primary {
  background: var(--vp-c-brand-1);
  color: var(--vp-c-white);
}

.contact-btn.primary:hover {
  background: var(--vp-c-brand-2);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.contact-btn.secondary {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  border-color: var(--vp-c-divider);
}

.contact-btn.secondary:hover {
  background: var(--vp-c-bg-mute);
  border-color: var(--vp-c-brand-1);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

@keyframes slideIn {
  from {
    transform: translateY(-50%) translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateY(-50%) translateX(0);
    opacity: 1;
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(-50%) translateX(0);
  }
  50% {
    transform: translateY(-50%) translateX(-5px);
  }
}

/* 移动端适配 */
@media (max-width: 768px) {
  .floating-contact {
    right: 10px;
    top: auto;
    bottom: 80px;
    transform: none;
  }
  
  .contact-card {
    width: 180px;
    animation: slideInMobile 0.5s ease;
  }
  
  @keyframes slideInMobile {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
}
</style>
