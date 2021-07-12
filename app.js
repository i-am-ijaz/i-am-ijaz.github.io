document.addEventListener("DOMContentLoaded", () => {
    // DOM elements
    const button = document.querySelector("button");
    const quote = document.querySelector("blockquote p");
    const cite = document.querySelector("blockquote cite");

    async function updateQuote() {
        // Fetch a random quote from the Quotable API
        const response = await fetch("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json");
        const data = await response.json();
        if (response.ok) {
            // Update DOM elements
            quote.textContent = data.quoteText;
            cite.textContent = data.quoteAuthor;
        } else {
            quote.textContent = "An error occured";
            console.log(data);
        }
    }

    // Attach an event listener to the `button`
    button.addEventListener("click", updateQuote);


    // call updateQuote once when page loads
    updateQuote();
});
