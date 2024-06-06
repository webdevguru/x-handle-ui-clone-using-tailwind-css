// script.js

document.addEventListener('DOMContentLoaded', () => {
  const tweetButton = document.querySelector('.tweet-button');
  const tweetInput = document.querySelector('textarea');
  const tweetContainer = document.querySelector('.tweet-container');

  tweetButton.addEventListener('click', () => {
    const tweetText = tweetInput.value.trim();
    if (tweetText !== "") {
      const tweetElement = document.createElement('div');
      tweetElement.classList.add('bg-white', 'p-6', 'rounded-lg', 'shadow-lg', 'mb-6');
      tweetElement.innerHTML = `
        <div class="flex space-x-4">
          <img src="https://via.placeholder.com/50" alt="Profile Picture" class="rounded-full">
          <div>
            <h2 class="font-bold text-lg">Your Name</h2>
            <p class="text-gray-600">@yourusername</p>
          </div>
        </div>
        <p class="mt-4 text-gray-700">${tweetText}</p>
        <div class="flex space-x-4 mt-4 text-gray-600">
          <div class="flex items-center space-x-2 hover:text-blue-500">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4v4m0 0l-6 6m6-6l-6-6m-4 6H6a2 2 0 01-2-2V6a2 2 0 012-2h4"></path>
            </svg>
            <span>Reply</span>
          </div>
          <div class="flex items-center space-x-2 hover:text-blue-500">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>Retweet</span>
          </div>
          <div class="flex items-center space-x-2 hover:text-blue-500">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
            </svg>
            <span>Like</span>
          </div>
          <div class="flex items-center space-x-2 hover:text-blue-500">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v16c0 1.104.895 2 2 2h12a2 2 0 002-2V4"></path>
            </svg>
            <span>Share</span>
          </div>
        </div>
      `;
      tweetContainer.prepend(tweetElement);
      tweetInput.value = "";
    }
  });
});
