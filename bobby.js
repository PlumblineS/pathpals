// Bobby AI Assistant - Comprehensive FAQ Chatbot
// Flânerie Guide

// Toggle Bobby modal
function toggleBobby() {
    const modal = document.getElementById('bobbyModal');
    const button = document.getElementById('bobbyButton');
    
    if (modal.style.display === 'none' || modal.style.display === '') {
        modal.style.display = 'flex';
        button.textContent = '✕';
    } else {
        modal.style.display = 'none';
        button.textContent = '💬';
    }
}

// Ask Bobby a question
function askBobby(question) {
    const chat = document.getElementById('bobbyChat');
    
    // Add user message
    const userMsg = document.createElement('div');
    userMsg.className = 'bobby-message';
    userMsg.innerHTML = `
        <p style="background: rgba(107, 155, 158, 0.4); padding: 1rem; border-radius: 15px; margin: 0; color: white; line-height: 1.6; text-align: right;">
            ${question}
        </p>
    `;
    chat.appendChild(userMsg);
    chat.scrollTop = chat.scrollHeight;
    
    // Get Bobby's response with slight delay
    setTimeout(() => {
        const response = getBobbyResponse(question);
        const bobbyMsg = document.createElement('div');
        bobbyMsg.className = 'bobby-message';
        bobbyMsg.innerHTML = `
            <p style="background: rgba(107, 155, 158, 0.2); padding: 1rem; border-radius: 15px; margin: 0; color: var(--accent-light); line-height: 1.6;">
                ${response}
            </p>
        `;
        chat.appendChild(bobbyMsg);
        chat.scrollTop = chat.scrollHeight;
    }, 500);
}

// Send message from input
function sendBobbyMessage() {
    const input = document.getElementById('bobbyInput');
    const question = input.value.trim();
    
    if (!question) return;
    
    askBobby(question);
    input.value = '';
}

// Comprehensive Q&A Response System
function getBobbyResponse(question) {
    const q = question.toLowerCase();
    
    // ==================== ROUTES ====================
    
    // Creating routes
    if ((q.includes('create') || q.includes('make') || q.includes('add') || q.includes('post')) && 
        (q.includes('route') || q.includes('journey') || q.includes('walk'))) {
        return `<strong>Creating a Route - Step by Step:</strong><br><br>
        1️⃣ Click <strong>"Share Your Journey"</strong> on the main page<br>
        2️⃣ You'll see a fullscreen map - click anywhere to place your first waypoint<br>
        3️⃣ Click again to add more waypoints (minimum 2 required)<br>
        4️⃣ The route automatically follows streets between points! 🗺️<br>
        5️⃣ Add labels for each waypoint (like "Best coffee spot" or "Hidden park")<br>
        6️⃣ Click <strong>"Save Route"</strong> and fill in:<br>
        &nbsp;&nbsp;&nbsp;• Route name<br>
        &nbsp;&nbsp;&nbsp;• Description<br>
        &nbsp;&nbsp;&nbsp;• Category (Parks, Food, Art, etc.)<br>
        7️⃣ Hit Save and your route goes live! 🎉<br><br>
        <em>Pro tip: The route will automatically snap to streets and sidewalks, so you don't have to be precise!</em>`;
    }
    
    // Viewing/searching routes
    if ((q.includes('view') || q.includes('find') || q.includes('search') || q.includes('see') || q.includes('browse')) && 
        q.includes('route')) {
        return `<strong>Finding Routes:</strong><br><br>
        Click <strong>"Search Routes"</strong> on the main page to see all routes on a map! 🗺️<br><br>
        <strong>Filter options:</strong><br>
        • Use the category dropdown (Parks, Food, Art, etc.)<br>
        • Enter your zip code to find nearby routes<br>
        • Click any blue line on the map to see details<br><br>
        <strong>Route details show:</strong><br>
        • Name, description, and category<br>
        • Who created it<br>
        • Number of waypoints<br>
        • Full list of stops when you click "View Full Details"<br>
        • Like button ❤️<br><br>
        <em>Routes are color-coded on the map - click any polyline to highlight it!</em>`;
    }
    
    // Editing routes
    if (q.includes('edit') && q.includes('route')) {
        return `<strong>Editing Your Routes:</strong><br><br>
        1️⃣ Go to <strong>Dashboard → My Routes</strong><br>
        2️⃣ Find the route you want to change<br>
        3️⃣ Click the <strong>"Edit"</strong> button<br>
        4️⃣ The journey map opens with all your waypoints loaded<br>
        5️⃣ You can:<br>
        &nbsp;&nbsp;&nbsp;• Add new waypoints by clicking the map<br>
        &nbsp;&nbsp;&nbsp;• Change waypoint labels<br>
        &nbsp;&nbsp;&nbsp;• Remove waypoints<br>
        &nbsp;&nbsp;&nbsp;• Update the route path<br>
        6️⃣ Click <strong>"Save Route"</strong> to update (doesn't create a new route!)<br><br>
        <em>If you close without saving (X button), your changes are discarded and the original route stays intact.</em>`;
    }
    
    // Deleting routes
    if (q.includes('delete') && q.includes('route')) {
        return `<strong>Deleting Routes:</strong><br><br>
        1️⃣ Go to <strong>Dashboard → My Routes</strong><br>
        2️⃣ Find the route you want to remove<br>
        3️⃣ Click the red <strong>"Delete"</strong> button<br>
        4️⃣ Confirm deletion<br><br>
        <strong>⚠️ What happens:</strong><br>
        • Route is immediately hidden from public view<br>
        • It's stored in our database for 6 months (in case you change your mind or for spam investigation)<br>
        • After 6 months, it's permanently deleted<br>
        • Other users can no longer see or access it<br><br>
        <em>Need it removed immediately? Contact support with the route details.</em>`;
    }
    
    // Route categories
    if (q.includes('category') || q.includes('categories')) {
        return `<strong>Route Categories:</strong><br><br>
        Choose a category when creating routes to help others find them! Options include:<br><br>
        🌳 <strong>Parks & Nature</strong> - Green spaces, trails, scenic walks<br>
        🎨 <strong>Art & Culture</strong> - Murals, galleries, cultural sites<br>
        🍽️ <strong>Food & Cafes</strong> - Restaurant tours, food districts<br>
        🏛️ <strong>History</strong> - Historical landmarks, heritage sites<br>
        🏙️ <strong>Architecture</strong> - Notable buildings, design walks<br>
        🌃 <strong>Nightlife</strong> - Evening strolls, entertainment districts<br>
        🛍️ <strong>Shopping</strong> - Retail districts, boutique tours<br>
        📸 <strong>Photo Spots</strong> - Instagram-worthy locations<br>
        🏃 <strong>Exercise</strong> - Running/walking routes for fitness<br><br>
        <em>Filter routes by category in the Search Routes view!</em>`;
    }
    
    // Waypoints/labels
    if (q.includes('waypoint') || q.includes('label') || q.includes('stop')) {
        return `<strong>Waypoints & Labels:</strong><br><br>
        Waypoints are the numbered stops along your route! 📍<br><br>
        <strong>How they work:</strong><br>
        • Click the map to place waypoints (minimum 2 required)<br>
        • They appear as numbered pins (1, 2, 3...)<br>
        • The route automatically connects them following streets<br><br>
        <strong>Labels:</strong><br>
        • After placing waypoints, you'll see input fields below the map<br>
        • Add labels like "Best tacos in town" or "Hidden courtyard"<br>
        • Labels help others understand what makes each stop special<br>
        • They're optional but highly recommended!<br><br>
        <strong>Editing waypoints:</strong><br>
        • You can add more waypoints while creating/editing<br>
        • Change labels anytime before saving<br>
        • Click "Clear Route" to start over<br><br>
        <em>Pro tip: Good labels make routes way more popular!</em>`;
    }
    
    // Liking routes
    if ((q.includes('like') || q.includes('heart') || q.includes('favorite')) && q.includes('route')) {
        return `<strong>Liking Routes:</strong><br><br>
        Love a route? Show some appreciation! ❤️<br><br>
        <strong>How to like:</strong><br>
        1️⃣ Click any route on the Search Routes map<br>
        2️⃣ The info panel appears below<br>
        3️⃣ Hit the ❤️ <strong>"Like This Route"</strong> button<br>
        4️⃣ The count increases and the button changes to "Unlike"<br><br>
        <strong>Your likes:</strong><br>
        • View all liked routes in <strong>Dashboard → My Likes & Interests</strong><br>
        • Click any liked item to view it on the map<br>
        • Unlike from the dashboard or route view<br><br>
        <strong>Why like routes?</strong><br>
        • Helps others discover great walks<br>
        • Shows creators their routes are appreciated<br>
        • Build your personal collection of favorite routes<br><br>
        <em>Likes are public - they help flâneurs find the best routes!</em>`;
    }
    
    // ==================== SWARMS ====================
    
    // What is a swarm
    if (q.includes('swarm')) {
        return `<strong>Shopping Swarms - Flash Mobs for Local Business!</strong><br><br>
        A Shopping Swarm is a coordinated group walk where flâneurs explore local shops together! 👥🛍️<br><br>
        <strong>The concept:</strong><br>
        • Pick a meeting location (usually a central shopping district)<br>
        • Set a date and time<br>
        • Fellow flâneurs show up and explore local businesses as a group<br>
        • Support small merchants together!<br><br>
        <strong>Creating a swarm:</strong><br>
        1️⃣ Click <strong>"Create Shopping Swarm"</strong><br>
        2️⃣ Pin the meeting location on the map<br>
        3️⃣ Fill in: Name, description, date, time, duration<br>
        4️⃣ Save and it goes live!<br><br>
        <strong>Joining swarms:</strong><br>
        • Browse swarms in <strong>"View Swarms"</strong><br>
        • Click a pin to see details<br>
        • Hit <strong>"I'm Interested"</strong> to RSVP<br>
        • The creator can see how many people are coming!<br><br>
        <em>Swarms automatically hide 2 hours after their scheduled time to keep the map clean.</em>`;
    }
    
    // ==================== EVENTS ====================
    
    // What is an event
    if (q.includes('event')) {
        return `<strong>Local Events - Community Gatherings!</strong><br><br>
        Events are community celebrations, happenings, and gatherings! 🎉<br><br>
        <strong>Types of events:</strong><br>
        • Farmer's markets<br>
        • Street festivals<br>
        • Pop-up shops<br>
        • Art walks<br>
        • Community celebrations<br>
        • Food truck gatherings<br>
        • Outdoor concerts<br><br>
        <strong>Creating an event:</strong><br>
        1️⃣ Click <strong>"Promote Your Event"</strong><br>
        2️⃣ Pin the event location on the map<br>
        3️⃣ Fill in details: Name, description, date/time (can have start and end dates!)<br>
        4️⃣ Save and share!<br><br>
        <strong>Browsing events:</strong><br>
        • Click <strong>"Browse Events"</strong><br>
        • See all upcoming events on the map<br>
        • Click pins for full details<br>
        • Mark <strong>"I'm Interested"</strong> to save events<br><br>
        <em>Events automatically hide 2 hours after they end to keep things current!</em>`;
    }
    
    // ==================== ACCOUNT & SETTINGS ====================
    
    // Account creation
    if ((q.includes('sign up') || q.includes('create account') || q.includes('register')) && !q.includes('route')) {
        return `<strong>Creating Your Flânerie Account:</strong><br><br>
        <strong>Two ways to sign up:</strong><br><br>
        <strong>1️⃣ Email & Password:</strong><br>
        • Click <strong>"Sign In"</strong> → Switch to "Sign Up" tab<br>
        • Enter: Email, password (6+ characters), username<br>
        • Complete the Cloudflare verification (usually invisible)<br>
        • Check your email for verification link<br>
        • Click the link to activate your account<br><br>
        <strong>2️⃣ Google Sign-In:</strong><br>
        • Click <strong>"Sign in with Google"</strong><br>
        • Select your Google account<br>
        • Choose a username<br>
        • You're in!<br><br>
        <strong>⚠️ Important:</strong><br>
        • You must verify your email before posting routes/swarms/events<br>
        • Check spam folder if you don't see the verification email<br>
        • Usernames are unique - can only contain letters, numbers, and underscores<br><br>
        <em>Rate limited to 3 sign-ups per hour per browser to prevent spam.</em>`;
    }
    
    // Email verification
    if (q.includes('verify') || q.includes('verification') || (q.includes('email') && !q.includes('change'))) {
        return `<strong>Email Verification:</strong><br><br>
        You need to verify your email before creating content! 📧<br><br>
        <strong>How to verify:</strong><br>
        1️⃣ Check your email inbox for "Verify your Flânerie account"<br>
        2️⃣ Click the verification link<br>
        3️⃣ You'll be redirected and your account is verified! ✅<br><br>
        <strong>Didn't get the email?</strong><br>
        • Check spam/junk folders<br>
        • Wait a few minutes (can take 5-10 min sometimes)<br>
        • Look for a "Resend Verification" button in your profile<br>
        • Make sure you entered the correct email<br><br>
        <strong>Why verification matters:</strong><br>
        • Prevents spam and fake accounts<br>
        • Ensures we can contact you about your content<br>
        • Required by our abuse prevention system<br><br>
        <em>Once verified, you have full access to create routes, swarms, and events!</em>`;
    }
    
    // Changing username
    if (q.includes('change') && q.includes('username')) {
        return `<strong>Changing Your Username:</strong><br><br>
        1️⃣ Go to <strong>Dashboard → Account</strong> tab<br>
        2️⃣ Find the "Username" field<br>
        3️⃣ Enter your new username<br>
        4️⃣ Click <strong>"Update"</strong><br><br>
        <strong>Username rules:</strong><br>
        • 3-20 characters long<br>
        • Letters, numbers, and underscores only<br>
        • Must be unique (not taken by another user)<br>
        • No spaces or special characters<br><br>
        <strong>⚠️ Note:</strong><br>
        • Your username appears on all your routes/swarms/events<br>
        • After changing, refresh the page to see it updated everywhere<br>
        • Old username is released and can be taken by others<br><br>
        <em>Choose wisely - your username represents you to the Flânerie community!</em>`;
    }
    
    // Deleting account
    if (q.includes('delete') && q.includes('account')) {
        return `<strong>Deleting Your Account:</strong><br><br>
        <strong>⚠️ WARNING: This is permanent and cannot be undone!</strong><br><br>
        <strong>How to delete:</strong><br>
        1️⃣ Go to <strong>Dashboard → Account</strong> tab<br>
        2️⃣ Scroll to the "Danger Zone" (red section at bottom)<br>
        3️⃣ Click <strong>"Delete My Account"</strong><br>
        4️⃣ Confirm your decision<br><br>
        <strong>What gets deleted:</strong><br>
        • Your account and profile<br>
        • All your routes, swarms, and events<br>
        • All your messages<br>
        • All your likes and interests<br>
        • Your username becomes available again<br><br>
        <strong>What we keep (for legal/safety):</strong><br>
        • Activity logs for 3 years (required for investigations)<br>
        • Reported content (if you were reported)<br>
        • Deleted usernames list (to prevent impersonation)<br><br>
        <strong>⚠️ This action is immediate and irreversible!</strong><br><br>
        <em>Taking a break? Just sign out instead - your account will be here when you return!</em>`;
    }
    
    // ==================== DASHBOARD ====================
    
    if (q.includes('dashboard')) {
        return `<strong>Your Dashboard - Command Center:</strong><br><br>
        Access your dashboard by clicking the <strong>"Dashboard"</strong> button (only visible when signed in).<br><br>
        <strong>📑 Tabs:</strong><br><br>
        <strong>My Routes</strong> - All routes you've created<br>
        • View, edit, or delete your routes<br>
        • See likes and creation dates<br><br>
        <strong>My Swarms</strong> - Your shopping swarms<br>
        • Only shows active/upcoming swarms<br>
        • Edit or delete them<br><br>
        <strong>My Events</strong> - Events you created<br>
        • Active and upcoming events only<br>
        • Full edit control<br><br>
        <strong>My Likes & Interests</strong> - Bookmarked content<br>
        • All routes/swarms/events you've liked<br>
        • Quick access to favorites<br><br>
        <strong>My Drafts</strong> - Unfinished routes<br>
        • Routes you saved as drafts<br>
        • Click to finish and publish<br><br>
        <strong>Messages</strong> - Your inbox<br>
        • Direct messages from other users<br>
        • Replies to your content<br>
        • Delete or respond<br><br>
        <strong>Account</strong> - Settings & profile<br>
        • Change username, email, password<br>
        • Delete account option<br><br>
        <em>Dashboard is your home base for managing all your Flânerie activity!</em>`;
    }
    
    // ==================== MESSAGES ====================
    
    if (q.includes('message') || q.includes('messaging') || q.includes('dm') || q.includes('inbox')) {
        return `<strong>Messaging System:</strong><br><br>
        <strong>Sending messages:</strong><br>
        • Click on any user's username (on routes, swarms, events)<br>
        • Their profile opens with a <strong>"Send Message"</strong> button<br>
        • Type your message and send!<br><br>
        <strong>Receiving messages:</strong><br>
        • Check <strong>Dashboard → Messages</strong><br>
        • Unread badge shows count<br>
        • Click any message to read/reply<br><br>
        <strong>Message types:</strong><br>
        • <strong>Direct messages</strong> - One-on-one conversations<br>
        • <strong>Event/Swarm replies</strong> - Auto-hide after 30 days<br><br>
        <strong>Privacy & retention:</strong><br>
        • Messages are private (only you and recipient)<br>
        • You can delete from your dashboard anytime<br>
        • Backend keeps logs for 3 years (safety/legal)<br>
        • Event/swarm messages hide after 30 days but aren't deleted<br><br>
        <strong>⚠️ Reporting:</strong><br>
        • Report button on every message<br>
        • Use if someone sends inappropriate content<br>
        • Reports go to admin for review<br><br>
        <em>Be respectful! Messages are monitored for community safety.</em>`;
    }
    
    // ==================== WHAT IS FLANERIE ====================
    
    if (q.includes('flanerie') || q.includes('flâneur') || q.includes('what is this') || q.includes('what does')) {
        return `<strong>What is Flânerie?</strong><br><br>
        <strong>Flânerie</strong> (flah-nuh-REE) is the art of <em>leisurely urban exploration</em> - mindful wandering through city streets with intention and curiosity. 🚶✨<br><br>
        <strong>A Flâneur</strong> (flah-NUHR) is someone who:<br>
        • Strolls slowly, observing city life<br>
        • Explores without rushing<br>
        • Discovers hidden gems and local character<br>
        • Appreciates the everyday beauty of urban spaces<br>
        • Values the journey as much as the destination<br><br>
        <strong>Think of it as:</strong><br>
        • The opposite of power-walking from Point A to B<br>
        • Mindful tourism in your own city<br>
        • Exploring neighborhoods with fresh eyes<br>
        • Slow travel, but local<br><br>
        <strong>This platform helps you:</strong><br>
        • Share your favorite walking routes<br>
        • Discover hidden spots curated by locals<br>
        • Connect with other urban explorers<br>
        • Support local businesses through swarms<br>
        • Find community events<br><br>
        <em>"Not all those who wander are lost" - but all flâneurs are wanderers! 🗺️</em>`;
    }
    
    // ==================== MOBILE/PWA ====================
    
    if (q.includes('app') || q.includes('download') || q.includes('mobile') || q.includes('install') || q.includes('phone')) {
        return `<strong>Flânerie on Mobile:</strong><br><br>
        Flânerie works perfectly on your phone as a Progressive Web App (PWA)! 📱<br><br>
        <strong>iPhone/iPad:</strong><br>
        1️⃣ Open Flânerie in Safari<br>
        2️⃣ Tap the <strong>Share button</strong> (box with arrow)<br>
        3️⃣ Scroll down and tap <strong>"Add to Home Screen"</strong><br>
        4️⃣ Tap "Add" to confirm<br>
        5️⃣ The Flânerie icon appears on your home screen!<br><br>
        <strong>Android:</strong><br>
        1️⃣ Open Flânerie in Chrome<br>
        2️⃣ Tap the <strong>menu</strong> (three dots)<br>
        3️⃣ Tap <strong>"Add to Home screen"</strong> or "Install app"<br>
        4️⃣ Confirm and you're done!<br><br>
        <strong>Benefits of PWA:</strong><br>
        • Opens full-screen like a real app<br>
        • No App Store download needed<br>
        • Faster loading (caches content)<br>
        • Gets updates automatically<br>
        • Works offline for cached routes<br><br>
        <em>Pro tip: Pin Flânerie to your home screen for quick access when exploring!</em>`;
    }
    
    // ==================== PRIVACY & SAFETY ====================
    
    if (q.includes('privacy') || q.includes('data') || q.includes('information') || q.includes('safe')) {
        return `<strong>Privacy & Your Data:</strong><br><br>
        <strong>🔒 Our Core Commitment:</strong><br>
        <strong>We never sell your personal information. Period.</strong> This will never change.<br><br>
        <strong>What we collect:</strong><br>
        • Email and username (for your account)<br>
        • Routes, swarms, events you create (public)<br>
        • Messages you send (private)<br>
        • Likes and interests (helps recommendations)<br>
        • Device/browser info (for security)<br><br>
        <strong>What we DON'T collect:</strong><br>
        • Your location unless you use GPS features<br>
        • Browsing history outside our site<br>
        • Third-party tracking data<br><br>
        <strong>Data security:</strong><br>
        • Stored on Firebase (industry-standard encryption)<br>
        • Passwords are encrypted (we can't see them)<br>
        • Regular security updates<br>
        • Protected by Cloudflare<br><br>
        <strong>Your rights:</strong><br>
        • View all your data in Dashboard<br>
        • Delete your account anytime<br>
        • Request data removal<br>
        • Opt out of GPS features<br><br>
        <strong>📄 Full details:</strong> <a href='privacy.html' style='color: var(--accent-color); text-decoration: underline;'>Privacy Policy</a><br><br>
        <em>Questions? We're transparent about data practices - just ask!</em>`;
    }
    
    if (q.includes('report') || q.includes('abuse') || q.includes('inappropriate')) {
        return `<strong>Reporting Inappropriate Content:</strong><br><br>
        <strong>What to report:</strong><br>
        • Spam or fake content<br>
        • Harassment or threatening messages<br>
        • Inappropriate routes/swarms/events<br>
        • Impersonation<br>
        • Anything that violates community guidelines<br><br>
        <strong>How to report:</strong><br>
        • <strong>Messages:</strong> Click the "Report" button on any message<br>
        • <strong>Routes/Swarms/Events:</strong> Contact support with the content link<br>
        • <strong>Users:</strong> Report from their profile or messages<br><br>
        <strong>What happens:</strong><br>
        1️⃣ Your report goes to our admin team<br>
        2️⃣ We review within 24-48 hours<br>
        3️⃣ Action taken if guidelines violated:<br>
        &nbsp;&nbsp;&nbsp;• Warning to user<br>
        &nbsp;&nbsp;&nbsp;• Content removal<br>
        &nbsp;&nbsp;&nbsp;• Account suspension or ban<br>
        4️⃣ You'll get a notification of outcome<br><br>
        <strong>⚠️ False reports:</strong><br>
        • Don't abuse the report system<br>
        • Repeated false reports may result in your account being suspended<br><br>
        <em>Help us keep Flânerie safe and welcoming for everyone!</em>`;
    }
    
    // ==================== TECHNICAL/BUGS ====================
    
    if (q.includes('bug') || q.includes('error') || q.includes('broken') || q.includes('not working') || q.includes('problem')) {
        return `<strong>Having Technical Issues?</strong><br><br>
        <strong>Common fixes:</strong><br><br>
        <strong>1️⃣ Refresh the page</strong><br>
        • Ctrl+R (Windows) or Cmd+R (Mac)<br>
        • Solves 80% of issues!<br><br>
        <strong>2️⃣ Clear browser cache</strong><br>
        • Old cached files can cause problems<br>
        • Settings → Privacy → Clear browsing data<br><br>
        <strong>3️⃣ Try a different browser</strong><br>
        • We support Chrome, Firefox, Safari, Edge<br>
        • Some features may not work in older browsers<br><br>
        <strong>4️⃣ Check your internet connection</strong><br>
        • Maps require stable connection<br>
        • Try reloading when signal improves<br><br>
        <strong>Still broken?</strong><br>
        • Note exactly what's happening<br>
        • What browser/device you're using<br>
        • Screenshot if possible<br>
        • Contact support with details<br><br>
        <strong>Known issues:</strong><br>
        • Cloudflare Turnstile errors (harmless, working on it)<br>
        • Route editing occasionally requires refresh<br>
        • Maps load slowly on very slow connections<br><br>
        <em>We're constantly improving! Report bugs to help us fix them faster.</em>`;
    }
    
    // ==================== FEATURES & TIPS ====================
    
    if (q.includes('tip') || q.includes('trick') || q.includes('suggestion') || q.includes('best practice')) {
        return `<strong>Pro Tips for Flâneurs:</strong><br><br>
        <strong>🗺️ Creating Better Routes:</strong><br>
        • Use descriptive waypoint labels<br>
        • Aim for 3-7 waypoints (not too many!)<br>
        • Add context in description (best time, difficulty, etc.)<br>
        • Choose accurate categories<br>
        • Include hidden gems, not just obvious spots<br><br>
        <strong>👥 Successful Swarms:</strong><br>
        • Pick busy shopping districts<br>
        • Schedule for weekends when shops are open<br>
        • Set realistic duration (1-2 hours works well)<br>
        • Promote in the description<br><br>
        <strong>🎉 Great Events:</strong><br>
        • Post at least 1 week in advance<br>
        • Include all important details (parking, cost, etc.)<br>
        • Use start AND end times<br>
        • Update if plans change<br><br>
        <strong>📱 Mobile Use:</strong><br>
        • Install as PWA for best experience<br>
        • Download routes before walking (works offline!)<br>
        • Save battery by lowering map quality<br><br>
        <strong>🤝 Community:</strong><br>
        • Like routes you enjoy (helps others discover them)<br>
        • Send messages to route creators with feedback<br>
        • Be respectful in all interactions<br>
        • Share your own perspective - every route is unique!<br><br>
        <em>The best flâneurs share knowledge and discoveries!</em>`;
    }
    
    if (q.includes('cache') || q.includes('offline') || q.includes('internet')) {
        return `<strong>Offline & Caching:</strong><br><br>
        Flânerie uses smart caching to improve performance! ⚡<br><br>
        <strong>What's cached:</strong><br>
        • Route data (5 minutes)<br>
        • Swarm data (5 minutes)<br>
        • Event data (5 minutes)<br>
        • Map tiles (varies by browser)<br><br>
        <strong>Why caching?</strong><br>
        • Faster loading (you see routes instantly)<br>
        • Saves data usage<br>
        • Reduces server costs (keeps the site free!)<br>
        • Works partially offline<br><br>
        <strong>When cache refreshes:</strong><br>
        • Automatically after 5 minutes<br>
        • When you create new content<br>
        • When you manually refresh the page<br><br>
        <strong>Offline capabilities:</strong><br>
        • View previously loaded routes<br>
        • See map tiles you've visited<br>
        • Can't create new content (requires internet)<br>
        • Can't see real-time updates<br><br>
        <em>Pro tip: Load routes before going into areas with poor cell signal!</em>`;
    }
    
    // ==================== DEFAULT RESPONSE ====================
    
    return `Hmm, I'm not quite sure about that one! 🤔<br><br>
    <strong>Try asking about:</strong><br>
    • Creating or editing routes, swarms, events<br>
    • Account settings and verification<br>
    • Dashboard features<br>
    • Messaging system<br>
    • Mobile app installation<br>
    • Privacy and safety<br>
    • Tips and best practices<br>
    • What flânerie means<br><br>
    <strong>Still need help?</strong><br>
    Reach out to our team at <strong>support@flanerie.com</strong> (we'll set up a real email address soon!)<br><br>
    <em>I'm always learning - the more questions you ask, the smarter I get!</em>`;
}
