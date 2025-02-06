javascript: (async () => {
  const userId = decodeURIComponent("%s");
  const response = await fetch("https://www.creativedesk.de/companies");
  const text = await response.text();
  const parser = new DOMParser();
  const doc = parser.parseFromString(text, "text/html");
  const element = doc.querySelector('a[href*="' + userId + '"]');
  const parentLi = element?.closest("li");
  const statusText = parentLi?.querySelector('span.working-status')?.innerText?.trim();
  const fullName = parentLi?.querySelector('span.username.with-role')?.innerText;
  alert(fullName + '\n\n' + statusText || "Not found");
})();
