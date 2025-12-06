document.addEventListener("DOMContentLoaded", function() {
  console.log("Welcome to Junfei's site!");
  
  // HR Assistant Link Configuration
  // 🔧 TO UPDATE: After deploying to Streamlit Cloud, replace "#" below with your Streamlit app URL
  // Example: "https://hr-assistant.streamlit.app"
  // Get your URL from: https://share.streamlit.io after deployment
  const HR_ASSISTANT_URL = "#"; // ⬅️ UPDATE THIS with your Streamlit Cloud URL
  
  const hrAssistantLink = document.getElementById("hr-assistant-link");
  const hrAssistantStatus = document.getElementById("hr-assistant-status");
  
  if (hrAssistantLink && hrAssistantStatus) {
    if (HR_ASSISTANT_URL !== "#") {
      hrAssistantLink.href = HR_ASSISTANT_URL;
      hrAssistantStatus.textContent = "(Live Demo Available)";
      hrAssistantStatus.style.color = "#28a745";
    } else {
      hrAssistantLink.href = "#";
      hrAssistantLink.addEventListener("click", function(e) {
        e.preventDefault();
        alert("🚀 HR Assistant deployment in progress!\n\nTo update this link:\n1. Deploy to Streamlit Cloud: https://share.streamlit.io\n2. Get your app URL\n3. Update HR_ASSISTANT_URL in script.js");
      });
    }
  }
});
