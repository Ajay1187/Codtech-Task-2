// errorHandler.js
export function showError(message) {
  const errorDiv = document.getElementById("error-message");
  if (!errorDiv) {
    const newErrorDiv = document.createElement("div");
    newErrorDiv.id = "error-message";
    newErrorDiv.textContent = message;
    newErrorDiv.style.color = "red";
    document.body.appendChild(newErrorDiv);
  }
}

export function hideError() {
  const errorDiv = document.getElementById("error-message");
  if (errorDiv) errorDiv.remove();
}
