// Render the emojis as <span> tags in the emojisContainer <div>

// Hints: Use either createElement(), textContent, and append()
// or innerHTML and a template string

const myEmojis = ["👨‍💻", "⛷", "🍲"]
const emojiContainer = document.getElementById("emojiContainer")

for (let i = 0; i < myEmojis.length; i++) {
    // emojiContainer.textContent += myEmojis[i];
    let spanEl = document.createElement("span");
    spanEl.textContent = myEmojis[i]
    emojiContainer.append(spanEl)

}
