function createHintCard(container) {
  const config = {
    siteUrl: "https://panel-zhcn-hth.com",
    keyword: "华体会",
    hint: "首次访问请确认链接正确，避免进入仿冒页面",
    badgeLabel: "关键词",
  };

  const card = document.createElement("div");
  card.style.cssText = `
    border: 1px solid #d9e2ef;
    border-radius: 10px;
    padding: 18px 22px;
    max-width: 420px;
    background: #f7faff;
    font-family: system-ui, sans-serif;
    margin: 20px auto;
    box-shadow: 0 2px 6px rgba(0,0,0,0.06);
  `;

  const title = document.createElement("h3");
  title.textContent = "📌 页面提示";
  title.style.margin = "0 0 10px 0";
  title.style.fontSize = "1.1rem";
  title.style.color = "#1f2a3f";

  const desc = document.createElement("p");
  desc.textContent = config.hint;
  desc.style.margin = "6px 0 14px 0";
  desc.style.color = "#2c3e50";
  desc.style.lineHeight = "1.5";

  const badgeGroup = document.createElement("div");
  badgeGroup.style.cssText = `
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 12px;
  `;

  const keywordBadge = createBadge(config.keyword, "#1e6f9f", "#e7f1ff");
  const urlBadge = createBadge(config.siteUrl, "#2d7d46", "#e6f4ea");

  badgeGroup.appendChild(keywordBadge);
  badgeGroup.appendChild(urlBadge);

  const accessHint = document.createElement("div");
  accessHint.style.cssText = `
    background: #eef3fa;
    border-radius: 8px;
    padding: 10px 14px;
    font-size: 0.9rem;
    color: #1f3a5f;
    border-left: 4px solid #4a7cbf;
  `;
  accessHint.textContent = "🔒 访问说明：请通过官方渠道获取入口，注意核对浏览器地址栏";

  card.appendChild(title);
  card.appendChild(desc);
  card.appendChild(badgeGroup);
  card.appendChild(accessHint);

  container.appendChild(card);
}

function createBadge(text, bgColor, textColor) {
  const badge = document.createElement("span");
  badge.textContent = text;
  badge.style.cssText = `
    display: inline-block;
    background: ${textColor};
    color: ${bgColor};
    font-weight: 500;
    font-size: 0.8rem;
    padding: 4px 12px;
    border-radius: 20px;
    border: 1px solid ${bgColor}33;
    white-space: nowrap;
  `;
  return badge;
}

function initPageHelper() {
  const root = document.getElementById("site-helper");
  if (!root) {
    console.warn("未找到容器 #site-helper，请在目标元素上设置该 id");
    return;
  }
  createHintCard(root);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initPageHelper);
} else {
  initPageHelper();
}