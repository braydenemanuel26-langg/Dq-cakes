<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Order Your Cake - DQ Haines City</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');
        body { font-family: 'Inter', sans-serif; color: #334155; }
        .bg-dqblue { background-color: #004d95; }
        .text-dqblue { color: #004d95; }
        .bg-dqred { background-color: #e31837; }
        .text-dqred { color: #e31837; }
        input[type="radio"]:checked + .type-card { background-color: #f0f7ff; border-color: #004d95; box-shadow: 0 0 0 2px #004d95; }
        #main-preview-img { object-fit: contain; width: 100%; height: 100%; transform: scale(1.05); }
        @media print { .no-print { display: none !important; } }
        /* Professional quiet label styling */
        label.quiet-label { font-size: 11px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.025em; margin-bottom: 4px; display: block; }
    </style>
</head>
<body class="bg-gray-100 min-h-screen pb-12">

    <div id="main-content">
        <div class="bg-dqblue text-white py-6 shadow-xl mb-4 text-center no-print">
            <h1 class="text-3xl font-black italic uppercase leading-none">Dairy Queen</h1>
            <p class="text-xs font-bold opacity-80 uppercase tracking-widest mt-1">Haines City • 863-422-9336</p>
        </div>

        <div class="max-w-4xl mx-auto px-4 no-print">
            <div id="form-container" class="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
                <form id="cake-order-form" action="https://formspree.io/f/meepqaod" method="POST" enctype="multipart/form-data" class="p-6 space-y-6">
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="space-y-1">
                            <label class="quiet-label">Customer Name</label>
                            <input type="text" id="custName" name="fullName" required placeholder="Full Name" class="w-full p-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-dqblue text-sm" />
                        </div>
                        <div class="space-y-1">
                            <label class="quiet-label">Phone Number</label>
                            <input type="tel" id="custPhone" name="phone" required placeholder="(___-___-____)" class="w-full p-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-dqblue text-sm" />
                        </div>
                    </div>

                    <div class="space-y-4">
                        <h4 class="font-bold text-dqblue border-b pb-1 uppercase text-xs tracking-wider">1. Select Cake Type & Flavor</h4>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                            <div class="space-y-4">
                                <div class="grid grid-cols-2 gap-2">
                                    <label class="cursor-pointer">
                                        <input type="radio" id="typeTraditional" name="cakeType" value="traditional" class="hidden" checked onchange="updateUI()" />
                                        <div class="type-card p-3 text-center border-2 rounded-xl bg-white transition-all">
                                            <span class="font-bold text-xs uppercase text-dqblue">Traditional</span>
                                        </div>
                                    </label>
                                    <label class="cursor-pointer">
                                        <input type="radio" id="typeBlizzard" name="cakeType" value="blizzard" class="hidden" onchange="updateUI()" />
                                        <div class="type-card p-3 text-center border-2 rounded-xl bg-white transition-all">
                                            <span class="font-bold text-xs uppercase text-dqblue">Blizzard®</span>
                                        </div>
                                    </label>
                                </div>

                                <div>
                                    <label class="quiet-label">Ice Cream Base</label>
                                    <select name="iceCreamType" id="iceCreamType" class="w-full p-3 border border-gray-200 rounded-xl bg-white font-medium text-sm outline-none">
                                        <option value="Vanilla">Vanilla</option>
                                        <option value="Chocolate">Chocolate</option>
                                        <option value="Vanilla/Choc Twist">Vanilla/Choc Twist</option>
                                    </select>
                                </div>

                                <div id="blizzard-flavor-div" class="hidden">
                                    <label class="quiet-label">Select Blizzard® Flavor</label>
                                    <select id="flavorSelect" name="blizzardFlavor" onchange="updateUI()" class="w-full p-3 border border-dqblue/30 rounded-xl bg-white font-medium text-sm outline-none">
                                        <option value="OREO" selected>OREO® Blizzard® Cake</option>
                                        <option value="Reese's">Reese's® Peanut Butter Cup</option>
                                        <option value="Choco Brownie">Choco Brownie Extreme</option>
                                        <option value="Cookie Dough">Chocolate Chip Cookie Dough</option>
                                    </select>
                                </div>

                                <div>
                                    <label class="quiet-label">2. Cake Size</label>
                                    <select id="cakeSize" name="cakeSize" required onchange="updateUI()" class="w-full p-3 border border-gray-200 rounded-xl bg-white font-medium text-sm outline-none">
                                        <option value="mini" data-price="21.99">Mini Cake (Feeds 2-5) - $21.99</option>
                                        <option value="8inch" data-price="33.99" selected>8-inch (Feeds 8-10) - $33.99</option>
                                        <option value="10inch" data-price="38.99">10-inch (Feeds 12-16) - $38.99</option>
                                        <option value="sheet" data-price="46.99">Sheet Cake (Feeds 20-24) - $46.99</option>
                                    </select>
                                </div>
                            </div>

                            <div class="relative h-64 bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 shadow-inner flex items-center justify-center">
                                <img id="main-preview-img" src="" alt="Cake Preview" />
                                <div id="preview-label" class="absolute bottom-2 left-2 bg-white/90 border border-gray-100 text-gray-500 px-3 py-1 rounded-lg text-[9px] font-bold uppercase tracking-widest shadow-sm">Traditional Cake</div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-blue-50/50 p-5 rounded-2xl space-y-4 border border-blue-100">
                        <div class="flex flex-col md:flex-row md:items-start justify-between gap-2">
                            <div class="space-y-1">
                                <h4 class="font-bold text-dqblue uppercase text-xs tracking-wider">3. Pickup Details</h4>
                                <div class="text-[9px] font-bold text-dqblue uppercase bg-white px-3 py-1 rounded border border-blue-100 inline-block">
                                    Mon-Thu: 11AM-9PM | Fri-Sun: 11AM-10PM
                                </div>
                                <p class="text-[9px] text-gray-400 font-medium">Questions? Call <a href="tel:8634229336" class="underline hover:text-dqblue">863-422-9336</a></p>
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-4">
                            <input type="date" id="pickupDate" name="pickupDate" required onchange="updateUI()" class="p-3 border border-gray-200 rounded-xl text-sm outline-none" />
                            <input type="time" id="pickupTime" name="pickupTime" required onchange="updateUI()" class="p-3 border border-gray-200 rounded-xl text-sm outline-none" />
                        </div>
                        <div class="text-center">
                            <p id="time-warning" class="hidden text-[10px] text-dqred font-bold animate-pulse">⚠️ Store is closed! Select a valid pickup time.</p>
                            <p id="blizzard-date-error" class="hidden text-[10px] text-dqred font-bold">⚠️ Blizzard Cakes require 48 hours notice!</p>
                        </div>
                    </div>

                    <div class="space-y-4">
                        <h4 class="font-bold text-dqblue border-b pb-1 uppercase text-xs tracking-wider">4. Decorating</h4>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label class="quiet-label">Frosting Border Color</label>
                                <select id="borderColor" name="borderColor" class="w-full p-3 border border-gray-200 rounded-xl bg-white text-sm outline-none">
                                    <option value="Blue">Blue</option><option value="Green">Green</option><option value="Orange">Orange</option>
                                    <option value="Pink">Pink</option><option value="Red">Red</option><option value="Black">Black</option><option value="White">White</option>
                                </select>
                            </div>
                            <div>
                                <label class="quiet-label">Secondary Color (Optional)</label>
                                <select id="backupColor" name="backupColor" class="w-full p-3 border border-gray-200 rounded-xl bg-white text-sm outline-none">
                                    <option value="None">None</option>
                                    <option value="White">White</option><option value="Blue">Blue</option><option value="Red">Red</option><option value="Pink">Pink</option>
                                </select>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="space-y-1">
                                <label class="quiet-label">Reference Photo (Optional)</label>
                                <input type="file" name="refPhoto" accept="image/*" class="w-full p-2 border border-gray-200 rounded-xl text-[11px] bg-white" />
                            </div>
                            <div class="space-y-1">
                                <label class="quiet-label">Special Instructions</label>
                                <input type="text" id="specialNotes" name="specialNotes" placeholder="Ex: Spiderman Theme, no sprinkles" class="w-full p-3 border border-gray-200 rounded-xl text-sm outline-none bg-white" />
                            </div>
                        </div>
                        <div class="space-y-1">
                            <label class="quiet-label">Message Written On Cake</label>
                            <textarea id="cakeMsg" name="cakeMessage" rows="2" class="w-full p-3 border border-gray-200 rounded-xl text-sm outline-none" placeholder="Ex: Happy Birthday Sarah! - Red Icing"></textarea>
                        </div>
                    </div>

                    <div class="p-4 bg-yellow-50 rounded-2xl border border-yellow-100">
                        <label class="flex items-start space-x-3 cursor-pointer">
                            <input type="checkbox" id="termsConfirm" required class="mt-1 h-4 w-4 text-dqblue rounded border-gray-300">
                            <span class="text-[10px] text-gray-600 font-medium leading-tight">
                                I agree to the Store Rules: Blizzard® Cakes require 48 hours notice. Same-day orders for Traditional cakes include a $5 convenience fee.
                            </span>
                        </label>
                    </div>

                    <div class="bg-dqblue p-5 rounded-2xl text-white flex justify-between items-center shadow-lg">
                        <div class="flex flex-col">
                            <span class="font-bold uppercase text-[10px] opacity-70">Total Due at Pickup:</span>
                            <span id="fee-note" class="hidden text-[9px] text-yellow-300 font-bold uppercase tracking-widest">+$5 Same Day Fee Applied</span>
                        </div>
                        <span id="total-display" class="text-3xl font-black italic">$33.99</span>
                    </div>

                    <div class="space-y-4">
                        <button id="submitBtn" type="submit" class="w-full bg-dqred text-white py-5 rounded-2xl font-black uppercase tracking-widest shadow-xl active:scale-95 transition-all">Review Order Summary</button>
                        <div class="text-right px-2">
                            <button type="reset" onclick="updateUI()" class="text-[9px] font-bold text-gray-400 hover:text-dqred uppercase tracking-widest underline transition-colors">Clear form</button>
                        </div>
                    </div>
                </form>
            </div>
            
            <div class="mt-8 text-center space-y-3 no-print">
                <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Visit Us At</p>
                <p class="text-sm font-bold text-dqblue">35795 US-27, Haines City, FL 33844</p>
                <a href="https://maps.google.com/?q=Dairy+Queen+Haines+City" target="_blank" class="inline-block bg-white border border-gray-200 text-dqblue px-6 py-2 rounded-full font-bold uppercase text-[10px] hover:bg-gray-50 transition-all shadow-sm">
                    📍 Get Directions
                </a>
            </div>
        </div>
    </div>

    <div id="review-modal" class="hidden fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 no-print">
        <div class="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl">
            <div class="bg-dqblue text-white p-5 font-black uppercase text-center italic">Review Your Order</div>
            <div id="review-content" class="p-6 space-y-3 text-sm"></div>
            <div class="p-5 bg-gray-50 space-y-2">
                <button id="confirm-send" class="w-full bg-dqred text-white py-4 rounded-2xl font-black uppercase">Confirm & Place Order</button>
                <button onclick="document.getElementById('review-modal').classList.add('hidden')" class="w-full text-gray-400 font-bold text-[10px] uppercase py-2 text-center">Go Back & Edit</button>
            </div>
        </div>
    </div>

    <div id="success-screen" class="hidden max-w-xl mx-auto mt-10 p-8 bg-white rounded-3xl shadow-2xl text-center">
        <div class="text-dqblue text-5xl mb-4">✅</div>
        <h2 class="text-2xl font-black text-dqblue uppercase italic">Order Sent!</h2>
        <p class="text-gray-600 my-4 font-medium">We have received your order. Please keep a copy of your receipt below.</p>
        <div id="receipt-area" class="text-left bg-gray-50 p-6 rounded-xl border border-dashed border-gray-300 my-6 font-mono text-xs"></div>
        <button onclick="window.print()" class="bg-dqblue text-white px-8 py-3 rounded-full font-black uppercase text-xs no-print">Print Receipt</button>
        <button onclick="location.reload()" class="block w-full mt-4 text-gray-400 text-[10px] uppercase font-bold no-print">Place Another Order</button>
    </div>

    <script>
        const phoneInput = document.getElementById('custPhone');
        phoneInput.addEventListener('input', (e) => {
            let x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
            e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
        });

        const dateInput = document.getElementById('pickupDate');
        const timeInput = document.getElementById('pickupTime');
        const mainImg = document.getElementById('main-preview-img');
        const previewLabel = document.getElementById('preview-label');
        const blizzardFlavorDiv = document.getElementById('blizzard-flavor-div');
        const submitBtn = document.getElementById('submitBtn');
        
        const todayStr = new Date().toISOString().split("T")[0];
        const minBlizzardDate = new Date();
        minBlizzardDate.setDate(minBlizzardDate.getDate() + 2);
        const fortyEightStr = minBlizzardDate.toISOString().split("T")[0];

        const imgs = {
            traditional: "https://image2url.com/r2/default/images/1774635888791-f9bddeb9-8572-45b5-9f64-c500ef00699b.webp",
            traditionalSheet: "https://image2url.com/r2/default/images/1774635960368-41444177-797d-4f2b-8e1f-b72b2f746285.webp",
            "OREO": "https://image2url.com/r2/default/images/1774635626370-9d1b5cf5-5fce-4d30-89a5-9a5fc230df7a.webp",
            "Reese's": "https://image2url.com/r2/default/images/1774635590836-b625b172-6dcb-4e00-8c48-c67b596d97d9.webp",
            "Choco Brownie": "https://image2url.com/r2/default/images/1774635781127-38372af0-d7d5-4773-83ad-396ec4c5e2dd.png",
            "Cookie Dough": "https://image2url.com/r2/default/images/1774635686331-71176bec-e41a-416a-a7c0-52b98cd72f34.jpeg"
        };

        function formatTime12(t) {
            if (!t) return "";
            let [h, m] = t.split(':');
            let ampm = h >= 12 ? 'p.m.' : 'a.m.';
            h = h % 12 || 12;
            return `${h}:${m} ${ampm}`;
        }

        function updateUI() {
            const typeRadio = document.querySelector('input[name="cakeType"]:checked');
            const type = typeRadio ? typeRadio.value : 'traditional';
            const size = document.getElementById('cakeSize').value;
            const isToday = dateInput.value === todayStr;

            if (type === 'blizzard') {
                blizzardFlavorDiv.classList.remove('hidden');
                mainImg.src = imgs[document.getElementById('flavorSelect').value];
                previewLabel.textContent = "Blizzard Cake Selected";
                dateInput.min = fortyEightStr;
                if (dateInput.value && dateInput.value < fortyEightStr) {
                    dateInput.value = "";
                    document.getElementById('blizzard-date-error').classList.remove('hidden');
                } else { document.getElementById('blizzard-date-error').classList.add('hidden'); }
            } else {
                blizzardFlavorDiv.classList.add('hidden');
                mainImg.src = (size === 'sheet') ? imgs.traditionalSheet : imgs.traditional;
                previewLabel.textContent = (size === 'sheet') ? "Traditional Sheet Cake" : "Traditional Cake";
                dateInput.min = todayStr;
                document.getElementById('blizzard-date-error').classList.add('hidden');
            }

            if (dateInput.value && timeInput.value) {
                const dateObj = new Date(dateInput.value.replace(/-/g, '\/'));
                const isWeekend = [0, 5, 6].includes(dateObj.getDay());
                const closeHour = isWeekend ? 22 : 21;
                const [h, m] = timeInput.value.split(':').map(Number);
                const totalMins = h * 60 + m;
                if (totalMins < 11 * 60 || totalMins > (closeHour * 60 - 30)) {
                    document.getElementById('time-warning').classList.remove('hidden');
                    submitBtn.disabled = true;
                } else {
                    document.getElementById('time-warning').classList.add('hidden');
                    submitBtn.disabled = false;
                }
            }

            const prices = { mini: 21.99, "8inch": 33.99, "10inch": 38.99, sheet: 46.99 };
            let total = prices[size] || 33.99;
            let fee = (isToday && type === 'traditional') ? 5 : 0;
            document.getElementById('fee-note').classList.toggle('hidden', fee === 0);
            document.getElementById('total-display').textContent = `$${(total + fee).toFixed(2)}`;
        }

        document.getElementById('cake-order-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const type = document.querySelector('input[name="cakeType"]:checked').value;
            const typeDisplay = (type === 'traditional') ? "Traditional" : "Blizzard";
            const flavorLine = (type === 'blizzard') ? `<p><strong>Blizzard Flavor:</strong> ${document.getElementById('flavorSelect').value}</p>` : "";
            const isToday = dateInput.value === todayStr;
            const feeLine = (isToday && type === 'traditional') ? `<p class="text-dqred font-bold">+$5.00 Same Day Fee Applied</p>` : "";
            const messageValue = document.getElementById('cakeMsg').value || "No message";
            const notesValue = document.getElementById('specialNotes').value || "None";
            
            document.getElementById('review-content').innerHTML = `
                <p><strong>Name:</strong> ${document.getElementById('custName').value}</p>
                <p><strong>Phone:</strong> ${document.getElementById('custPhone').value}</p>
                <p><strong>Cake Type:</strong> ${typeDisplay} (${document.getElementById('cakeSize').value})</p>
                <p><strong>Ice Cream Base:</strong> ${document.getElementById('iceCreamType').value}</p>
                ${flavorLine}
                <p><strong>Pickup:</strong> ${dateInput.value} at ${formatTime12(timeInput.value)}</p>
                <p><strong>Colors:</strong> ${document.getElementById('borderColor').value} / ${document.getElementById('backupColor').value}</p>
                <p><strong>Notes:</strong> ${notesValue}</p>
                <p><strong>Message:</strong> "${messageValue}"</p>
                ${feeLine}
                <p class="text-xl font-black pt-2 text-dqblue border-t mt-2">Total: ${document.getElementById('total-display').textContent}</p>
            `;
            document.getElementById('review-modal').classList.remove('hidden');
        });

        document.getElementById('confirm-send').addEventListener('click', async () => {
            const btn = document.getElementById('confirm-send');
            const form = document.getElementById('cake-order-form');
            btn.textContent = "SENDING..."; btn.disabled = true;
            const res = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' }});
            if (res.ok) {
                document.getElementById('review-modal').classList.add('hidden');
                document.getElementById('main-content').classList.add('hidden');
                document.getElementById('success-screen').classList.remove('hidden');
                document.getElementById('receipt-area').innerHTML = `
                    <div class="text-center font-bold border-b mb-2 pb-2 uppercase">Order Receipt</div>
                    ${document.getElementById('review-content').innerHTML}
                    <div class="mt-4 pt-2 border-t text-center opacity-50 uppercase">Show this at the front counter</div>
                `;
            } else { alert("Error sending form. Please call 863-422-9336."); btn.textContent = "Confirm & Place Order"; btn.disabled = false; }
        });

        window.onload = updateUI;
    </script>
</body>
</html>
